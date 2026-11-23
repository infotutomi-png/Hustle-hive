<script lang="ts">
	// Shared layout for programme pages that are run by cohort (dates confirmed once a group forms).
	// Sponsor packages come from src/lib/content/sponsors.json (the Sponsors page in the CMS),
	// so prices only need changing in one place.
	import Seo from '$lib/components/Seo.svelte';
	import SubjectTags from '$lib/components/SubjectTags.svelte';
	import sponsors from '$lib/content/sponsors.json';
	import { SPONSORS_URL } from '$lib/links';
	import { iconPaths } from '$lib/icons';
	import ModelViewer from '$lib/components/ModelViewer.svelte';

	type Item = { title: string; text?: string };

	interface Props {
		title: string;
		seoTitle: string;
		seoDescription: string;
		ogImage: string;
		ogImageAlt: string;
		tagline: string;
		badge?: string;
		intro: string[];
		image: string;
		imageAlt: string;
		imageWidth: number;
		imageHeight: number;
		/** Contact form subject (see CONTACT_SUBJECTS) and a starter message for the register-interest button */
		contactSubject: string;
		contactMessage: string;
		stepsHeading: string;
		steps: Item[];
		learnHeading: string;
		learn: Item[];
		details: Item[];
		extraHeading?: string;
		extra?: string[];
		/** Optional feature cards (icon names from $lib/icons), e.g. the Creatureverse digital system */
		/** Optional rotatable 3D model (a .glb in static/models) with a heading and short text */
		model?: { src: string; alt: string; poster?: string; heading: string; text: string[] };
		featuresHeading?: string;
		featuresIntro?: string;
		featuresHighlight?: string;
		features?: { title: string; text: string; icon: string }[];
		/** id of this programme on the Sponsors page */
		sponsorId: string;
	}

	let p: Props = $props();

	type SupportOption = { title: string; text: string; icon?: string };
	const sponsorProgramme = sponsors.programmes.find((s) => s.id === p.sponsorId) as
		| { name: string; packages: { name: string; price: string }[]; supportOptions?: SupportOption[] }
		| undefined;
	const sponsorEnquiryUrl = `/contact?subject=sponsorship&message=${encodeURIComponent(`Hello, I'm interested in sponsoring ${p.title}. Please send me more information.`)}#contact-form`;
	const contactUrl = `/contact?subject=${encodeURIComponent(p.contactSubject)}&message=${encodeURIComponent(p.contactMessage)}#contact-form`;
	const sponsorUrl = `${SPONSORS_URL}?programme=${encodeURIComponent(p.sponsorId)}#packages`;

	const ctaClass =
		'inline-flex items-center gap-2 px-6 sm:px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-base sm:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';
</script>

<Seo title={p.seoTitle} description={p.seoDescription} image={p.ogImage} imageAlt={p.ogImageAlt} />

