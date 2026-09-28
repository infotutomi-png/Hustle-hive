<script lang="ts">
	// "Inside Hustle HQ" kit section for the About page (linkable at /about#hustle-hq).
	// Edit the cards in src/lib/content/about.json → "hq" (or in the CMS). Add an "image" to a
	// card to show a photo in place of its icon.
	import about from '$lib/content/about.json';
	import { isExternal } from '$lib/links';

	const hq = about.hq;
</script>

<section id="hustle-hq" class="mb-16 scroll-mt-28" aria-labelledby="hustle-hq-heading">
	<div class="text-center mb-10">
		<h2 id="hustle-hq-heading" class="text-3xl md:text-4xl font-bold text-white mb-4">{hq.title}</h2>
		<p class="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">{hq.intro}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-6">
		{#each hq.cards as card}
			<article class="bg-stone-900/50 border border-stone-700/50 rounded-2xl overflow-hidden flex flex-col">
				{#if card.image}
					<img src={card.image} alt={card.title} loading="lazy" class="w-full h-44 object-cover" />
				{/if}
				<div class="p-6 flex-1 flex flex-col">
					{#if !card.image}
						<div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center mb-4">
							<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								{#if card.icon === 'cube'}
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
								{:else if card.icon === 'scissors'}
									<circle cx="6" cy="6" r="3" stroke-width="2" />
									<circle cx="6" cy="18" r="3" stroke-width="2" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
								{:else if card.icon === 'press'}
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
								{:else if card.icon === 'laptop'}
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								{/if}
							</svg>
						</div>
					{/if}
					<h3 class="text-xl font-bold text-brand-orange uppercase tracking-wide mb-2">{card.title}</h3>
					<p class="text-gray-300 leading-relaxed mb-4 flex-1">{card.description}</p>
					<p class="text-gray-400 text-sm border-t border-stone-700/50 pt-3">
						<span class="font-semibold text-gray-300">Kit:</span>
						{card.kit.join(' · ')}
					</p>
				</div>
			</article>
		{/each}
	</div>

	<div class="text-center mt-10">
		<p class="text-gray-300 text-lg mb-6">{hq.outro}</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href={hq.primaryButtonHref}
				target={isExternal(hq.primaryButtonHref) ? '_blank' : undefined}
				rel={isExternal(hq.primaryButtonHref) ? 'noopener noreferrer' : undefined}
				class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200"
			>
				{hq.primaryButtonLabel}
				{#if isExternal(hq.primaryButtonHref)}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				{/if}
			</a>
			<a
				href={hq.secondaryButtonHref}
				class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-700/60 hover:bg-stone-600/60 text-white font-semibold rounded-lg transition-colors duration-200 border border-stone-600/50"
			>
				{hq.secondaryButtonLabel}
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</div>
</section>
