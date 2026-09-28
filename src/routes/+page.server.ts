import { fail } from '@sveltejs/kit';
import { sendEmail, escapeHtml } from '$lib/server/email';
import type { Actions } from './$types';

export const actions: Actions = {
	// Holiday club mailing list sign-up. Goes to the same inbox as the contact form.
	subscribe: async ({ request, platform }) => {
		const data = await request.formData();

		// Honeypot field is hidden from people; if it's filled in, it's a bot.
		if (data.get('website')?.toString()) {
			return { subscribed: true };
		}

		const firstName = data.get('firstName')?.toString().trim() ?? '';
		const email = data.get('email')?.toString().trim() ?? '';
		const consent = data.get('consent') === 'yes';

		const errors: Record<string, string> = {};
		if (!firstName || firstName.length < 2) {
			errors.firstName = 'Please enter your first name';
		}
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = 'Please enter a valid email address';
		}
		if (!consent) {
			errors.consent = 'Please tick the box so we can email you';
		}
		if (Object.keys(errors).length > 0) {
			return fail(400, { signupErrors: errors, signupValues: { firstName, email } });
		}

		const apiToken = platform?.env?.POSTMARK_API_TOKEN;
		if (!apiToken) {
			console.error('POSTMARK_API_TOKEN not configured');
			return fail(500, {
				signupErrors: { form: 'Sign-up is not available right now. Please try again later.' },
				signupValues: { firstName, email }
			});
		}

		// Record when and what they agreed to, as proof of consent
		const consentedAt = new Date().toISOString();
		const consentText =
			"I'm happy to receive emails from Hustle Hive about holiday clubs and workshops. I can unsubscribe at any time.";

		const result = await sendEmail(apiToken, {
			subject: `Holiday club mailing list - ${firstName}`,
			replyTo: email,
			htmlBody: `
				<h2>Holiday club mailing list sign-up</h2>
				<table style="border-collapse: collapse; width: 100%;">
					<tr>
						<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">First name</td>
						<td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(firstName)}</td>
					</tr>
					<tr>
						<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
						<td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
					</tr>
					<tr>
						<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Consent</td>
						<td style="padding: 8px; border: 1px solid #ddd;">Ticked: "${escapeHtml(consentText)}"</td>
					</tr>
					<tr>
						<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Signed up</td>
						<td style="padding: 8px; border: 1px solid #ddd;">${consentedAt}</td>
					</tr>
				</table>
			`,
			textBody: `Holiday club mailing list sign-up\n\nFirst name: ${firstName}\nEmail: ${email}\nConsent: Ticked: "${consentText}"\nSigned up: ${consentedAt}`
		});

		if (!result.success) {
			return fail(500, {
				signupErrors: { form: 'Something went wrong. Please try again later.' },
				signupValues: { firstName, email }
			});
		}

		return { subscribed: true };
	}
};
