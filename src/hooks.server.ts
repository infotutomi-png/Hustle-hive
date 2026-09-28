import { redirect, type Handle } from '@sveltejs/kit';
import { SHOW_SELLERS } from '$lib/features';
import { BOOKINGS_URL, MAKERS_URL } from '$lib/links';

// Permanent (308) redirects for pages that have been removed or hidden.
export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname.replace(/\/+$/, '') || '/';

	// The Events page now lives on the bookings site.
	if (path === '/upcoming-events') {
		redirect(308, BOOKINGS_URL);
	}

	// Sellers pages are hidden until they show real makers (see $lib/features).
	if (!SHOW_SELLERS && (path === `${MAKERS_URL}/sellers` || path.startsWith(`${MAKERS_URL}/sellers/`))) {
		redirect(308, MAKERS_URL);
	}

	return resolve(event);
};
