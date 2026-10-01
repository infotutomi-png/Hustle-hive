<script lang="ts">
	// Sub-menu shown at the top of every Alternative Provision page
	import { page } from '$app/state';
	import { AP_APPROACH_URL, AP_SCHOOLS_URL, AP_URL } from '$lib/links';

	const items = [
		{ label: 'Our provision', href: AP_URL },
		{ label: 'Approach & curriculum', href: AP_APPROACH_URL },
		{ label: 'For schools & local authorities', href: AP_SCHOOLS_URL },
		{ label: 'Contact', href: `${AP_URL}#contact` }
	];
</script>

<nav aria-label="Alternative Provision" class="max-w-6xl mx-auto px-4 mb-10">
	<div class="text-sm text-gray-400 mb-3">
		<a href="/" class="hover:text-brand-orange">Home</a> / <a href={AP_URL} class="hover:text-brand-orange">Alternative Provision</a>
	</div>
	<!-- 2x2 grid on phones so every link is visible without sideways scrolling; one row (wrapping if needed) on wider screens -->
	<ul class="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
		{#each items as item}
			{@const current = page.url.pathname === item.href}
			<li>
				<a
					href={item.href}
					aria-current={current ? 'page' : undefined}
					class="flex items-center justify-center h-full min-h-11 px-3 sm:px-4 py-2 rounded-xl sm:rounded-full border text-sm font-medium text-center leading-snug transition-colors duration-200 {current
						? 'bg-brand-orange text-black border-brand-orange'
						: 'border-stone-700 text-gray-300 hover:border-brand-orange hover:text-brand-orange'}"
				>
					{item.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
