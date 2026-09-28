<script lang="ts">
	// "Where to next?" section for the homepage: one card per type of visitor
	import home from '$lib/content/home.json';
	import { isExternal } from '$lib/links';

	const section = home.whereNext;
	const cards = section.cards;
</script>

<section id="where-to-next" class="relative py-20 overflow-hidden scroll-mt-24 bg-gradient-to-b from-black via-stone-950 to-black">
	<div class="relative z-10 max-w-6xl mx-auto px-4">
		<!-- Section Header -->
		<h2 class="text-4xl md:text-5xl font-bold text-white text-center mb-12">
			{section.heading}
		</h2>

		<!-- Cards Grid -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each cards as card}
				{@const external = isExternal(card.href)}
				<div class="rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-700/50 backdrop-blur-sm flex flex-col h-full hover:border-brand-orange/50 transition-colors duration-200">
					<div class="p-6 md:p-8 bg-gradient-to-b from-stone-800/80 to-stone-900/90 flex-1 flex flex-col">
						<!-- Icon -->
						<div class="w-14 h-14 bg-brand-orange/20 rounded-full flex items-center justify-center mb-5">
							{#if card.icon === 'graduation'}
								<svg class="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
								</svg>
							{:else if card.icon === 'tools'}
								<svg class="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437" />
								</svg>
							{:else if card.icon === 'lightbulb'}
							<svg class="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
							</svg>
						{:else if card.icon === 'community'}
								<svg class="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							{/if}
						</div>

						<h3 class="text-xl md:text-2xl font-bold uppercase tracking-wide text-brand-orange mb-3">
							{card.title}
						</h3>

						<p class="text-gray-300 italic mb-6 flex-1">
							{card.description}
						</p>

						<a
							href={card.href}
							target={external ? '_blank' : undefined}
							rel={external ? 'noopener noreferrer' : undefined}
							class="inline-flex items-center gap-2 px-5 py-2 bg-stone-700/60 hover:bg-stone-600/60 text-white font-medium rounded-lg transition-colors duration-200 border border-stone-600/50 w-fit"
						>
							{card.linkLabel}
							{#if external}
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							{:else}
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							{/if}
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
