<script lang="ts">
	// Homepage section for schools and local authorities, so it's obvious straight away that we run
	// Alternative Provision. Facts and the price come from the AP content (CMS: Alternative Provision).
	import ap from '$lib/content/alternative-provision.json';
	import { AP_URL, COMMISSIONER_PACK_URL, contactHref } from '$lib/links';

	const price = (ap.overview as { price?: string }).price ?? '';
	const referralHref = contactHref('school-referral');

	const facts = ['Years 5 to 11', 'Up to six learners a day', ...(price ? [`${price} a day, transport included`] : [])];

	const trust = [
		{ title: 'AQA Unit Award registered centre', text: 'learners earn nationally recognised certificates for what they achieve.' },
		{ title: 'Attendance you can rely on', text: 'any absence reported by 10am the same day, plus a weekly summary every Friday.' },
		{ title: 'Trauma-informed practice', text: 'with clinical supervision from a Consultant Clinical Psychologist.' },
		{ title: 'Safe, checked staff', text: 'full recruitment and safeguarding checks, and a Designated Safeguarding Lead.' }
	];
</script>

<section id="alternative-provision" aria-labelledby="ap-home" class="py-16 md:py-24 bg-stone-950 border-y border-stone-800 scroll-mt-24">
	<div class="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
		<div>
			<p class="text-brand-orange font-bold uppercase tracking-wider text-sm mb-3">For schools &amp; local authorities</p>
			<h2 id="ap-home" class="text-3xl md:text-4xl font-bold text-white mb-4">Alternative Provision in Darlington</h2>
			<p class="text-gray-300 text-lg leading-relaxed mb-6">
				Small-group, hands-on learning for young people who are finding mainstream school hard. Through STEM, creative and outdoor projects, learners rebuild confidence, routine and motivation, as part of a plan agreed with their school or local authority.
			</p>

			<ul class="flex flex-wrap gap-2 mb-8" aria-label="Key facts">
				{#each facts as fact}
					<li class="px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/40 text-white text-sm font-semibold">{fact}</li>
				{/each}
			</ul>

			<ul class="space-y-4 mb-8">
				{#each trust as item}
					<li class="flex items-start gap-3">
						<span class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
						</span>
						<p class="text-gray-300"><strong class="text-white font-semibold">{item.title}:</strong> {item.text}</p>
					</li>
				{/each}
			</ul>

			<div class="flex flex-col sm:flex-row gap-3 mb-5">
				<a href={referralHref} class="inline-flex justify-center items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">
					Make a referral
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
				</a>
				<a href={COMMISSIONER_PACK_URL} download="Hustle-Hive-Commissioner-Pack.pdf" class="inline-flex justify-center items-center gap-2 px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
					Download commissioner pack (PDF)
				</a>
			</div>
			<a href={AP_URL} class="inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline">
				Find out more about our Alternative Provision <span aria-hidden="true">&rarr;</span>
			</a>
		</div>

		<img
			src="/images/ap/hiking.webp"
			alt="A group of students hiking beside a lake with backpacks"
			width="1000"
			height="750"
			loading="lazy"
			class="w-full aspect-[4/3] object-cover rounded-2xl border border-stone-700/50"
		/>
	</div>
</section>
