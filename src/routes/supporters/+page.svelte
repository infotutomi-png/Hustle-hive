<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import SupportersHive from '$lib/components/SupportersHive.svelte';
	import { supporters } from '$lib/supporters';
	import { SPONSORS_URL } from '$lib/links';
</script>

<Seo
	title="Hive Heroes: Our Supporters - Hustle Hive"
	description="The businesses and people helping Hustle Hive run free and funded programmes for young people and adults in Darlington. Thank you."
	image="/og/sponsors.jpg"
	imageAlt="Hustle Hive programmes: Creatureverse collectibles, an outdoor woodland walk and ECO//FUTURE scale model homes"
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<section class="max-w-6xl mx-auto px-4 mb-12 text-center">
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-3">Hive Heroes</h1>
		<p class="text-brand-orange font-bold text-lg md:text-xl mb-5">Thank you to our supporters</p>
		<p class="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
			Every cell in our hive is a business or person who has helped young people and adults in Darlington take part in our programmes.
			{#if supporters.length}Choose one to see what they supported.{:else}Our first Hive Heroes will appear here soon.{/if}
		</p>
	</section>

	<section class="max-w-5xl mx-auto px-4 mb-16" aria-label="Supporters">
		<SupportersHive {supporters} />
	</section>

	<section class="max-w-3xl mx-auto px-4">
		<div class="rounded-2xl bg-brand-orange/10 border border-brand-orange/30 p-6 md:p-8 text-center">
			<h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Want to join the hive?</h2>
			<p class="text-gray-300 text-lg mb-6">Fund places, materials or a whole cohort. You can be named with your logo, or stay anonymous.</p>
			<a href={SPONSORS_URL} class="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">
				Ways to support us
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
			</a>
		</div>
	</section>
</main>
