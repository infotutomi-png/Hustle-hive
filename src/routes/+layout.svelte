<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Titles, descriptions and social sharing tags are set per page with <Seo />.
	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
