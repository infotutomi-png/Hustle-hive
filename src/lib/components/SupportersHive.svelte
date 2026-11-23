<script lang="ts">
	// Honeycomb wall of supporters. Each cell shows a logo or name (or a honeycomb for anonymous
	// supporters); choosing one opens a panel underneath with what they supported. Empty
	// "Your business here" cells link to the Sponsors page.
	import { SPONSORS_URL } from '$lib/links';
	import { displayName, programmeInfo, type Supporter } from '$lib/supporters';

	let { supporters }: { supporters: Supporter[] } = $props();

	let width = $state(0);
	let selected = $state<number | null>(null);

	// Cell size and how many fit in a full row (rows alternate full / one fewer, giving the honeycomb offset)
	const GAP = 8;
	const cell = $derived(width && width < 520 ? Math.floor((width - 2 * GAP) / 3) : 140);
	const perRow = $derived(width ? Math.max(3, Math.min(6, Math.floor((width + GAP) / (cell + GAP)))) : 5);

	type Cell = { kind: 'supporter'; index: number } | { kind: 'empty' };

	const rows = $derived.by(() => {
		// Always leave a few empty cells, and fill out at least two rows
		const minCells = perRow + (perRow - 1);
		const total = Math.max(minCells, supporters.length + Math.max(2, perRow - 1));
		const cells: Cell[] = [
			...supporters.map((_, index) => ({ kind: 'supporter' as const, index })),
			...Array.from({ length: total - supporters.length }, () => ({ kind: 'empty' as const }))
		];
		const out: Cell[][] = [];
		let i = 0;
		let full = true;
		while (i < cells.length) {
			const n = full ? perRow : perRow - 1;
			out.push(cells.slice(i, i + n));
			i += n;
			full = !full;
		}
		return out;
	});

	const hexHeight = $derived(Math.round(cell * 1.1547));
	const overlap = $derived(Math.round(hexHeight * 0.25) - GAP);
	const current = $derived(selected === null ? null : supporters[selected]);
	const currentProgramme = $derived(current ? programmeInfo(current.programme) : undefined);

	const HEX = 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)';
</script>

<div bind:clientWidth={width} class="w-full">
	<ul class="flex flex-col items-center" aria-label="Our supporters">
		{#each rows as row, r}
			<li class="flex justify-center" style="gap: {GAP}px; margin-top: {r ? -overlap : 0}px;">
				<ul class="contents">
					{#each row as c}
						<li class="relative flex-shrink-0" style="width: {cell}px; height: {hexHeight}px;">
							{#if c.kind === 'supporter'}
								{@const s = supporters[c.index]}
								{@const isOpen = selected === c.index}
								<button
									type="button"
									onclick={() => (selected = isOpen ? null : c.index)}
									aria-expanded={isOpen}
									aria-controls="supporter-panel"
									class="group absolute inset-0 focus-visible:outline-none"
									style="clip-path: {HEX};"
								>
									<span class="absolute inset-0 transition-colors duration-200 {isOpen ? 'bg-brand-orange' : 'bg-brand-orange/50 group-hover:bg-brand-orange group-focus-visible:bg-white'}"></span>
									<span class="absolute inset-[3px] flex items-center justify-center p-[18%] {isOpen ? 'bg-stone-800' : 'bg-stone-900'}" style="clip-path: {HEX};">
										{#if s.anonymous}
											<span class="flex flex-col items-center gap-1 text-center">
												<img src="/images/hustlehive-logo-160.webp" alt="" width="146" height="160" class="w-8 h-auto opacity-80" />
												<span class="text-[11px] leading-tight text-gray-300">{displayName(s)}</span>
											</span>
										{:else if s.logo}
											<img src={s.logo} alt={s.name} loading="lazy" class="max-w-full max-h-full object-contain" />
										{:else}
											<span class="text-white font-bold text-sm leading-tight text-center break-words">{s.name}</span>
										{/if}
									</span>
									<span class="sr-only">: see what they supported</span>
								</button>
							{:else}
								<a href={SPONSORS_URL} class="group absolute inset-0 focus-visible:outline-none" style="clip-path: {HEX};">
									<span class="absolute inset-0 bg-stone-700/60 group-hover:bg-brand-orange/60 group-focus-visible:bg-white transition-colors duration-200"></span>
									<span class="absolute inset-[3px] flex flex-col items-center justify-center gap-1 bg-black text-center p-[18%]" style="clip-path: {HEX};">
										<span class="text-2xl leading-none text-brand-orange" aria-hidden="true">+</span>
										<span class="text-[11px] leading-tight text-gray-400 group-hover:text-white">Your business here</span>
									</span>
								</a>
							{/if}
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>

	<div id="supporter-panel" aria-live="polite">
		{#if current}
			<div class="mt-10 max-w-2xl mx-auto rounded-2xl bg-stone-900/70 border border-brand-orange/40 p-6 md:p-8 relative">
				<button type="button" onclick={() => (selected = null)} class="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-stone-800" aria-label="Close">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
				</button>
				<div class="flex items-center gap-4 mb-5 pr-10">
					{#if !current.anonymous && current.logo}
						<img src={current.logo} alt="" class="h-12 w-auto max-w-[140px] object-contain flex-shrink-0" />
					{/if}
					<div>
						<h3 class="text-2xl font-bold text-white">{displayName(current)}</h3>
						{#if current.when}<p class="text-gray-400 text-sm">{current.when}</p>{/if}
					</div>
				</div>
				{#if currentProgramme || current.supported}
					<p class="text-sm font-bold uppercase tracking-wider text-brand-orange mb-1">What they supported</p>
					<p class="text-gray-200 text-lg mb-5">
						{#if current.supported}{current.supported}{/if}
						{#if currentProgramme}
							{current.supported ? ' · ' : ''}
							{#if currentProgramme.href}<a href={currentProgramme.href} class="text-brand-orange font-semibold hover:underline">{currentProgramme.name}</a>{:else}{currentProgramme.name}{/if}
						{/if}
					</p>
				{/if}
				{#if current.quote}
					<blockquote class="border-l-4 border-brand-orange pl-4 text-gray-200 italic text-lg mb-5">"{current.quote}"</blockquote>
				{/if}
				{#if !current.anonymous && current.url}
					<a href={current.url} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline">
						Visit {current.name}
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
					</a>
				{/if}
			</div>
		{/if}
	</div>
</div>
