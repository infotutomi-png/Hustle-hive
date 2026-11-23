<script lang="ts">
	// Icon + label tags for the curriculum subjects a programme covers.
	// Pass `subjects` directly, or leave it out on a programme page to use the subjects set
	// for that page's programme in programmes.json.
	import { page } from '$app/state';
	import content from '$lib/content/programmes.json';
	import { SUBJECTS, knownSubjects } from '$lib/subjects';

	interface Props {
		subjects?: readonly string[];
		/** 'sm' for programme cards, 'md' for programme pages (adds a "Subjects covered" label) */
		size?: 'sm' | 'md';
		class?: string;
	}

	let { subjects, size = 'md', class: className = '' }: Props = $props();

	const ids = $derived(
		knownSubjects(
			subjects ??
				(content.programmes.find((p) => p.href === page.url.pathname.replace(/\/+$/, '')) as { subjects?: string[] } | undefined)?.subjects
		)
	);
</script>

{#if ids.length}
	<div class={className}>
		{#if size === 'md'}
			<p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Subjects covered</p>
		{/if}
		<ul class="flex flex-wrap {size === 'sm' ? 'gap-1.5' : 'gap-2'}" aria-label={size === 'sm' ? 'Subjects covered' : undefined}>
			{#each ids as id}
				<li
					class="inline-flex items-center rounded-full border border-brand-orange/40 bg-brand-orange/10 text-gray-100 font-medium {size === 'sm'
						? 'gap-1.5 px-2.5 py-1 text-xs'
						: 'gap-2 px-3.5 py-1.5 text-sm'}"
				>
					<svg class="{size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						{#each SUBJECTS[id].paths as d}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" {d} />
						{/each}
					</svg>
					{SUBJECTS[id].label}
				</li>
			{/each}
		</ul>
	</div>
{/if}
