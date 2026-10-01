import content from '$lib/content/programmes.json';
import { isExternal } from '$lib/links';

// A programme marked "archived" (in programmes.json / the CMS) is hidden everywhere:
// its card is left off the Community & Youth page, its page redirects to /community,
// and it's left out of the sitemap. Untick "archived" to bring it back.

export const activeProgrammes = content.programmes.filter((p) => !p.archived);

/** Addresses of archived programmes' own pages on this site, e.g. /programmes/after-school */
export const archivedProgrammePaths = content.programmes
	.filter((p) => p.archived && !isExternal(p.href) && p.href.startsWith('/programmes/'))
	.map((p) => p.href);

/** Addresses of live programmes' own pages on this site, for the sitemap */
export const activeProgrammePaths = activeProgrammes
	.filter((p) => !isExternal(p.href) && p.href.startsWith('/programmes/'))
	.map((p) => p.href);
