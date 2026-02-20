import { json } from '@sveltejs/kit';
import { sendEmail, escapeHtml } from '$lib/server/email';
import type { RequestHandler } from './$types';

const VALID_AREAS = [
	'3D Printing',
	'Clothing & Textiles',
	'Art & Illustration',
	'Other Craft Activities'
];

export const POST: RequestHandler = async ({ request, platform }) => {
	let body: Record<string, unknown>;

	try {
		body = await request.json();
	} catch {
		return json({ error: 'Invalid request body' }, { status: 400 });
	}

	const name = typeof body.name === 'string' ? body.name.trim() : '';
	const email = typeof body.email === 'string' ? body.email.trim() : '';
	const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
	const age = String(body.age ?? '').trim();
	const location = typeof body.location === 'string' ? body.location.trim() : '';
	const areaOfInterest = typeof body.areaOfInterest === 'string' ? body.areaOfInterest.trim() : '';

	// Validation
	const errors: Record<string, string> = {};

	if (!name || name.length < 2) {
		errors.name = 'Name must be at least 2 characters';
	}

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = 'Please enter a valid email address';
	}

	const ageNum = parseInt(age, 10);
	if (isNaN(ageNum) || ageNum < 11 || ageNum > 99) {
		errors.age = 'Age must be between 11 and 99';
	}

	if (!location || location.length < 2) {
		errors.location = 'Location must be at least 2 characters';
	}

	if (!areaOfInterest || !VALID_AREAS.includes(areaOfInterest)) {
		errors.areaOfInterest = 'Please select a valid area of interest';
	}

	if (Object.keys(errors).length > 0) {
		return json({ errors }, { status: 400 });
	}

	const apiToken = platform?.env?.POSTMARK_API_TOKEN;
	if (!apiToken) {
		console.error('POSTMARK_API_TOKEN not configured');
		return json({ error: 'Email service is not configured' }, { status: 500 });
	}

	const result = await sendEmail(apiToken, {
		subject: `Makers to Market Application - ${name}`,
		replyTo: email,
		htmlBody: `
			<h2>New Makers to Market Application</h2>
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
					<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
					<td style="padding: 8px; border: 1px solid #ddd;">${phone ? escapeHtml(phone) : 'Not provided'}</td>
				</tr>
				<tr>
					<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Age</td>
					<td style="padding: 8px; border: 1px solid #ddd;">${ageNum}</td>
				</tr>
				<tr>
					<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Location</td>
					<td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(location)}</td>
				</tr>
				<tr>
					<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Area of Interest</td>
					<td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(areaOfInterest)}</td>
				</tr>
			</table>
		`,
		textBody: `New Makers to Market Application\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nAge: ${ageNum}\nLocation: ${location}\nArea of Interest: ${areaOfInterest}`
	});

	if (!result.success) {
		return json({ error: 'Failed to send application. Please try again later.' }, { status: 500 });
	}

	return json({ success: true });
};
