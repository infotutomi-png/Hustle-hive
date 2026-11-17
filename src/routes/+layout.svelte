<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import { organisationJsonLd } from '$lib/links';

	// Titles, descriptions and social sharing tags are set per page with <Seo />.
	let { children } = $props();

	// Escape "<" so the JSON can't close the script tag early
	const jsonLd = JSON.stringify(organisationJsonLd).replace(/</g, '\\u003c');
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<!-- Skip link: hidden until a keyboard user tabs to it, then jumps past the menu -->
<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:rounded-lg focus:bg-brand-orange focus:text-black focus:font-semibold"
>
	Skip to main content
</a>
<Navbar />
<div id="main-content" tabindex="-1" class="outline-none">
	{@render children()}
</div>
<Footer />
<BackToTop />
