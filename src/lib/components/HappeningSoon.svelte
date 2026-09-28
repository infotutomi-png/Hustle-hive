<script lang="ts">
	// "Happening soon" section for the homepage.
	// Edit the cards in src/lib/content/happening-soon.json (or in the CMS).
	// Cards hide automatically after their end date; the section hides when none are left.
	import content from '$lib/content/happening-soon.json';
	import { activeCards } from '$lib/happening-soon';
	import { isExternal } from '$lib/links';

	const cards = activeCards();

	// One card sits centred at a comfortable width; two or more share the row
	const gridClass =
		cards.length === 1
			? 'grid-cols-1 max-w-3xl mx-auto'
			: cards.length === 2
				? 'grid-cols-1 md:grid-cols-2'
				: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
</script>

{#if cards.length}
<section id="happening-soon" class="relative pt-10 pb-20 md:pt-12 overflow-hidden scroll-mt-24">
	<div class="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black">
		<div class="absolute inset-0 opacity-10" style="background-image: url('/images/honeycomb-pattern.svg'); background-size: 60px 60px;"></div>
		<div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
		<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
	</div>

	<div class="relative z-10 max-w-6xl mx-auto px-4">
		<h2 class="text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-10">
			{content.heading}
		</h2>

		<div class="grid gap-6 {gridClass}">
			{#each cards as card}
				{@const external = isExternal(card.buttonHref)}
				<article class="rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-700/50 backdrop-blur-sm flex flex-col h-full hover:border-brand-orange/50 transition-colors duration-200">
					<!-- Image (branded placeholder until one is set) -->
					<div class="relative h-56 md:h-72 overflow-hidden bg-stone-900">
						{#if card.image}
							<img src={card.image} alt={card.imageAlt} loading="lazy" class="w-full h-full object-cover" />
						{:else}
							<div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-800 via-stone-900 to-black">
								<div class="absolute inset-0 opacity-20" style="background-image: url('/images/honeycomb-pattern.svg'); background-size: 60px 60px;"></div>
								<img src="/images/hustlehive-logo.png" alt="" class="relative h-20 opacity-60" />
							</div>
						{/if}
						<span class="absolute top-4 left-4 px-3 py-1 bg-brand-orange text-black text-sm font-bold rounded-full">
							{card.tagline}
						</span>
					</div>

					<div class="p-6 md:p-8 bg-gradient-to-b from-stone-800/80 to-stone-900/90 flex-1 flex flex-col">
						<h3 class="text-2xl md:text-3xl font-bold uppercase tracking-wide text-brand-orange mb-3">
							{card.title}
						</h3>
						<p class="text-gray-300 text-lg mb-5">
							{card.text}
						</p>

						{#if card.details.length}
							<ul class="flex flex-wrap gap-2 mb-6">
								{#each card.details as detail}
									<li class="px-3 py-1.5 rounded-lg bg-stone-700/50 border border-stone-600/50 text-white text-sm font-medium">
										{detail}
									</li>
								{/each}
							</ul>
						{/if}

						<a
							href={card.buttonHref}
							target={external ? '_blank' : undefined}
							rel={external ? 'noopener noreferrer' : undefined}
							class="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 w-full sm:w-fit"
						>
							{card.buttonLabel}
							{#if external}
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							{:else}
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							{/if}
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
{/if}
