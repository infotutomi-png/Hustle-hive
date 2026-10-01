<script lang="ts">
	// Interactive Hustle 100 explorer: pick one of the ten areas to see its challenges.
	// Keyboard: arrow keys move between areas.
	interface Area {
		name: string;
		colour: string;
		points: string[];
	}
	let { areas }: { areas: Area[] } = $props();

	let selected = $state(0);
	let tabs: HTMLButtonElement[] = [];

	function onKey(e: KeyboardEvent, i: number) {
		let next: number | null = null;
		if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % areas.length;
		if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i + areas.length - 1) % areas.length;
		if (next !== null) {
			e.preventDefault();
			selected = next;
			tabs[next]?.focus();
		}
	}

	const current = $derived(areas[selected]);
	const from = $derived(selected * 10 + 1);
</script>

<div class="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-6">
	<div class="grid grid-cols-2 md:grid-cols-1 gap-2" role="tablist" aria-label="Hustle 100 areas">
		{#each areas as area, i}
			<button
				bind:this={tabs[i]}
				type="button"
				role="tab"
				id="h100-tab-{i}"
				aria-selected={selected === i}
				aria-controls="h100-panel"
				tabindex={selected === i ? 0 : -1}
				onclick={() => (selected = i)}
				onkeydown={(e) => onKey(e, i)}
				class="flex items-center gap-2 md:gap-3 text-left text-sm md:text-base px-2.5 md:px-3 py-2 md:py-2.5 rounded-xl border transition-colors duration-200 {selected === i
					? 'bg-stone-800 border-stone-500 text-white'
					: 'bg-stone-900/50 border-stone-700/50 text-gray-300 hover:border-stone-500'}"
			>
				<span class="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm font-bold text-black flex-shrink-0" style="background:{area.colour}">{i + 1}</span>
				<span class="font-medium">{area.name}</span>
			</button>
		{/each}
	</div>

	<div
		id="h100-panel"
		role="tabpanel"
		aria-labelledby="h100-tab-{selected}"
		aria-live="polite"
		class="rounded-2xl bg-stone-900/50 border-2 p-6 md:p-8 self-start"
		style="border-color:{current.colour}"
	>
		<div class="text-sm font-semibold mb-2" style="color:{current.colour}">Area {selected + 1} · Challenges {from}–{from + 9}</div>
		<h3 class="text-2xl font-bold text-white mb-4">{current.name}</h3>
		<ul class="space-y-2">
			{#each current.points as point}
				<li class="flex items-start gap-3 text-gray-300">
					<span class="w-2 h-2 rounded-full mt-2 flex-shrink-0" style="background:{current.colour}"></span>
					<span>{point}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
