// Hustle Hive sister sites, linked from the navbar, footer and home page.
export const LEARNING_URL = 'https://hustlehivelearning.co.uk';
export const BOOKINGS_URL = 'https://hustlehivebookings.com';

export const sisterSites = [
	{ label: 'Alternative Provision', href: LEARNING_URL, domain: 'hustlehivelearning.co.uk' },
	{ label: 'Workshops & Courses', href: BOOKINGS_URL, domain: 'hustlehivebookings.com' }
];

export function isExternal(href: string) {
	return /^https?:\/\//.test(href);
}
