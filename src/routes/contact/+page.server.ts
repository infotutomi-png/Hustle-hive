import { fail } from '@sveltejs/kit';
import { sendEmail, escapeHtml } from '$lib/server/email';
import type { Actions } from './$types';

import { CONTACT_SUBJECTS } from '$lib/links';

const VALID_SUBJECTS = CONTACT_SUBJECTS.map((s) => s.value);

const SUBJECT_LABELS: Record<string, string> = Object.fromEntries(
	CONTACT_SUBJECTS.map((s) => [s.value, s.label])
);

export const actions: Actions = {
	default: async ({ request, platform }) => {
		const data = await request.formData();

		// Honeypot field is hidden from people; if it's filled in, it's a bot.
		// Pretend it worked so the bot doesn't retry.
		if (data.get('website')?.toString()) {
			return { success: true };
		}

		const name = data.get('name')?.toString().trim() ?? '';
		const email = data.get('email')?.toString().trim() ?? '';
		const subject = data.get('subject')?.toString().trim() ?? '';
		const message = data.get('message')?.toString().trim() ?? '';

		// Server-side validation
		const errors: Record<string, string> = {};

		if (!name || name.length < 2) {
			errors.name = 'Name must be at least 2 characters';
		}

		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = 'Please enter a valid email address';
		}

		if (!subject || !VALID_SUBJECTS.includes(subject)) {
			errors.subject = 'Please select a valid subject';
		}

		if (!message || message.length < 10) {
			errors.message = 'Message must be at least 10 characters';
		}

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values: { name, email, subject, message } });
		}

		const apiToken = platform?.env?.POSTMARK_API_TOKEN;
		if (!apiToken) {
			console.error('POSTMARK_API_TOKEN not configured');
			return fail(500, {
				errors: { form: 'Email service is not configured. Please try again later.' },
				values: { name, email, subject, message }
			});
		}

		const subjectLabel = SUBJECT_LABELS[subject] ?? subject;

		const result = await sendEmail(apiToken, {
			subject: `Contact Form: ${subjectLabel} - from ${name}`,
			replyTo: email,
			htmlBody: `
				<h2>New Contact Form Submission</h2>
				<table style="border-collapse: collapse; width: 100%;">
					<tr>
						<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
						<td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(name)}</td>
					</tr>
					<tr>
						<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
						<td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
					</tr>
					<tr>
						<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
						<td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(subjectLabel)}</td>
					</tr>
					<tr>
						<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
						<td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(message).replace(/\n/g, '<br>')}</td>
					</tr>
				</table>
			`,
			textBody: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subjectLabel}\nMessage:\n${message}`
		});

		if (!result.success) {
			return fail(500, {
				errors: { form: 'Failed to send your message. Please try again later.' },
				values: { name, email, subject, message }
			});
		}

		return { success: true };
	}
};
