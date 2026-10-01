<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import APNav from '$lib/components/ap/APNav.svelte';
	import TickList from '$lib/components/ap/TickList.svelte';
	import content from '$lib/content/alternative-provision.json';
	import about from '$lib/content/about.json';
	import { AP_URL, COMMISSIONER_PACK_URL, SAFEGUARDING_URL, contactHref } from '$lib/links';

	const s = content.schools;
	const dsl = about.safeguarding.dsl;
</script>

<Seo
	title="For Schools & Local Authorities: Referrals, Safeguarding & Pricing - Hustle Hive"
	description="How alternative provision referrals work at Hustle Hive, how we keep young people safe and report back, our £155 daily rate, due diligence documents and FAQs."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<APNav />

	<section class="max-w-6xl mx-auto px-4 mb-14">
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{s.heading}</h1>
		<p class="text-lg md:text-xl text-gray-300 max-w-3xl">{s.intro}</p>
	</section>

	<!-- Referral & placement -->
	<section id="referrals" class="bg-stone-950 border-y border-stone-800 py-16 mb-20 scroll-mt-28">
		<div class="max-w-6xl mx-auto px-4">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{s.referrals.heading}</h2>
			<p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">{s.referrals.intro}</p>

			<div class="rounded-2xl bg-brand-orange/10 border border-brand-orange/40 p-6 md:p-8 mb-10 flex flex-col md:flex-row md:items-center gap-6">
				<div class="flex-1">
					<h3 class="text-xl font-bold text-white mb-2">{s.referrals.packHeading}</h3>
					<p class="text-gray-300 mb-2">{s.referrals.packText}</p>
					<p class="text-gray-400 text-sm">{s.referrals.packMeta}</p>
				</div>
				<a href={COMMISSIONER_PACK_URL} download="Hustle-Hive-Commissioner-Pack.pdf" class="inline-flex justify-center px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 flex-shrink-0">Download the pack</a>
			</div>

			<ol class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
				{#each s.referrals.steps as step, i}
					<li class="rounded-2xl bg-stone-900/70 border border-stone-700/50 p-5">
						<span class="w-9 h-9 rounded-full bg-brand-orange text-black font-bold flex items-center justify-center mb-3">{i + 1}</span>
						<h3 class="text-lg font-semibold text-white mb-1">{step.title}</h3>
						<p class="text-gray-300 text-sm">{step.text}</p>
					</li>
				{/each}
			</ol>

			<div class="rounded-2xl bg-stone-900/70 border border-stone-700/50 p-6">
				<h3 class="text-xl font-bold text-white mb-4">{s.referrals.agreedHeading}</h3>
				<TickList items={s.referrals.agreed} columns />
			</div>
		</div>
	</section>

	<!-- Safeguarding, monitoring & quality -->
	<section id="safeguarding" class="max-w-6xl mx-auto px-4 mb-20 scroll-mt-28">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-8">{s.monitoring.heading}</h2>
		<div class="grid md:grid-cols-2 gap-4 mb-6">
			<div class="rounded-2xl bg-stone-900/50 border border-brand-orange/40 p-6 md:col-span-2">
				<h3 class="text-xl font-bold text-white mb-2">Safeguarding</h3>
				<p class="text-gray-300 mb-3">Designated Safeguarding Lead: <strong class="text-white">{dsl}</strong>. Our full safeguarding statement, health and safety arrangements and all of our policies are in one place for the whole of Hustle Hive.</p>
				<a href={SAFEGUARDING_URL} class="text-brand-orange font-semibold hover:underline">Read our safeguarding statement and policies →</a>
			</div>
			<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6">
				<h3 class="text-xl font-bold text-white mb-4">{s.monitoring.attendanceHeading}</h3>
				<TickList items={s.monitoring.attendance} />
			</div>
			<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6">
				<h3 class="text-xl font-bold text-white mb-4">{s.monitoring.qualityHeading}</h3>
				{#each s.monitoring.quality as p}<p class="text-gray-300 mb-3">{p}</p>{/each}
			</div>
		</div>
		<details class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6 group">
			<summary class="cursor-pointer text-lg font-semibold text-white">{s.monitoring.ddHeading}</summary>
			<div class="mt-5">
				<TickList items={s.monitoring.dd} columns />
				<p class="text-gray-400 mt-4">{s.monitoring.ddNote}</p>
			</div>
		</details>
	</section>

	<!-- Pricing -->
	<section id="pricing" class="bg-stone-950 border-y border-stone-800 py-16 mb-20 scroll-mt-28">
		<div class="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
			<div>
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{s.pricing.heading}</h2>
				<p class="text-gray-300 text-lg leading-relaxed">{s.pricing.text}</p>
			</div>
			<div class="rounded-2xl bg-stone-900/70 border border-brand-orange/40 p-6 md:p-8">
				<h3 class="text-lg font-semibold text-white mb-2">{s.pricing.cardHeading}</h3>
				<div class="text-5xl font-bold text-brand-orange">{s.pricing.price}</div>
				<div class="text-gray-300 mb-5">{s.pricing.unit}</div>
				<TickList items={s.pricing.included} />
			</div>
		</div>
	</section>

	<!-- Policies (now in the shared About section) -->
	<section id="policies" class="max-w-6xl mx-auto px-4 mb-20 scroll-mt-28">
		<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
			<div class="flex-1">
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Policies and procedures</h2>
				<p class="text-gray-300">Our up-to-date policies, including safeguarding, health and safety, data protection and behaviour, are available in our Safeguarding &amp; policies section.</p>
			</div>
			<a href="{SAFEGUARDING_URL}#policies" class="inline-flex justify-center px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200 flex-shrink-0">View our policies</a>
		</div>
	</section>

	<!-- FAQs -->
	<section id="faqs" class="max-w-6xl mx-auto px-4 mb-16 scroll-mt-28">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-8">{s.faqs.heading}</h2>
		<div class="space-y-3">
			{#each s.faqs.items as faq}
				<details class="rounded-xl bg-stone-900/50 border border-stone-700/50 p-5">
					<summary class="cursor-pointer text-lg font-semibold text-white">{faq.q}</summary>
					<p class="text-gray-300 mt-3">{faq.a}</p>
				</details>
			{/each}
		</div>
	</section>

	<section class="max-w-6xl mx-auto px-4">
		<div class="flex flex-col sm:flex-row gap-3">
			<a href={contactHref('school-referral')} class="inline-flex justify-center px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">Discuss a placement</a>
			<a href="{AP_URL}#contact" class="inline-flex justify-center px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200">Alternative Provision contacts</a>
		</div>
	</section>
</main>
