<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { contactHref } from '$lib/links';

	const skills = [
		{ title: 'Real-world design challenges', text: 'Each course centres on a real brief, from designing a restaurant to building an eco home' },
		{ title: 'From sketch to finished model', text: 'Children take their own ideas all the way from first sketch to a finished model' },
		{ title: 'Real tools and kit', text: 'CAD software, 3D printers, vinyl cutters and traditional model-making' },
		{ title: 'Pitch day', text: 'Every course ends with children presenting their work to family and friends' },
		{ title: 'Skills that count', text: 'Maths, design, technology and communication, built along the way' },
		{ title: 'Something to keep', text: 'Every child leaves with a finished model and a portfolio of their work' }
	];
</script>

<Seo
	title="Maker Days for Home-Educated Children (8–16) - Hustle Hive"
	description="Hands-on project days in Darlington for home-educated children aged 8–16: real-world design challenges, CAD, 3D printing, vinyl cutting and model-making, ending in a pitch day."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="flex items-center gap-3 mb-4">
			<svg class="w-10 h-10 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437" />
			</svg>
			<h1 class="text-4xl md:text-5xl font-bold text-white italic">Maker Days</h1>
		</div>
		<p class="text-lg md:text-xl text-gray-300">
			Hands-on project days for home-educated children aged 8–16.
		</p>
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Image -->
	<section class="max-w-4xl mx-auto px-4 mb-12">
		<img
			src="/images/maker-days.webp"
			alt="Children building scale models of restaurant designs at Hustle HQ, with a 3D printer in the background"
			class="w-full aspect-[16/9] object-cover object-[center_60%] rounded-2xl border border-stone-700/50"
		/>
	</section>

	<!-- Content -->
	<section class="max-w-6xl mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-12">
			<!-- About -->
			<div>
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-6">About Maker Days</h2>
				<div class="space-y-4 text-gray-300">
					<p>
						Maker Days are hands-on project days for home-educated children aged 8–16. Each course centres on a real-world design challenge, from designing a restaurant to building an eco home. Children take their ideas from first sketch to finished model, learning to use CAD software, 3D printers, vinyl cutters and traditional model-making along the way.
					</p>
					<p>
						Every course ends with a pitch day, where children present their work to family and friends. Along the way they build real skills in maths, design, technology and communication, and leave with a finished model and a portfolio of their work.
					</p>
				</div>
			</div>

			<!-- What they'll experience -->
			<div>
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-6">What Children Will Experience</h2>
				<ul class="space-y-4">
					{#each skills as item}
						<li class="flex items-start gap-3">
							<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="text-white font-semibold">{item.title}</h3>
								<p class="text-gray-400">{item.text}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-16 text-center">
			<a
				href={contactHref('maker-days')}
				class="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-lg"
			>
				Register interest
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</section>
</main>
