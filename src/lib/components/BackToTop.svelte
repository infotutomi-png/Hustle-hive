<script lang="ts">
	// Floating "back to top" button. Only appears once the visitor has scrolled well down a page,
	// so it never shows on short pages.
	import { fade } from 'svelte/transition';

	let scrollY = $state(0);
	let innerHeight = $state(800);

	const visible = $derived(scrollY > innerHeight * 1.5);

	function toTop() {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
	}
</script>

<svelte:window bind:scrollY bind:innerHeight />

{#if visible}
	<button
		transition:fade={{ duration: 200 }}
		onclick={toTop}
		aria-label="Back to top"
		class="fixed bottom-5 right-5 z-30 w-12 h-12 rounded-full bg-stone-900/90 border border-stone-600 text-brand-orange backdrop-blur-sm shadow-lg hover:border-brand-orange hover:bg-stone-800 transition-colors duration-200 flex items-center justify-center"
	>
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
		</svg>
	</button>
{/if}
