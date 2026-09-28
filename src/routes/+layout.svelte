<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { organisationJsonLd } from '$lib/links';

	// Titles, descriptions and social sharing tags are set per page with <Seo />.
	let { children } = $props();

	// Escape "<" so the JSON can't close the script tag early
	const jsonLd = JSON.stringify(organisationJsonLd).replace(/</g, '\\u003c');
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<Navbar />
{@render children()}
<Footer />
