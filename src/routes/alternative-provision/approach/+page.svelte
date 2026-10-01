<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import APNav from '$lib/components/ap/APNav.svelte';
	import Hustle100Explorer from '$lib/components/ap/Hustle100Explorer.svelte';
	import content from '$lib/content/alternative-provision.json';

	const a = content.approach;
</script>

<Seo
	title="Our Approach, Curriculum & the Hustle 100 - Hustle Hive Alternative Provision"
	description="Regulate, relate, reason: how Hustle Hive supports young people in alternative provision, what a day looks like, and the Hustle 100 curriculum behind it."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<APNav />

	<section class="max-w-6xl mx-auto px-4 mb-14">
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{a.heading}</h1>
		<p class="text-lg md:text-xl text-gray-300 max-w-3xl">{a.intro}</p>
	</section>

	<!-- Mental health & resilience -->
	<section id="approach" class="bg-stone-950 border-y border-stone-800 py-16 mb-20 scroll-mt-28">
		<div class="max-w-6xl mx-auto px-4">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{a.resilience.heading}</h2>
			<p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">{a.resilience.intro}</p>
			<ol class="grid md:grid-cols-3 gap-4 mb-10">
				{#each a.resilience.steps as step}
					<li class="rounded-2xl bg-stone-900/70 border border-stone-700/50 p-6">
						<div class="text-sm font-semibold uppercase tracking-wide text-gray-400">{step.label}</div>
						<div class="text-3xl font-bold text-brand-orange my-2">{step.word}</div>
						<p class="text-gray-300">{step.text}</p>
					</li>
				{/each}
			</ol>
			<div class="grid md:grid-cols-2 gap-10 items-center">
				<div>
					<p class="text-gray-300 mb-4">{a.resilience.frameworksIntro}</p>
					{#each a.resilience.frameworks as fw}
						<p class="text-gray-300 mb-4"><strong class="text-white">{fw.name}</strong> {fw.text}</p>
					{/each}
				</div>
				<img src={a.resilience.image} alt={a.resilience.imageAlt} loading="lazy" class="w-full aspect-[4/3] object-cover rounded-2xl border border-stone-700/50" />
			</div>
		</div>
	</section>

	<!-- Activities -->
	<section id="activities" class="max-w-6xl mx-auto px-4 mb-20 scroll-mt-28">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{a.activities.heading}</h2>
		<p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">{a.activities.intro}</p>
		<div class="grid lg:grid-cols-2 gap-8">
			{#each a.activities.groups as group}
				<div>
					<h3 class="text-xl font-bold text-white mb-4">{group.title}</h3>
					<div class="space-y-3">
						{#each group.items as item}
							<article class="rounded-xl bg-stone-900/50 border border-stone-700/50 p-5">
								<h4 class="text-lg font-semibold text-brand-orange mb-1">{item.title}</h4>
								<p class="text-gray-300 mb-3">{item.text}</p>
								<span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-800 text-gray-300 border border-stone-700">{item.tag}</span>
							</article>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- A day in the life -->
	<section id="day" class="bg-stone-950 border-y border-stone-800 py-16 mb-20 scroll-mt-28">
		<div class="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_1.4fr] gap-10">
			<div>
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{a.day.heading}</h2>
				<p class="text-gray-300 text-lg leading-relaxed mb-4">{a.day.intro}</p>
				<p class="text-gray-400">{a.day.note}</p>
			</div>
			<ol class="relative border-l border-stone-700 ml-2 space-y-6">
				{#each a.day.timeline as slot}
					<li class="pl-6 relative">
						<span class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-brand-orange" aria-hidden="true"></span>
						<div class="text-sm font-semibold text-brand-orange">{slot.time}</div>
						<div class="text-white font-semibold">{slot.title}</div>
						<p class="text-gray-300">{slot.text}</p>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- Curriculum -->
	<section id="curriculum" class="max-w-6xl mx-auto px-4 mb-20 scroll-mt-28 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
		<div>
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{a.curriculum.heading}</h2>
			{#each a.curriculum.paragraphs as p}<p class="text-gray-300 text-lg leading-relaxed mb-4">{p}</p>{/each}
			<p class="text-gray-400 mb-8">{a.curriculum.note}</p>
			<h3 class="text-xl font-bold text-white mb-4">{a.curriculum.areasHeading}</h3>
			<ul class="flex flex-wrap gap-2" aria-label={a.curriculum.areasHeading}>
				{#each a.curriculum.areas as area}
					<li class="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-gray-200 text-sm">{area}</li>
				{/each}
			</ul>
		</div>
		<img src={a.curriculum.image} alt={a.curriculum.imageAlt} loading="lazy" class="w-full max-w-md mx-auto rounded-2xl" />
	</section>

	<!-- Hustle 100 -->
	<section id="hustle-100" class="bg-stone-950 border-y border-stone-800 py-16 mb-20 scroll-mt-28">
		<div class="max-w-6xl mx-auto px-4">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-2">{a.hustle100.heading}</h2>
			<p class="text-brand-orange font-semibold text-lg mb-5">{a.hustle100.tagline}</p>
			{#each a.hustle100.paragraphs as p}<p class="text-gray-300 text-lg leading-relaxed mb-4 max-w-4xl">{p}</p>{/each}

			<div class="mt-10 mb-12">
				<Hustle100Explorer areas={a.hustle100.areas} />
			</div>

			<h3 class="text-xl font-bold text-white mb-4">{a.hustle100.pathwaysHeading}</h3>
			<!-- Focusable on purpose: keyboard users need to be able to scroll this strip sideways (WCAG 2.1.1) -->
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<div class="flex gap-4 overflow-x-auto snap-x pb-3" role="region" tabindex="0" aria-label="Example learner pathways (scroll sideways on small screens)">
				{#each a.hustle100.pathways as pathway}
					<article class="snap-start shrink-0 w-72 rounded-2xl bg-stone-900/70 border border-stone-700/50 p-5">
						<h4 class="text-lg font-semibold text-brand-orange mb-2">{pathway.title}</h4>
						<p class="text-gray-300 text-sm mb-3">{pathway.text}</p>
						<ul class="flex flex-wrap gap-1.5">
							{#each pathway.areas as area}<li class="text-xs px-2 py-1 rounded bg-stone-800 text-gray-300">{area}</li>{/each}
						</ul>
					</article>
				{/each}
			</div>

			<div class="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
				<p class="text-2xl font-bold text-white">"{a.hustle100.quote}"</p>
				<a href={a.hustle100.overviewImage} target="_blank" rel="noopener" class="inline-flex justify-center px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200">View the full Hustle 100 overview</a>
			</div>
		</div>
	</section>

	<!-- Ambition / outcomes -->
	<section id="ambition" class="max-w-6xl mx-auto px-4 scroll-mt-28">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{a.ambition.heading}</h2>
		<p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">{a.ambition.intro}</p>
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each a.ambition.items as item}
				<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6">
					<h3 class="text-lg font-bold text-brand-orange mb-2">{item.title}</h3>
					<p class="text-gray-300">{item.text}</p>
				</div>
			{/each}
		</div>
	</section>
</main>
