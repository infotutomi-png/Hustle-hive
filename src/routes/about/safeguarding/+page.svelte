<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import TickList from '$lib/components/ap/TickList.svelte';
	import about from '$lib/content/about.json';
	import { isExternal } from '$lib/links';

	const sg = about.safeguarding;
</script>

<Seo
	title="Safeguarding & Policies - Hustle Hive"
	description="How Hustle Hive CIC keeps children, young people and adults safe, our Designated Safeguarding Lead, health and safety, and our policies and procedures."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="text-sm text-gray-400 mb-3"><a href="/" class="hover:text-brand-orange">Home</a> / <a href="/about" class="hover:text-brand-orange">About</a> / Safeguarding &amp; policies</div>
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{sg.heading}</h1>
		<p class="text-lg md:text-xl text-gray-300 max-w-3xl">{sg.intro}</p>
	</section>

	<section id="safeguarding" class="max-w-6xl mx-auto px-4 mb-16 scroll-mt-28 grid lg:grid-cols-[1.4fr_1fr] gap-6">
		<div class="rounded-2xl bg-stone-900/50 border border-brand-orange/40 p-6 md:p-8">
			<h2 class="text-2xl md:text-3xl font-bold text-white mb-2">{sg.leadHeading}</h2>
			<p class="text-gray-300 mb-6">Designated Safeguarding Lead: <strong class="text-white">{sg.dsl}</strong></p>
			<TickList items={sg.points} />
		</div>
		<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6 md:p-8">
			<h2 class="text-2xl font-bold text-white mb-4">{sg.healthHeading}</h2>
			{#each sg.health as p}<p class="text-gray-300 mb-3">{p}</p>{/each}
		</div>
	</section>

	<!-- Online safety (text only: no classroom.cloud logo until NetSupport gives permission) -->
	<section id="online-safety" class="max-w-6xl mx-auto px-4 mb-16 scroll-mt-28">
		<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6 md:p-8">
			<h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{sg.onlineHeading}</h2>
			<div class="max-w-3xl">
				{#each sg.online as p}<p class="text-gray-300 mb-3">{p}</p>{/each}
				<p class="text-gray-300">
					{sg.onlineContact}
					<a href="/contact#message" class="text-brand-orange font-semibold hover:underline">contact us</a>.
				</p>
			</div>
		</div>
	</section>

	<section id="policies" class="max-w-6xl mx-auto px-4 scroll-mt-28">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-3">{sg.policiesHeading}</h2>
		<p class="text-gray-300 text-lg mb-8">{sg.policiesIntro}</p>
		<div id="privacy" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 scroll-mt-28">
			{#each sg.policyGroups as group}
				<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-5">
					<h3 class="text-lg font-bold text-brand-orange mb-3">{group.title}</h3>
					<ul class="space-y-2">
						{#each group.links as link}
							{@const external = isExternal(link.href)}
							<li>
								<a
									href={link.href}
									target={external ? '_blank' : undefined}
									rel={external ? 'noopener noreferrer' : undefined}
									class="inline-flex items-start gap-1.5 text-gray-300 hover:text-brand-orange transition-colors duration-200"
								>
									<span>{link.label}</span>
									{#if external}
										<svg class="w-3.5 h-3.5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
										<span class="sr-only">(opens in a new tab)</span>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>
</main>
