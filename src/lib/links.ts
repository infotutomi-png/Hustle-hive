// Shared site-wide links and company details, used by the navbar, footer and pages.

export const SITE_URL = 'https://hustlehive.co.uk';

// Sister sites
export const LEARNING_URL = 'https://hustlehivelearning.co.uk'; // schools & referrers
export const LEARNING_TEAM_URL = 'https://hustlehivelearning.co.uk/meet-the-team';
export const BOOKINGS_URL = 'https://hustlehivebookings.com'; // holiday clubs & workshops

export const MAKERS_URL = '/programmes/makers-to-market';
export const MAKERS_APPLY_URL = '/programmes/makers-to-market/apply';

export const FACEBOOK_URL = 'https://www.facebook.com/share/1Gmf1xJUC8/';

export const company = {
	name: 'Hustle Hive CIC',
	number: '16691281',
	registeredOffice: '69 Woodland Terrace, Darlington, DL3 9NT',
	businessAddress: 'Unit 5 Paramo House, Denmark Street, Darlington, DL3 0LP',
	phone: '07593 975681'
};

// Structured data (JSON-LD) so search engines understand who we are and where we are
export const organisationJsonLd = {
	'@context': 'https://schema.org',
	'@type': ['Organization', 'LocalBusiness'],
	name: company.name,
	url: SITE_URL,
	logo: `${SITE_URL}/images/logo-full.png`,
	image: `${SITE_URL}/og-image.jpg`,
	telephone: '+44 7593 975681',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Unit 5 Paramo House, Denmark Street',
		addressLocality: 'Darlington',
		postalCode: 'DL3 0LP',
		addressCountry: 'GB'
	},
	sameAs: [FACEBOOK_URL]
};

export function isExternal(href: string) {
	return /^https?:\/\//.test(href);
}

/** Link to the contact page with a subject pre-selected (see CONTACT_SUBJECTS). */
export function contactHref(subject: string) {
	return `/contact?subject=${encodeURIComponent(subject)}`;
}

// Subjects offered on the contact form. The value is what goes in ?subject=... and the email.
export const CONTACT_SUBJECTS = [
	{ value: 'general', label: 'General Enquiry' },
	{ value: 'makers-to-market', label: 'Makers to Market' },
	{ value: 'holiday-clubs', label: 'Holiday Clubs & Workshops' },
	{ value: 'school-referral', label: 'School Referral / Alternative Provision' },
	{ value: 'after-school', label: 'After-School Programme' },
	{ value: 'entrepreneurship-hub', label: 'Entrepreneurship Hub' },
	{ value: 'outdoor-education', label: 'Outdoor Education & Wellbeing' },
	{ value: 'partnership', label: 'Partnership Opportunities' },
	{ value: 'volunteer', label: 'Volunteering' },
	{ value: 'other', label: 'Other' }
];
