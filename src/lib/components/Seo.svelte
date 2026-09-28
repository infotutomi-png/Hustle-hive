<script lang="ts">
	// Page title, description, canonical URL and social sharing tags.
	// Every page uses this so they all get the same set of tags.
	import { page } from '$app/state';
	import { SITE_URL } from '$lib/links';

	interface Props {
		title: string;
		description: string;
	}

	let { title, description }: Props = $props();

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
	<meta property="og:image" content="{SITE_URL}/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Hustle Hive logo" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>
