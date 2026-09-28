import content from '$lib/content/happening-soon.json';

/** Today's date in the UK as YYYY-MM-DD (so cards expire at UK midnight, not UTC). */
export function ukToday(now = new Date()) {
	return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/London' }).format(now);
}

/**
 * Happening Soon cards that haven't ended yet. A card with an endDate (YYYY-MM-DD) is shown
 * up to and including that day, then hidden automatically. Cards without an endDate never expire.
 */
export function activeCards(today = ukToday()) {
	return content.cards.filter((card) => !card.endDate || card.endDate >= today);
}
