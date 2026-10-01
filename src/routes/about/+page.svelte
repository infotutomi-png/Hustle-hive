<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import HustleHQ from '$lib/components/HustleHQ.svelte';
	import about from '$lib/content/about.json';
	import home from '$lib/content/home.json';
	import { AP_URL, SAFEGUARDING_URL } from '$lib/links';

	let imageLoaded = $state(false);

	const funding = home.about.funding;
	const sections = [
		{ label: 'Our story', href: '#story' },
		{ label: 'Team', href: '#team' },
		{ label: 'Hustle HQ', href: '#hustle-hq' },
		{ label: 'Safeguarding & policies', href: SAFEGUARDING_URL },
		{ label: 'Partners & funders', href: '#partners' }
	];
</script>

<Seo
	title="About Us - Hustle Hive"
	description="Learn about Hustle Hive CIC - a community-powered makerspace and enterprise hub in Darlington, founded by teachers, helping people of all ages build confidence, skills, and real-world opportunities."
/>

<svelte:head>
	<link rel="preload" as="image" href={about.heroImage} type="image/webp" />
</svelte:head>

<main class="bg-black">
	<!-- Hero Section -->
	<section class="relative min-h-[55vh] md:min-h-[95vh] overflow-hidden">
		<!-- Background Image -->
		<div class="absolute inset-0 z-0">
			<!-- Placeholder gradient shown while loading -->
			<div
				class="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-black transition-opacity duration-500"
				class:opacity-0={imageLoaded}
			></div>
			<!-- Focus point on the faces (upper third); on phones shift right so both faces fit -->
			<img
				src={about.heroImage}
				alt={about.heroImageAlt}
				class="w-full h-full object-cover object-[58%_22%] md:object-[center_25%] transition-opacity duration-500"
				class:opacity-0={!imageLoaded}
				onload={() => (imageLoaded = true)}
				fetchpriority="high"
			/>
			<!-- Subtle overlay, darker at the bottom where the title sits -->
			<div class="absolute inset-0 z-10 bg-black/20"></div>
			<!-- Darken the bright sky behind the menu so the links stay readable -->
			<div class="absolute inset-x-0 top-0 h-40 z-10 bg-gradient-to-b from-black/75 to-transparent"></div>
			<div class="absolute inset-x-0 bottom-0 h-2/3 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
		</div>

		<!-- Content (kept low so it doesn't cover the faces) -->
		<div class="absolute inset-0 z-20 flex items-end justify-start md:justify-center px-6 pb-8 md:pb-16 md:px-4">
			<div class="text-left md:text-center max-w-4xl">
				<h1 class="text-4xl md:text-6xl font-bold text-white mb-2 md:mb-6">
					{about.heroTitle}
				</h1>
				<p class="text-lg md:text-2xl text-gray-200 leading-relaxed">
					{about.heroSubtitle}
				</p>
			</div>
		</div>
	</section>

	<!-- On this page -->
	<nav aria-label="About sections" class="max-w-4xl mx-auto px-4 pt-10">
		<ul class="flex gap-2 overflow-x-auto pb-1 justify-start md:justify-center">
			{#each sections as s}
				<li class="shrink-0">
					<a href={s.href} class="block px-4 py-2 rounded-full border border-stone-700 text-sm font-medium text-gray-300 hover:border-brand-orange hover:text-brand-orange transition-colors duration-200">{s.label}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Mission Statement Section -->
	<section id="story" class="py-20 bg-gradient-to-b from-black via-stone-950 to-black scroll-mt-24">
		<div class="max-w-4xl mx-auto px-4">
			<!-- Mission Statement -->
			<div class="text-center mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{about.missionTitle}</h2>
				<p class="text-gray-300 text-lg md:text-xl leading-relaxed">
					{about.missionText}
				</p>
			</div>

			<!-- Vision -->
			<div class="text-center mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{about.visionTitle}</h2>
				<p class="text-gray-300 text-lg md:text-xl leading-relaxed">
					{about.visionText}
				</p>
			</div>

			<!-- Values -->
			<div class="mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-10">{about.valuesTitle}</h2>
				<div class="grid md:grid-cols-3 gap-6">
					{#each about.values as value}
						<div class="bg-stone-900/50 border border-stone-700/50 rounded-2xl p-6">
							<div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center mb-4">
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									{#if value.icon === 'people'}
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
									{:else if value.icon === 'heart'}
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
									{:else if value.icon === 'flag'}
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
									{/if}
								</svg>
							</div>
							<h3 class="text-xl font-bold text-brand-orange mb-3">{value.title}</h3>
							<p class="text-gray-400">
								{value.text}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Meet the Team -->
			<div id="team" class="mb-16 scroll-mt-28">
				<h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-10">{about.foundersTitle}</h2>
				<div class="grid md:grid-cols-2 gap-6">
					{#each about.founders as founder}
						<article class="bg-stone-900/50 border border-stone-700/50 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center">
							<img
								src={founder.photo}
								alt={founder.name}
								width="160"
								height="160"
								loading="lazy"
								class="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-brand-orange/60 mb-5"
							/>
							<h3 class="text-2xl font-bold text-white">{founder.name}</h3>
							<p class="text-brand-orange font-semibold mb-3">{founder.role}</p>
							<p class="text-gray-300 text-sm font-medium mb-4">{founder.tagline}</p>
							<p class="text-gray-400 leading-relaxed text-left md:text-center">{founder.bio}</p>
						</article>
					{/each}
				</div>
			</div>

			<!-- Inside Hustle HQ (kit) -->
			<HustleHQ />

			<!-- Safeguarding & policies -->
			<div class="mb-16 rounded-2xl bg-stone-900/50 border border-brand-orange/40 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
				<div class="flex-1">
					<h2 class="text-2xl md:text-3xl font-bold text-white mb-2">{about.safeguarding.heading}</h2>
					<p class="text-gray-300">Designated Safeguarding Lead: <strong class="text-white">{about.safeguarding.dsl}</strong>. Read how we keep everyone safe and find all of our policies, including privacy and complaints.</p>
				</div>
				<a href={SAFEGUARDING_URL} class="inline-flex justify-center px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200 flex-shrink-0">Safeguarding &amp; policies</a>
			</div>

			<!-- Partners & funders -->
			<div id="partners" class="mb-16 scroll-mt-28">
				<h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-10">Partners &amp; funders</h2>
				<div class="bg-stone-900/50 border border-stone-700/50 rounded-2xl p-5 md:p-8 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
					<img src={funding.image} alt={funding.imageAlt} width="615" height="410" loading="lazy" class="w-full max-w-[615px] mx-auto rounded-xl" />
					<div>
						<h3 class="text-2xl font-bold text-white mb-4">{funding.heading}</h3>
						<p class="text-gray-300 leading-relaxed mb-5">{funding.text}</p>
						<img src="/images/national-lottery-community-fund-digital-logo-black-background.webp" alt="The National Lottery Community Fund" class="h-14" />
					</div>
				</div>
			</div>

			<!-- CTA -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href={about.ctaHref}
					class="inline-flex justify-center items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-lg"
				>
					{about.ctaLabel}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
				<a
					href={AP_URL}
					class="inline-flex justify-center items-center gap-2 px-8 py-4 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
				>
					Explore Alternative Provision
				</a>
			</div>
		</div>
	</section>
</main>
