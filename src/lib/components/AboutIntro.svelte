<script lang="ts">
	// Short "About Hustle Hive" section for the homepage
	import home from '$lib/content/home.json';

	const about = home.about;
</script>

<section class="py-16 md:py-20 bg-gradient-to-b from-black to-stone-950">
	<div class="max-w-3xl mx-auto px-4 text-center">
		<div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-5">
			<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
			</svg>
		</div>
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{about.heading}</h2>
		<p class="text-gray-300 text-lg leading-relaxed mb-5">
			{about.text}
		</p>
		<p class="text-brand-orange font-medium mb-8">
			{about.strapline}
		</p>
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
</section>