{#snippet tick()}
	<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
		<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
		</svg>
	</div>
{/snippet}

{#snippet interestButton()}
	<a href={contactUrl} class={ctaClass}>
		Register interest
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
		</svg>
	</a>
{/snippet}

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="text-sm text-gray-400 mb-3">
			<a href="/" class="hover:text-brand-orange">Home</a> / <a href="/community" class="hover:text-brand-orange">Community &amp; Youth</a> / {p.title}
		</div>
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{p.title}</h1>
		<p class="text-lg md:text-xl text-gray-200 font-semibold mb-5">{p.tagline}</p>
		{#if p.badge}
			<p class="mb-6">
				<span class="inline-block px-4 py-1.5 bg-brand-orange text-black text-sm md:text-base font-bold rounded-full">{p.badge}</span>
			</p>
		{/if}
		<SubjectTags class="mb-6" />
		<div class="space-y-4 text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
			{#each p.intro as para}
				<p>{para}</p>
			{/each}
		</div>
		{@render interestButton()}
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Image -->
	<section class="max-w-4xl mx-auto px-4 mb-12">
		<img
			src={p.image}
			alt={p.imageAlt}
			width={p.imageWidth}
			height={p.imageHeight}
			class="w-full h-auto aspect-[16/9] object-cover rounded-2xl border border-stone-700/50"
		/>
	</section>

	<div class="max-w-6xl mx-auto px-4 space-y-16">
		<div class="grid md:grid-cols-2 gap-12">
			<section aria-labelledby="steps">
				<h2 id="steps" class="text-2xl md:text-3xl font-bold text-white mb-6">{p.stepsHeading}</h2>
				<ol class="space-y-4">
					{#each p.steps as step, i}
						<li class="flex items-start gap-3">
							<span class="w-7 h-7 rounded-full bg-brand-orange text-black text-sm font-bold flex items-center justify-center flex-shrink-0" aria-hidden="true">{i + 1}</span>
							<p class="text-gray-300 pt-0.5">
								<strong class="text-white font-semibold">{step.title}</strong>{#if step.text}: {step.text}{/if}
							</p>
						</li>
					{/each}
				</ol>
			</section>

			<section aria-labelledby="learn">
				<h2 id="learn" class="text-2xl md:text-3xl font-bold text-white mb-6">{p.learnHeading}</h2>
				<ul class="space-y-4">
					{#each p.learn as item}
						<li class="flex items-start gap-3">
							{@render tick()}
							<p class="text-gray-300">
								<strong class="text-white font-semibold">{item.title}</strong>{#if item.text}: {item.text}{/if}
							</p>
						</li>
					{/each}
				</ul>
			</section>
		</div>

		{#if p.model}
			<section aria-labelledby="model" class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
				<div class="md:order-2">
					<ModelViewer src={p.model.src} alt={p.model.alt} poster={p.model.poster} />
				</div>
				<div>
					<h2 id="model" class="text-2xl md:text-3xl font-bold text-white mb-4">{p.model.heading}</h2>
					<div class="space-y-4 text-gray-300 text-lg leading-relaxed">
						{#each p.model.text as para}
							<p>{para}</p>
						{/each}
					</div>
					<p class="mt-5 inline-flex items-center gap-2 text-sm text-gray-400">
						<svg class="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
						Drag to spin, pinch or scroll to zoom
					</p>
				</div>
			</section>
		{/if}

		{#if p.featuresHeading && p.features?.length}
			<section aria-labelledby="features">
				<h2 id="features" class="text-2xl md:text-3xl font-bold text-white mb-4">{p.featuresHeading}</h2>
				{#if p.featuresIntro}
					<p class="text-gray-300 text-lg leading-relaxed max-w-3xl mb-5">{p.featuresIntro}</p>
				{/if}
				{#if p.featuresHighlight}
					<p class="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-2xl sm:rounded-full bg-brand-orange/10 border border-brand-orange/40 text-white font-semibold">
						<svg class="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							{#each iconPaths('star') as d}<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" {d} />{/each}
						</svg>
						{p.featuresHighlight}
					</p>
				{/if}
				<ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{#each p.features as f}
						<li class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6">
							<span class="w-11 h-11 rounded-full bg-brand-orange/20 flex items-center justify-center mb-4" aria-hidden="true">
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									{#each iconPaths(f.icon) as d}<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" {d} />{/each}
								</svg>
							</span>
							<h3 class="text-lg font-bold text-white mb-2">{f.title}</h3>
							<p class="text-gray-300 text-sm leading-relaxed">{f.text}</p>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		{#if p.extraHeading && p.extra?.length}
			<section aria-labelledby="extra" class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6 md:p-8">
				<h2 id="extra" class="text-2xl md:text-3xl font-bold text-white mb-4">{p.extraHeading}</h2>
				<div class="space-y-4 text-gray-300 text-lg leading-relaxed max-w-3xl">
					{#each p.extra as para}
						<p>{para}</p>
					{/each}
				</div>
			</section>
		{/if}

		<!-- The details -->
		<section aria-labelledby="details">
			<h2 id="details" class="text-2xl md:text-3xl font-bold text-white mb-6">The details</h2>
			<ul class="grid md:grid-cols-2 gap-4">
				{#each p.details as item}
					<li class="flex items-start gap-3 rounded-2xl bg-stone-900/50 border border-stone-700/50 p-5">
						{@render tick()}
						<p class="text-gray-300"><strong class="text-white font-semibold">{item.title}:</strong> {item.text}</p>
					</li>
				{/each}
			</ul>
		</section>

		<!-- Register interest -->
		<section aria-labelledby="interest" class="rounded-2xl bg-stone-900/50 border border-brand-orange/40 p-6 md:p-8">
			<h2 id="interest" class="text-2xl md:text-3xl font-bold text-white mb-4">Interested?</h2>
			<p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
				Dates are confirmed once a group has formed. Register your interest and we'll let you know as soon as dates are set, along with how to book.
			</p>
			{@render interestButton()}
		</section>

		<!-- Sponsors -->
		{#if sponsorProgramme}
			<section aria-labelledby="sponsor" class="rounded-2xl bg-brand-orange/10 border border-brand-orange/30 p-6 md:p-8">
				<h2 id="sponsor" class="text-2xl md:text-3xl font-bold text-white mb-4">Businesses: sponsor {p.title}</h2>
				<p class="text-gray-300 text-lg leading-relaxed mb-5 max-w-3xl">
					Local businesses help us run this programme for young people who'd otherwise miss out.
				</p>
				{#if sponsorProgramme.packages.length}
					<ul class="flex flex-wrap gap-3 mb-6">
						{#each sponsorProgramme.packages as pkg}
							<li class="px-4 py-2 rounded-full border border-brand-orange/40 text-white">
								<span class="font-semibold">{pkg.name}</span> <span class="text-brand-orange font-bold">{pkg.price}</span>
							</li>
						{/each}
					</ul>
					<a href={sponsorUrl} class="inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline">
						See sponsor packages <span aria-hidden="true">&rarr;</span>
					</a>
				{:else}
					{#if sponsorProgramme.supportOptions?.length}
						<p class="text-white font-semibold mb-4">You could help with:</p>
						<ul class="grid sm:grid-cols-2 gap-3 mb-7">
							{#each sponsorProgramme.supportOptions as option}
								<li class="flex items-start gap-3 rounded-xl bg-black/30 border border-stone-700/50 p-4">
									<svg class="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										{#each iconPaths(option.icon) as d}<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" {d} />{/each}
									</svg>
									<p class="text-gray-300"><strong class="text-white font-semibold">{option.title}</strong>: {option.text}</p>
								</li>
							{/each}
						</ul>
					{/if}
					<div class="flex flex-col sm:flex-row sm:items-center gap-4">
						<a href={sponsorEnquiryUrl} class="inline-flex justify-center items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">
							Talk to us about sponsoring
						</a>
						<a href={sponsorUrl} class="inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline">
							How sponsorship works <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				{/if}
			</section>
		{/if}
	</div>
</main>
