<script lang="ts">
	// Shared layout for the Privacy Policy and Terms of Use pages
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		updated: string;
		children: Snippet;
	}

	let { title, updated, children }: Props = $props();
</script>

<main class="bg-black min-h-screen pt-32 pb-20">
	<section class="max-w-3xl mx-auto px-4">
		<h1 class="text-4xl md:text-5xl font-bold text-white italic mb-4">{title}</h1>
		<p class="text-gray-400 mb-10">Last updated: {updated}</p>
		<div class="border-t border-stone-700/50 mb-10"></div>

		<div
			class="text-gray-300 leading-relaxed space-y-4
				[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3
				[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
				[&_a]:text-brand-orange [&_a:hover]:underline
				[&_strong]:text-white"
		>
			{@render children()}
		</div>
	</section>
</main>
