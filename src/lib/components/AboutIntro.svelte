<script lang="ts">
	// "About Hustle Hive" section for the homepage, with the National Lottery funding story
	import home from '$lib/content/home.json';

	const about = home.about;
	const funding = about.funding;
</script>

<section class="py-16 md:py-20 bg-gradient-to-b from-black to-stone-950">
	<div class="max-w-5xl mx-auto px-4">
		<!-- Intro -->
		<div class="max-w-3xl mx-auto text-center mb-12">
			<div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-5">
				<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			</div>
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{about.heading}</h2>
			<p class="text-gray-300 text-lg leading-relaxed">
				{about.text}
			</p>
		</div>

		<!-- Funding story: photo beside text, stacked on mobile -->
		<div class="bg-stone-900/50 border border-stone-700/50 rounded-2xl p-5 md:p-8 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
			<img
				src={funding.image}
				alt={funding.imageAlt}
				width="615"
				height="410"
				loading="lazy"
				class="w-full max-w-[615px] mx-auto rounded-xl"
			/>
			<div>
				<h3 class="text-2xl md:text-3xl font-bold text-white mb-4">{funding.heading}</h3>
				<p class="text-gray-300 leading-relaxed mb-5">
					{funding.text}
				</p>
				<img
					src="/images/national-lottery-community-fund-digital-logo-black-background.webp"
					alt="The National Lottery Community Fund"
					class="h-14 mb-6"
				/>
				<a
					href={funding.buttonHref}
					class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 w-full sm:w-fit"
				>
					{funding.buttonLabel}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		</div>

		<!-- Learn more -->
		<div class="text-center mt-10">
			<a
				href={about.buttonHref}
				class="inline-flex items-center gap-2 px-6 py-3 bg-stone-700/60 hover:bg-stone-600/60 text-white font-medium rounded-lg transition-colors duration-200 border border-stone-600/50"
			>
				{about.buttonLabel}
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</div>
</section>
