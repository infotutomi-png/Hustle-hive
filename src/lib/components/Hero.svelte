<script lang="ts">
	import { onMount } from 'svelte';
	import home from '$lib/content/home.json';

	const hero = home.hero;
	const videoId = '0198fa18f3bdbfb4c31d8bcbf0c11f23';
	const customerSubdomain = 'customer-sf4ifbppskki29nb';

	// Phones and people who prefer reduced motion get the still image only;
	// the video iframe isn't created at all, so it's never downloaded.
	let showVideo = $state(false);

	onMount(() => {
		const query = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
		showVideo = query.matches;
		const onChange = (e: MediaQueryListEvent) => (showVideo = e.matches);
		query.addEventListener('change', onChange);
		return () => query.removeEventListener('change', onChange);
	});
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
	<!-- Background: still frame always, video layered on top on larger screens -->
	<div class="absolute inset-0 z-0 overflow-hidden">
		<img
			src="/images/hero-still.webp"
			alt=""
			fetchpriority="high"
			class="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center"
		/>
		{#if showVideo}
			<iframe
				src="https://{customerSubdomain}.cloudflarestream.com/{videoId}/iframe?muted=true&loop=true&autoplay=true&controls=false&poster=https%3A%2F%2F{customerSubdomain}.cloudflarestream.com%2F{videoId}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D2s%26height%3D1080"
				title="Hustle Hive background video"
				class="video-background"
				allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
			></iframe>
		{/if}
		<div class="absolute inset-0 bg-black/50 z-10"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 md:pt-0">
		<div class="mb-8">
			<img
				src={hero.logo}
				alt="Hustle Hive"
				class="h-32 md:h-40 mx-auto"
			/>
		</div>

		<h1 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
			{hero.headingLine1}<br />
			{hero.headingLine2}
		</h1>

		<p class="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
			{hero.subheading}
		</p>

		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href={hero.primaryButtonHref}
				class="px-8 py-3 bg-brand-orange text-black font-semibold rounded-md hover:bg-brand-orange-dark transition-colors duration-200"
			>
				{hero.primaryButtonLabel}
			</a>
			<a
				href={hero.secondaryButtonHref}
				class="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors duration-200"
			>
				{hero.secondaryButtonLabel}
			</a>
		</div>
	</div>
</section>

<style>
	.video-background {
		position: absolute;
		border: none;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: max(100vw, 133.33vh);
		height: max(100vh, 75vw);
	}
</style>
