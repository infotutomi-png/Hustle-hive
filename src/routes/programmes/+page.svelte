<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import programmesContent from '$lib/content/programmes.json';
	import { contactHref } from '$lib/links';

	const programmes = programmesContent.programmes;
</script>

<Seo
	title="Our Programmes - Hustle Hive"
	description="Explore Hustle Hive's programmes - from Makers to Market to our After-School Programme, Outdoor Education & Wellbeing, and Entrepreneurship Hub."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-white italic mb-4">{programmesContent.title}</h1>
		<p class="text-lg md:text-xl text-gray-300">
			{programmesContent.subtitle}
		</p>
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Programme Cards Grid -->
	<section class="max-w-6xl mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each programmes as programme}
				{#if programme.comingSoon}
					<div class="group relative rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-700/50 backdrop-blur-sm flex flex-col h-full hover:border-brand-orange/50 transition-colors duration-300">
						<!-- Coming Soon Badge -->
						<div class="absolute top-4 right-4 z-20 px-3 py-1 bg-brand-orange text-black text-sm font-bold rounded-full">
							Coming Soon
						</div>

						<!-- Card Image -->
						<a href={programme.href} class="block h-48 overflow-hidden" tabindex="-1" aria-hidden="true">
							<img
								src={programme.image}
								alt=""
								loading="lazy"
								class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 {programme.imagePosition || ''}"
							/>
						</a>

						<!-- Card Content -->
						<div class="p-6 bg-gradient-to-b from-stone-800/80 to-stone-900/90 flex-1 flex flex-col">
							<div class="flex items-center gap-3 mb-2">
								{#if programme.icon === 'lightbulb'}
									<svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								{:else if programme.icon === 'rocket'}
									<svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
									</svg>
								{/if}
								<h2 class="text-xl md:text-2xl font-bold text-gray-300 group-hover:text-brand-orange uppercase tracking-wide transition-colors duration-200">
									<a href={programme.href}>{programme.title}</a>
								</h2>
							</div>

							<p class="text-gray-300 italic mb-4 flex-1">
								{programme.description}
							</p>

							<div class="flex flex-wrap gap-3">
								<a
									href={contactHref(programme.interestSubject ?? 'general')}
									class="inline-flex items-center gap-2 px-5 py-2 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 w-fit"
								>
									Register interest
								</a>
								<a
									href={programme.href}
									class="inline-flex items-center gap-2 px-5 py-2 bg-stone-700/60 hover:bg-stone-600/60 text-white font-medium rounded-lg transition-colors duration-200 border border-stone-600/50 w-fit"
								>
									Find out more
								</a>
							</div>
						</div>
					</div>
				{:else}
					<a href={programme.href} class="group relative rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-700/50 backdrop-blur-sm flex flex-col h-full hover:border-brand-orange/50 transition-colors duration-300">
						<!-- Card Image -->
						<div class="h-48 overflow-hidden">
							<img
								src={programme.image}
								alt={programme.title}
								loading="lazy"
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 {programme.imagePosition || ''}"
							/>
						</div>

						<!-- Card Content -->
						<div class="p-6 bg-gradient-to-b from-stone-800/80 to-stone-900/90 flex-1 flex flex-col">
							<div class="flex items-center gap-3 mb-2">
								{#if programme.icon === 'pencil'}
									<svg class="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
									</svg>
								{:else if programme.icon === 'tent'}
									<svg class="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L2 19h20L12 2z" />
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v17" />
									</svg>
								{/if}
								<h2 class="text-xl md:text-2xl font-bold text-brand-orange uppercase tracking-wide">
									{programme.title}
								</h2>
							</div>

							<p class="text-gray-300 italic mb-4 flex-1">
								{programme.description}
							</p>

							<span class="inline-flex items-center gap-2 px-5 py-2 bg-stone-700/60 group-hover:bg-stone-600/60 text-white font-medium rounded-lg transition-colors duration-200 border border-stone-600/50 w-fit">
								Find out more
								<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</span>
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</section>
</main>
