<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<!-- Social sharing defaults (Facebook/WhatsApp/LinkedIn fall back to each page's <title> and description) -->
<svelte:head>
	<meta property="og:site_name" content="Hustle Hive" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:url" content={page.url.origin + page.url.pathname} />
	<meta property="og:image" content={page.url.origin + '/og-image.jpg'} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Hustle Hive logo" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href={page.url.origin + page.url.pathname} />
</svelte:head>

<Navbar />
{@render children()}
<Footer />
