<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import programmesContent from '$lib/content/programmes.json';
	import { activeProgrammes } from '$lib/programmes';
	import { BOOKINGS_URL, contactHref, isExternal } from '$lib/links';

	// Archived programmes are left out (see $lib/programmes)
	const programmes = activeProgrammes;
</script>

{#snippet icon(name: string, comingSoon: boolean)}
	<svg class="w-8 h-8 flex-shrink-0 {comingSoon ? 'text-gray-400' : 'text-brand-orange'}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		{#if name === 'pencil'}
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
		{:else if name === 'tent'}
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L2 19h20L12 2z" />
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v17" />
		{:else if name === 'lightbulb'}
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
		{:else if name === 'rocket'}
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
		{:else if name === 'sparkles'}
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
		{:else if name === 'tools'}
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437" />
		{/if}
	</svg>
{/snippet}

<Seo
	title="Community & Youth - Hustle Hive"
	description="Hands-on programmes, holiday clubs and workshops in Darlington for young people, families and adults - from Makers to Market to outdoor education and wellbeing."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="text-sm text-gray-400 mb-3"><a href="/" class="hover:text-brand-orange">Home</a> / Community &amp; Youth</div>
		<h1 class="text-4xl md:text-5xl font-bold text-white italic mb-4">{programmesContent.communityTitle}</h1>
		<p class="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
			{programmesContent.communityIntro}
		</p>
		<div class="flex flex-col sm:flex-row gap-3">
			<a href={BOOKINGS_URL} target="_blank" rel="noopener noreferrer" class="inline-flex justify-center items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">
				Book a course
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
			</a>
			<a href="#programmes" class="inline-flex justify-center items-center px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200">Our programmes</a>
		</div>
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Programme Cards Grid -->
	<section id="programmes" class="max-w-6xl mx-auto px-4 mb-20 scroll-mt-28">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-3">{programmesContent.title}</h2>
		<p class="text-lg text-gray-300 mb-8">{programmesContent.subtitle}</p>
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
								{@render icon(programme.icon, true)}
								<h3 class="text-xl md:text-2xl font-bold text-gray-300 group-hover:text-brand-orange uppercase tracking-wide transition-colors duration-200">
									<a href={programme.href}>{programme.title}</a>
								</h3>
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
					{@const external = isExternal(programme.href)}
					<a
						href={programme.href}
						target={external ? '_blank' : undefined}
						rel={external ? 'noopener noreferrer' : undefined}
						class="group relative rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-700/50 backdrop-blur-sm flex flex-col h-full hover:border-brand-orange/50 transition-colors duration-300"
					>
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
								{@render icon(programme.icon, false)}
								<h3 class="text-xl md:text-2xl font-bold text-brand-orange uppercase tracking-wide">
									{programme.title}
								</h3>
							</div>

							<p class="text-gray-300 italic mb-4 flex-1">
								{programme.description}
							</p>

							<span class="inline-flex items-center gap-2 px-5 py-2 bg-stone-700/60 group-hover:bg-stone-600/60 text-white font-medium rounded-lg transition-colors duration-200 border border-stone-600/50 w-fit">
								{programme.buttonLabel || 'Find out more'}
								{#if external}
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								{:else}
									<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								{/if}
							</span>
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</section>

	<!-- Holiday clubs, workshops & courses -->
	<section id="events" class="max-w-6xl mx-auto px-4 mb-12 scroll-mt-28">
		<div class="rounded-2xl bg-brand-orange/10 border border-brand-orange/40 p-6 md:p-10 flex flex-col lg:flex-row lg:items-center gap-6">
			<div class="flex-1">
				<h2 class="text-3xl font-bold text-white mb-3">Holiday clubs, workshops &amp; courses</h2>
				<p class="text-gray-300 text-lg">See what's coming up, check availability and book a place online.</p>
			</div>
			<a href={BOOKINGS_URL} target="_blank" rel="noopener noreferrer" class="inline-flex justify-center items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 flex-shrink-0">
				See dates &amp; book
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
			</a>
		</div>
	</section>

	<!-- Community contact -->
	<section id="contact" class="max-w-6xl mx-auto px-4 scroll-mt-28">
		<div class="rounded-2xl bg-stone-900/60 border border-stone-700/50 p-6 md:p-10 flex flex-col lg:flex-row lg:items-center gap-6">
			<div class="flex-1">
				<h2 class="text-3xl font-bold text-white mb-3">Get in touch</h2>
				<p class="text-gray-300 text-lg">Questions about a programme, a holiday club, or getting involved? We'd love to hear from you.</p>
			</div>
			<a href={contactHref('general')} class="inline-flex justify-center px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200 flex-shrink-0">Contact us</a>
		</div>
	</section>
</main>
