<script lang="ts">
	// Page title, description, canonical URL and social sharing tags.
	// Every page uses this so they all get the same set of tags.
	import { page } from '$app/state';
	import { SITE_URL } from '$lib/links';

	interface Props {
		title: string;
		description: string;
		/** Share preview image (1200x630) in static/, e.g. /og/creatureverse.jpg. Defaults to the founders photo. */
		image?: string;
		imageAlt?: string;
	}

	let {
		title,
		description,
		image = '/og-image.jpg',
		imageAlt = 'Hustle Hive founders Gavin Copland and Kieron Davis in Darlington'
	}: Props = $props();

	const url = $derived(SITE_URL + (page.url.pathname === '/' ? '/' : page.url.pathname.replace(/\/+$/, '')));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:site_name" content="Hustle Hive" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{SITE_URL}{image}" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{SITE_URL}{image}" />
</svelte:head>
