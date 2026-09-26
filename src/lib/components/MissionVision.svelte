<script lang="ts">
	import home from '$lib/content/home.json';
	import { sisterSites } from '$lib/links';

	const mission = home.mission;
</script>

<section class="py-16 md:py-20 bg-gradient-to-b from-black to-stone-950">
	<div class="max-w-6xl mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-8 md:gap-12">
			<!-- Mission -->
			<div class="bg-stone-900/30 border border-stone-700/50 rounded-2xl p-6 md:p-8">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center">
						<svg class="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<h2 class="text-2xl font-bold text-white">{mission.missionTitle}</h2>
				</div>
				<p class="text-gray-300 leading-relaxed">
					{mission.missionText}
				</p>
				<div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
					{#each sisterSites as site}
						<a
							href={site.href}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 px-4 py-2 bg-stone-700/60 hover:bg-stone-600/60 text-white text-sm font-medium rounded-lg transition-colors duration-200 border border-stone-600/50 w-fit"
						>
							{site.label}
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					{/each}
				</div>
			</div>

			<!-- Vision -->
			<div class="bg-stone-900/30 border border-stone-700/50 rounded-2xl p-6 md:p-8">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center">
						<svg class="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
						</svg>
					</div>
					<h2 class="text-2xl font-bold text-white">{mission.visionTitle}</h2>
				</div>
				<p class="text-gray-300 leading-relaxed">
					{mission.visionText}
				</p>
			</div>
		</div>

		<!-- Learn More Link -->
		<div class="text-center mt-8">
			<a href={mission.learnMoreHref} class="inline-flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors duration-200">
				{mission.learnMoreLabel}
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</div>
</section>
