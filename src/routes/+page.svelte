<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HappeningSoon from '$lib/components/HappeningSoon.svelte';
	import WhereToNext from '$lib/components/WhereToNext.svelte';
	import AboutIntro from '$lib/components/AboutIntro.svelte';
	// Programmes.svelte (programmes grid) and MakersToMarket.svelte (gallery) are no longer
	// on the homepage; the grid lives on /programmes and the gallery on /programmes/makers-to-market.
</script>

<Seo
	title="Hustle Hive - Turning Ideas Into Skills. Skills Into Futures."
	description="A community-powered makerspace and enterprise hub in Darlington helping people of all ages build confidence, skills, and real-world opportunities."
/>

<main class="bg-black">
	<Hero />
	<HappeningSoon />
	<WhereToNext />
	<AboutIntro />
</main>
