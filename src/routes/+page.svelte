<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import MissionVision from '$lib/components/MissionVision.svelte';
	import Programmes from '$lib/components/Programmes.svelte';
	import MakersToMarket from '$lib/components/MakersToMarket.svelte';
</script>

<svelte:head>
	<title>Hustle Hive - Turning Ideas Into Skills. Skills Into Futures.</title>
	<meta name="description" content="A community-powered makerspace and enterprise hub helping people of all ages build confidence, skills, and real-world opportunities." />
</svelte:head>

<main class="bg-black">
	<Hero />
	<MissionVision />
	<Programmes />
	<MakersToMarket />
</main>
