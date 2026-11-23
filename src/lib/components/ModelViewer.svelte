<script lang="ts">
	// Rotatable 3D model (Google's <model-viewer>, self-hosted). The viewer code (~300KB) only
	// loads when the model is about to scroll into view, so it doesn't slow the rest of the page.
	// Models live in static/models as compressed .glb files (keep them under ~3MB).
	import { onMount } from 'svelte';

	interface Props {
		src: string;
		alt: string;
		/** Still image shown until the 3D model has loaded */
		poster?: string;
	}

	let { src, alt, poster }: Props = $props();

	let container: HTMLDivElement;
	let ready = $state(false);
	let failed = $state(false);
	let reduceMotion = $state(false);

	onMount(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const observer = new IntersectionObserver(
			async (entries) => {
				if (!entries.some((e) => e.isIntersecting)) return;
				observer.disconnect();
				try {
					await import('@google/model-viewer');
					ready = true;
				} catch {
					failed = true;
				}
			},
			{ rootMargin: '400px' }
		);
		observer.observe(container);
		return () => observer.disconnect();
	});
</script>

<div bind:this={container} class="relative w-full aspect-square rounded-2xl overflow-hidden border border-stone-700/50 bg-[radial-gradient(circle_at_center,rgba(247,147,30,0.18),rgba(28,25,23,0.9)_65%)]">
	{#if ready}
		<model-viewer
			{src}
			{alt}
			{poster}
			camera-controls
			auto-rotate={reduceMotion ? undefined : ''}
			auto-rotate-delay="1500"
			rotation-per-second="24deg"
			interaction-prompt="auto"
			touch-action="pan-y"
			shadow-intensity="1"
			shadow-softness="0.8"
			exposure="1.1"
			ar
			ar-modes="webxr scene-viewer quick-look"
			class="w-full h-full"
			style="--poster-color: transparent; background: transparent;"
		></model-viewer>
	{:else if poster}
		<img src={poster} {alt} width="800" height="800" loading="lazy" class="w-full h-full object-contain" />
	{/if}
	{#if failed}
		<p class="absolute inset-x-0 bottom-4 text-center text-gray-400 text-sm">The 3D view couldn't load on this device.</p>
	{/if}
</div>
