<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HappeningSoon from '$lib/components/HappeningSoon.svelte';
	import AboutIntro from '$lib/components/AboutIntro.svelte';
	import EmailSignup from '$lib/components/EmailSignup.svelte';
	// Not on the homepage at the moment (components kept so they can come back):
	// WhereToNext.svelte (replaced by the two pathway buttons in the hero), InsideTheHive.svelte,
	// Programmes.svelte (the grid lives on /community) and MakersToMarket.svelte (gallery on its own page).
	// Impact figures, testimonials and a News / Stories section can be added once there's content.
</script>

<Seo
	title="Hustle Hive - Community, Youth & Alternative Provision in Darlington"
	description="Hustle Hive CIC is a community-powered makerspace in Darlington offering community and youth programmes, holiday clubs and courses, and alternative provision for schools and local authorities."
/>

<main class="bg-black">
	<Hero />
	<HappeningSoon />
	<AboutIntro />
	<EmailSignup />
</main>
