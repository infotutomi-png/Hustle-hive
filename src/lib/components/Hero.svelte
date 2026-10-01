<script lang="ts">
	import home from '$lib/content/home.json';
	import { activeCards } from '$lib/happening-soon';

	const hero = home.hero;
	// The last word of the second headline line (e.g. "Futures.") is shown in brand orange
	const line2Words = hero.headingLine2.trim().split(/\s+/);
	const line2Last = line2Words.pop() ?? '';
	const line2Start = line2Words.join(' ');
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
			{line2Start} <span class="text-brand-orange">{line2Last}</span>
		</h1>

		<p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
			{hero.subheading}
		</p>

		<!-- Two pathways: which part of Hustle Hive are you here for? -->
		<div class="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8 text-left">
			{#each hero.pathways as pathway}
				<a
					href={pathway.href}
					class="group flex items-center gap-4 rounded-2xl bg-stone-900/80 border-2 border-stone-700 hover:border-brand-orange p-5 md:p-6 transition-colors duration-200"
				>
					<span class="w-14 h-14 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
						<svg class="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{#if pathway.icon === 'graduation'}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							{/if}
						</svg>
					</span>
					<span class="flex-1">
						<span class="block text-xl md:text-2xl font-bold text-white group-hover:text-brand-orange transition-colors duration-200">{pathway.title}</span>
						<span class="block text-gray-300 text-sm md:text-base mt-1">{pathway.text}</span>
					</span>
					<svg class="w-6 h-6 text-brand-orange flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			{/each}
		</div>

		<div class="flex flex-col sm:flex-row justify-center gap-3">
			<a
				href={hero.bookHref}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex justify-center items-center gap-2 px-8 py-3 bg-brand-orange text-black font-semibold rounded-md hover:bg-brand-orange-dark transition-colors duration-200"
			>
				{hero.bookLabel}
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
				</svg>
			</a>
			{#if showButton}
				<a
					href={hero.buttonHref}
					class="inline-flex justify-center items-center gap-2 px-8 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-md transition-colors duration-200"
				>
					{hero.buttonLabel}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</a>
			{/if}
		</div>
	</div>
</section>

<style>
	/* Keep the pattern faint and fade it out towards the edges so it never competes with the text */
	.honeycomb {
		opacity: 0.22;
		-webkit-mask-image: radial-gradient(ellipse 75% 80% at center, black 30%, transparent 85%);
		mask-image: radial-gradient(ellipse 75% 80% at center, black 30%, transparent 85%);
	}
</style>
