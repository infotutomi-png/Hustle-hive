// Shared site-wide links and company details, used by the navbar, footer and pages.
import programmesContent from '$lib/content/programmes.json';

export const SITE_URL = 'https://hustlehive.co.uk';

// Booking site for holiday clubs, workshops and courses
export const BOOKINGS_URL = 'https://hustlehivebookings.com';

// Main sections
export const COMMUNITY_URL = '/community'; // Community & Youth
export const AP_URL = '/alternative-provision'; // Alternative Provision (was hustlehivelearning.co.uk)
export const AP_APPROACH_URL = '/alternative-provision/approach';
export const AP_SCHOOLS_URL = '/alternative-provision/schools';
export const AP_CONTACT_URL = '/alternative-provision#contact';
export const SAFEGUARDING_URL = '/about/safeguarding';
export const COMMISSIONER_PACK_URL = '/downloads/hustle-hive-commissioner-pack.pdf';

export const MAKERS_URL = '/programmes/makers-to-market';
export const MAKERS_APPLY_URL = '/programmes/makers-to-market/apply';

export const FACEBOOK_URL = 'https://www.facebook.com/share/1Gmf1xJUC8/';

export const company = {
	name: 'Hustle Hive CIC',
	number: '16691281',
	registeredOffice: '69 Woodland Terrace, Darlington, DL3 9NT',
	businessAddress: 'Unit 6 Paramo House, Denmark Street, Darlington, DL3 0LP',
	phone: '07593 975681'
};

// Google Maps for the business address (no API key needed)
const mapsQuery = encodeURIComponent(`Hustle Hive, ${company.businessAddress}`);
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(company.businessAddress)}&output=embed`;

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
		streetAddress: 'Unit 6 Paramo House, Denmark Street',
		addressLocality: 'Darlington',
		postalCode: 'DL3 0LP',
		addressCountry: 'GB'
	},
	sameAs: [FACEBOOK_URL]
};

export function isExternal(href: string) {
	return /^https?:\/\//.test(href);
}

/** Link straight to the contact form with a subject pre-selected (see CONTACT_SUBJECTS). */
export function contactHref(subject: string) {
	return `/contact?subject=${encodeURIComponent(subject)}#contact-form`;
}

// Subjects offered on the contact form. The value is what goes in ?subject=... and the email.
const ALL_CONTACT_SUBJECTS = [
	{ value: 'general', label: 'General Enquiry' },
	{ value: 'makers-to-market', label: 'Makers to Market' },
	{ value: 'holiday-clubs', label: 'Holiday Clubs & Workshops' },
	{ value: 'maker-days', label: 'Maker Days (home education)' },
	{ value: 'rangers', label: 'Hustle Hive Rangers' },
	{ value: 'school-referral', label: 'School Referral / Alternative Provision' },
	{ value: 'after-school', label: 'After-School Programme' },
	{ value: 'entrepreneurship-hub', label: 'Entrepreneurship Hub' },
	{ value: 'outdoor-education', label: 'Outdoor Education & Wellbeing' },
	{ value: 'partnership', label: 'Partnership Opportunities' },
	{ value: 'volunteer', label: 'Volunteering' },
	{ value: 'complaints', label: 'Complaints' },
	{ value: 'other', label: 'Other' }
];

// Archived programmes (see programmes.json) drop out of the dropdown, unless a live programme still uses the subject.
const liveSubjects = new Set(programmesContent.programmes.filter((p) => !p.archived).map((p) => p.interestSubject));
const archivedSubjects = new Set(
	programmesContent.programmes.filter((p) => p.archived && !liveSubjects.has(p.interestSubject)).map((p) => p.interestSubject)
);
export const CONTACT_SUBJECTS = ALL_CONTACT_SUBJECTS.filter((s) => !archivedSubjects.has(s.value));
