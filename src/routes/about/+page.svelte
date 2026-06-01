<script lang="ts">
	import about from '$lib/content/about.json';

	let imageLoaded = $state(false);
</script>

<svelte:head>
	<title>About Us - Hustle Hive</title>
	<meta name="description" content="Learn about Hustle Hive - a community-powered makerspace and enterprise hub helping people of all ages build confidence, skills, and real-world opportunities." />
	<link rel="preload" as="image" href={about.heroImage} type="image/jpeg" />
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
			<img
				src={about.heroImage}
				alt="Hustle Hive community"
				class="w-full h-full object-cover object-[80%_15%] md:object-[center_60%] transition-opacity duration-500"
				class:opacity-0={!imageLoaded}
				onload={() => (imageLoaded = true)}
				fetchpriority="high"
			/>
			<!-- Dark Overlay -->
			<div class="absolute inset-0 bg-black/50 z-10"></div>
		</div>

		
		<!-- Content -->
		<div class="absolute inset-0 z-20 flex items-end md:items-center justify-start md:justify-center px-6 pb-8 md:pb-0 md:px-4">
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

	<!-- Mission Statement Section -->
	<section class="py-20 bg-gradient-to-b from-black via-stone-950 to-black">
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

			<!-- CTA -->
			<div class="text-center">
				<a
					href={about.ctaHref}
					class="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-lg"
				>
					{about.ctaLabel}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		</div>
	</section>
</main>
