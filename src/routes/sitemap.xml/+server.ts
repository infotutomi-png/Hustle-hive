import type { RequestHandler } from './$types';
import { SITE_URL } from '$lib/links';
import { activeProgrammePaths } from '$lib/programmes';

// Public pages for search engines. Hidden sections (sellers, shop, /admin) are left out on purpose.
// Add new pages here when they're created. Programme pages come from programmes.json (archived ones are left out).
const PAGES = [
	'/',
	'/about',
	'/about/safeguarding',
	'/community',
	'/alternative-provision',
	'/alternative-provision/approach',
	'/alternative-provision/schools',
	...activeProgrammePaths,
	'/programmes/makers-to-market/apply',
	'/contact',
	'/privacy',
	'/terms'
];

export const GET: RequestHandler = () => {
	const urls = PAGES.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' }
	});
};
