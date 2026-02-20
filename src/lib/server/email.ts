const POSTMARK_API_URL = 'https://api.postmarkapp.com/email';
const FROM_EMAIL = 'noreply@hustlehive.co.uk';
const TO_EMAIL = 'info.hustlehive@gmail.com';

interface SendEmailOptions {
	subject: string;
	htmlBody: string;
	textBody: string;
	replyTo?: string;
}

interface PostmarkResponse {
	ErrorCode: number;
	Message: string;
}

export async function sendEmail(
	apiToken: string,
	options: SendEmailOptions
): Promise<{ success: boolean; error?: string }> {
	const { subject, htmlBody, textBody, replyTo } = options;

	try {
		const response = await fetch(POSTMARK_API_URL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'X-Postmark-Server-Token': apiToken
			},
			body: JSON.stringify({
				From: FROM_EMAIL,
				To: TO_EMAIL,
				Subject: subject,
				HtmlBody: htmlBody,
				TextBody: textBody,
				...(replyTo ? { ReplyTo: replyTo } : {}),
				MessageStream: 'outbound'
			})
		});

		const data = (await response.json()) as PostmarkResponse;

		if (!response.ok || data.ErrorCode !== 0) {
			console.error('Postmark API error:', data);
			return {
				success: false,
				error: `Postmark error (${data.ErrorCode}): ${data.Message}`
			};
		}

		return { success: true };
	} catch (err) {
		console.error('Failed to send email:', err);
		return { success: false, error: 'Failed to connect to email service' };
	}
}

export function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}
