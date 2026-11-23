<script lang="ts">
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import content from '$lib/content/sponsors.json';
	import { iconPaths } from '$lib/icons';
	import SupportersHive from '$lib/components/SupportersHive.svelte';
	import { SUPPORTERS_URL, supporters } from '$lib/supporters';

	type Package = { name: string; price: string; funds: string; featured?: boolean; label?: string };
	type SupportOption = { title: string; text: string; icon?: string };
	type Programme = {
		id: string;
		name: string;
		summary: string;
		image?: string;
		imageAlt?: string;
		raised?: string;
		packages: Package[];
		/** Shown instead of priced packages, e.g. places, materials, prizes */
		supportOptions?: SupportOption[];
		packagesNote?: string;
		steps?: string[];
		benefits?: string[];
		programmeHref?: string;
	};

	// Written out in full so Tailwind generates each class
	const LG_COLS: Record<number, string> = { 1: 'lg:grid-cols-2', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4' };

	const programmes = content.programmes as Programme[];

	// Open a programme's tab from the web address, e.g. /sponsors?programme=creatureverse
	const fromUrl = page.url.searchParams.get('programme');
	let selectedId = $state(programmes.some((p) => p.id === fromUrl) ? fromUrl! : programmes[0]?.id);
	const selected = $derived(programmes.find((p) => p.id === selectedId) ?? programmes[0]);

	/** Contact form link with the sponsorship subject and a starter message filled in. */
	function enquiryHref(programme?: Programme, pkg?: Package, option?: SupportOption) {
		let message = "Hello, I'm interested in sponsoring";
		if (programme && pkg) message += ` ${programme.name}: ${pkg.name} (${pkg.price}).`;
		else if (programme && option) message += ` ${programme.name} (${option.title.toLowerCase()}).`;
		else if (programme) message += ` ${programme.name}.`;
		else message += ' a Hustle Hive programme.';
		message += ' Please send me your sponsor briefing.';
		return `/contact?subject=sponsorship&message=${encodeURIComponent(message)}#contact-form`;
	}

	// Arrow keys move between tabs (standard tab pattern)
	function onTabKeydown(event: KeyboardEvent, index: number) {
		const keys: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
		if (!(event.key in keys)) return;
		event.preventDefault();
		const next = programmes[(index + keys[event.key] + programmes.length) % programmes.length];
		selectedId = next.id;
		document.getElementById(`tab-${next.id}`)?.focus();
	}
</script>

<Seo
	title="Sponsor a Programme - Hustle Hive"
	description="Sponsor a Hustle Hive programme in Darlington: fund places, materials or a whole cohort, with an impact summary for your CSR reporting."
	image="/og/sponsors.jpg"
	imageAlt="Hustle Hive programmes: Creatureverse collectibles, an outdoor woodland walk and ECO//FUTURE scale model homes"
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="text-sm text-gray-400 mb-3"><a href="/" class="hover:text-brand-orange">Home</a> / Sponsor a Programme</div>
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{content.title}</h1>
		<p class="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">{content.intro}</p>
		<div class="flex flex-col sm:flex-row gap-3">
			<a href="#packages" class="inline-flex justify-center items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">
				See sponsor packages
			</a>
			<a href={enquiryHref()} class="inline-flex justify-center items-center px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200">
				Request our sponsor briefing
			</a>
		</div>

		<!-- Hive Heroes: obvious route to the supporters wall -->
		<a href={SUPPORTERS_URL} class="group mt-8 flex items-center gap-4 rounded-2xl bg-brand-orange/10 border border-brand-orange/40 hover:border-brand-orange p-5 md:p-6 transition-colors duration-200">
			<img src="/images/hustlehive-logo-160.webp" alt="" width="146" height="160" class="w-10 md:w-12 h-auto flex-shrink-0" />
			<span class="flex-1">
				<span class="block text-lg md:text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-200">{supporters.length ? 'Thank you to our Hive Heroes' : 'Be one of our first Hive Heroes'}</span>
				<span class="block text-gray-300">{supporters.length ? 'Meet the businesses and people who support our programmes.' : 'Every supporter gets a cell in our honeycomb, named or anonymous.'}</span>
			</span>
			<svg class="w-6 h-6 text-brand-orange flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
		</a>
	</section>

	<!-- Story + what sponsors get -->
	<section class="max-w-6xl mx-auto px-4 mb-16 grid md:grid-cols-2 gap-6">
		<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6 md:p-8">
			<h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{content.story.heading}</h2>
			<p class="text-gray-300 leading-relaxed">{content.story.text}</p>
		</div>
		<div class="rounded-2xl bg-brand-orange/10 border border-brand-orange/30 p-6 md:p-8">
			<h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{content.benefitsHeading}</h2>
			<ul class="space-y-3 mb-5">
				{#each content.benefits as benefit}
					<li class="flex gap-3 text-gray-200">
						<svg class="w-6 h-6 flex-shrink-0 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
						<span>{benefit}</span>
					</li>
				{/each}
			</ul>
			<p class="text-gray-400 text-sm">{content.cicNote}</p>
		</div>
	</section>

	<!-- Packages by programme -->
	<section id="packages" class="max-w-6xl mx-auto px-4 mb-16 scroll-mt-28">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-3">Choose a programme to sponsor</h2>
		<p class="text-lg text-gray-300 mb-6">Each programme has its own packages, so your support goes exactly where you want it.</p>

		<div role="tablist" aria-label="Programmes" class="flex flex-wrap gap-2 mb-8">
			{#each programmes as programme, i}
				<button
					id="tab-{programme.id}"
					role="tab"
					aria-selected={programme.id === selected.id}
					aria-controls="panel-{programme.id}"
					tabindex={programme.id === selected.id ? 0 : -1}
					onclick={() => (selectedId = programme.id)}
					onkeydown={(e) => onTabKeydown(e, i)}
					class="px-4 py-2 rounded-full border font-semibold transition-colors duration-200 {programme.id === selected.id
						? 'bg-brand-orange border-brand-orange text-black'
						: 'border-stone-600 text-white hover:border-brand-orange'}"
				>
					{programme.name}
				</button>
			{/each}
		</div>

		{#key selected.id}
			<div id="panel-{selected.id}" role="tabpanel" aria-labelledby="tab-{selected.id}" tabindex="0" class="outline-none">
				<div class="grid md:grid-cols-5 gap-6 items-center mb-8">
					{#if selected.image}
						<img width="1200" height="800" src={selected.image} alt={selected.imageAlt ?? ''} loading="lazy" class="md:col-span-2 w-full h-56 md:h-64 object-cover rounded-2xl" />
					{/if}
					<div class={selected.image ? 'md:col-span-3' : 'md:col-span-5'}>
						<h3 class="text-2xl md:text-3xl font-bold text-white mb-3">{selected.name}</h3>
						<p class="text-gray-300 leading-relaxed">{selected.summary}</p>
						{#if selected.programmeHref}
							<a href={selected.programmeHref} class="inline-flex items-center gap-2 mt-3 text-brand-orange font-semibold hover:underline">About this programme <span aria-hidden="true">&rarr;</span></a>
						{/if}
						{#if selected.raised}
							<p class="inline-block mt-4 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/30 text-green-300 font-semibold text-sm">{selected.raised}</p>
						{/if}
					</div>
				</div>

				{#if selected.steps?.length}
					<ol class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
						{#each selected.steps as step, i}
							<li class="rounded-xl bg-stone-900/50 border border-stone-700/50 p-4">
								<span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-black font-bold mb-2" aria-hidden="true">{i + 1}</span>
								<span class="text-white text-sm font-semibold">{step}</span>
							</li>
						{/each}
					</ol>
				{/if}

				{#if selected.packages.length}
					<div class="grid sm:grid-cols-2 {LG_COLS[Math.min(selected.packages.length, 4)]} gap-4">
						{#each selected.packages as pkg}
							<div class="relative flex flex-col rounded-2xl bg-stone-900/50 p-6 {pkg.featured ? 'border-2 border-brand-orange' : 'border border-stone-700/50'}">
								{#if pkg.featured}
									<span class="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-brand-orange text-black text-xs font-bold">{pkg.label || 'Biggest impact'}</span>
								{/if}
								<p class="text-white font-semibold mb-1">{pkg.name}</p>
								<p class="text-3xl font-bold text-brand-orange mb-3 font-display">{pkg.price}</p>
								<p class="text-gray-300 text-sm leading-relaxed mb-6">{pkg.funds}</p>
								<a
									href={enquiryHref(selected, pkg)}
									class="mt-auto inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-colors duration-200 {pkg.featured
										? 'bg-brand-orange hover:bg-brand-orange-dark text-black'
										: 'border border-stone-600 hover:border-brand-orange text-white'}"
								>
									Sponsor this<span class="sr-only">: {pkg.name}, {pkg.price}</span>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
								</a>
							</div>
						{/each}
					</div>
				{/if}

				{#if !selected.packages.length && selected.supportOptions?.length}
					<h4 class="text-xl font-bold text-white mb-4">Ways to support {selected.name}</h4>
					<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{#each selected.supportOptions as option}
							<div class="flex flex-col rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6">
								<span class="w-11 h-11 rounded-full bg-brand-orange/20 flex items-center justify-center mb-4" aria-hidden="true">
									<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										{#each iconPaths(option.icon) as d}<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" {d} />{/each}
									</svg>
								</span>
								<p class="text-white font-semibold text-lg mb-2">{option.title}</p>
								<p class="text-gray-300 text-sm leading-relaxed mb-5">{option.text}</p>
								<a href={enquiryHref(selected, undefined, option)} class="mt-auto inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline">
									Ask about this<span class="sr-only">: {option.title}</span>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
								</a>
							</div>
						{/each}
					</div>
				{/if}

				{#if selected.benefits?.length}
					<div class="mt-8 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 p-6">
						<h4 class="text-xl font-bold text-white mb-4">Sponsor benefits for {selected.name}</h4>
						<ul class="grid md:grid-cols-2 gap-3">
							{#each selected.benefits as benefit}
								<li class="flex gap-3 text-gray-200">
									<svg class="w-6 h-6 flex-shrink-0 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
									<span>{benefit}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if selected.packagesNote}
					<p class="text-gray-400 mt-6 {selected.packages.length ? 'text-sm' : ''}">{selected.packagesNote}</p>
				{/if}
				{#if !selected.packages.length}
					<a href={enquiryHref(selected)} class="inline-flex mt-5 items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">
						Ask about sponsoring {selected.name}
					</a>
				{/if}
			</div>
		{/key}

		<p class="text-gray-400 mt-8">
			Something else in mind, like donating kit or giving your team's time?
			<a href={enquiryHref()} class="text-brand-orange hover:underline">Talk to us</a>.
		</p>
	</section>

	<!-- Sponsors -->
	{#if supporters.length}
		<section class="max-w-5xl mx-auto px-4 mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-3 text-center">{content.sponsorsHeading}</h2>
			<p class="text-gray-300 text-lg mb-10 text-center">Choose a supporter to see what they made possible, or <a href={SUPPORTERS_URL} class="text-brand-orange font-semibold hover:underline">meet all our Hive Heroes</a>.</p>
			<SupportersHive {supporters} />
		</section>
	{/if}

	<!-- CTA -->
	<section class="max-w-6xl mx-auto px-4">
		<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-8 md:p-12 text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-3">{content.ctaHeading}</h2>
			<p class="text-lg text-gray-300 mb-6">{content.ctaText}</p>
			<a href={enquiryHref()} class="inline-flex justify-center items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-lg">
				Request our sponsor briefing
			</a>
			{#if content.thanks}
				<p class="text-gray-400 text-sm mt-8">{content.thanks}</p>
			{/if}
		</div>
	</section>
</main>
