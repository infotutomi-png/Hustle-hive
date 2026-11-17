import { redirect, type Handle } from '@sveltejs/kit';
import { SHOW_SELLERS, SHOW_SHOP } from '$lib/features';
import { BOOKINGS_URL, COMMUNITY_URL, MAKERS_URL } from '$lib/links';
import { archivedProgrammePaths } from '$lib/programmes';


// Security headers on every page (static files get the same ones from static/_headers).
// No Content-Security-Policy yet: the site embeds Cloudflare Stream, Google Maps, the reviews widget and
// the CMS, so a strict policy needs testing on its own. frame-ancestors still stops other sites framing us.
const SECURITY_HEADERS: Record<string, string> = {
	'Strict-Transport-Security': 'max-age=31536000',
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'SAMEORIGIN',
	'Content-Security-Policy': "frame-ancestors 'self'",
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
};

// Permanent (308) redirects for pages that have been removed or hidden.
export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname.replace(/\/+$/, '') || '/';

	// The Events page now lives on the bookings site.
	if (path === '/upcoming-events') {
		redirect(308, BOOKINGS_URL);
	}

	// The programmes list is now part of Community & Youth (individual programme pages stay put).
	if (path === '/programmes') {
		redirect(308, `${COMMUNITY_URL}#programmes`);
	}

	// Archived programmes (ticked Archived in the CMS) send visitors to the programmes list.
	if (archivedProgrammePaths.includes(path)) {
		redirect(307, `${COMMUNITY_URL}#programmes`);
	}

	// Sellers pages are hidden until they show real makers (see $lib/features).
	if (!SHOW_SELLERS && (path === `${MAKERS_URL}/sellers` || path.startsWith(`${MAKERS_URL}/sellers/`))) {
		redirect(308, MAKERS_URL);
	}

	// The shop is hidden until it has real products (see $lib/features).
	if (!SHOW_SHOP && (path === '/shop' || path.startsWith('/shop/'))) {
		redirect(308, MAKERS_URL);
	}

	const response = await resolve(event);
	for (const [name, value] of Object.entries(SECURITY_HEADERS)) response.headers.set(name, value);
	return response;
};
