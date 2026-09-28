<script lang="ts">
	import home from '$lib/content/home.json';
	import { activeCards } from '$lib/happening-soon';

	const hero = home.hero;
	// "See what's on" scrolls to Happening Soon, so hide it when that section has no cards left
	const showButton = !hero.buttonHref.startsWith('#happening-soon') || activeCards().length > 0;
</script>

<!-- Compact hero so the top of the Happening Soon cards shows on a typical laptop screen -->
<section class="relative overflow-hidden bg-black pt-32 pb-10 md:pt-36 md:pb-12">
	<!-- Subtle orange honeycomb (inline SVG), fading out towards the edges -->
	<svg class="honeycomb absolute inset-0 w-full h-full text-brand-orange" aria-hidden="true">
		<defs>
			<!-- One pointy-top hexagon plus the vertical link to the next row tiles into a full honeycomb -->
			<pattern id="hero-honeycomb" width="56" height="97" patternUnits="userSpaceOnUse">
				<path
					d="M28 0 L56 16.17 V48.5 L28 64.67 L0 48.5 V16.17 Z M28 64.67 V97"
					fill="none"
					stroke="currentColor"
					stroke-width="1.2"
				/>
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#hero-honeycomb)" />
	</svg>
	<!-- Soft orange glow behind the headline -->
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(247,147,30,0.10),transparent_60%)]" aria-hidden="true"></div>

	<!-- Content -->
	<div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
		<h1 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
			{hero.headingLine1}<br />
			{hero.headingLine2}
		</h1>

		<p class="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
			{hero.subheading}
		</p>

		{#if showButton}
		<div class="flex justify-center">
			<a
				href={hero.buttonHref}
				class="inline-flex items-center gap-2 px-8 py-3 bg-brand-orange text-black font-semibold rounded-md hover:bg-brand-orange-dark transition-colors duration-200"
			>
				{hero.buttonLabel}
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</a>
		</div>
		{/if}
	</div>
</section>

<style>
	/* Keep the pattern faint and fade it out towards the edges so it never competes with the text */
	.honeycomb {
		opacity: 0.14;
		-webkit-mask-image: radial-gradient(ellipse 70% 75% at center, black 25%, transparent 80%);
		mask-image: radial-gradient(ellipse 70% 75% at center, black 25%, transparent 80%);
	}
</style>
