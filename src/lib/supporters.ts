// Supporters shown on the honeycomb wall (/supporters). Managed in the CMS: Sponsors Page → Supporters.
import content from '$lib/content/sponsors.json';
import programmesContent from '$lib/content/programmes.json';

export type Supporter = {
	name: string;
	/** Hide the name and logo, e.g. "A local family business" */
	anonymous?: boolean;
	/** What to call an anonymous supporter (default "Anonymous supporter") */
	anonymousLabel?: string;
	logo?: string;
	url?: string;
	/** Programme id (Sponsors page programme id, or a programme page slug), or "general" */
	programme?: string;
	/** What they funded, e.g. "Ten Creatureverse places and the tournament trophies" */
	supported?: string;
	/** Optional "why we give" quote */
	quote?: string;
	/** Optional, e.g. "Spring 2027" */
	when?: string;
};

export const supporters = (content.sponsors as Supporter[]).filter((s) => s.name?.trim() || s.anonymous);

export const SUPPORTERS_URL = '/supporters';

/** Name and page link for a supporter's programme */
export function programmeInfo(id?: string): { name: string; href?: string } | undefined {
	if (!id || id === 'general') return undefined;
	const sponsorProgramme = content.programmes.find((p) => p.id === id) as { name: string; programmeHref?: string } | undefined;
	if (sponsorProgramme) return { name: sponsorProgramme.name, href: sponsorProgramme.programmeHref };
	const page = programmesContent.programmes.find((p) => p.href === `/programmes/${id}` && !p.archived);
	return page ? { name: page.title, href: page.href } : undefined;
}

export const displayName = (s: Supporter) => (s.anonymous ? s.anonymousLabel?.trim() || 'Anonymous supporter' : s.name);
