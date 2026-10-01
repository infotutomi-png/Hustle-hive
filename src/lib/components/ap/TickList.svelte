<script lang="ts">
	// Bulleted list with orange hexagon ticks, used across the Alternative Provision pages
	interface Props {
		items: string[];
		columns?: boolean;
	}
	let { items, columns = false }: Props = $props();
</script>

<ul class="grid gap-3 {columns ? 'sm:grid-cols-2' : ''}">
	{#each items as item}
		<li class="flex items-start gap-3 text-gray-300">
			<svg class="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z" fill="none" stroke="#F7931E" stroke-width="2" />
				<path d="M8 12.2l2.7 2.6L16 9.6" fill="none" stroke="#F7931E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
			<span>{item}</span>
		</li>
	{/each}
</ul>
