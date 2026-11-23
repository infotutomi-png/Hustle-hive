<script lang="ts">
	// Shows a light placeholder and only loads a third-party embed (Google Maps, video players)
	// when the visitor asks for it. Keeps pages fast and stops third parties setting cookies
	// or downloading code before anyone has chosen to use them.
	interface Props {
		/** Embed address, loaded on click */
		src: string;
		title: string;
		/** Button text, e.g. "Show map" or "Play video" */
		label: string;
		/** Optional image shown behind the button */
		poster?: string;
		/** Small note under the button, e.g. "Loads Google Maps" */
		note?: string;
		icon?: 'play' | 'map';
		allow?: string;
	}

	let { src, title, label, poster, note, icon = 'play', allow }: Props = $props();

	let loaded = $state(false);
</script>

{#if loaded}
	<iframe {src} {title} {allow} class="absolute inset-0 w-full h-full border-0" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
{:else}
	<button
		type="button"
		onclick={() => (loaded = true)}
		class="group absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 text-white bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand-orange"
	>
		{#if poster}
			<img src={poster} alt="" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-200" />
			<span class="absolute inset-0 bg-black/30" aria-hidden="true"></span>
		{:else}
			<span class="absolute inset-0 opacity-20" style="background-image: url('/images/honeycomb-pattern.svg'); background-size: 60px 60px;" aria-hidden="true"></span>
		{/if}
		<span class="relative w-16 h-16 rounded-full bg-brand-orange text-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200" aria-hidden="true">
			{#if icon === 'map'}
				<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
			{:else}
				<svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
			{/if}
		</span>
		<span class="relative font-semibold text-lg">{label}<span class="sr-only">: {title}</span></span>
		{#if note}
			<span class="relative text-sm text-gray-300">{note}</span>
		{/if}
	</button>
{/if}
