<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import APNav from '$lib/components/ap/APNav.svelte';
	import TickList from '$lib/components/ap/TickList.svelte';
	import content from '$lib/content/alternative-provision.json';
	import { AP_SCHOOLS_URL, COMMISSIONER_PACK_URL, company, contactHref } from '$lib/links';

	const o = content.overview;
	const enquireHref = contactHref('school-referral');
</script>

<Seo
	title="Alternative Provision in Darlington - Hustle Hive"
	description="Small-group, hands-on alternative provision in Darlington for Years 6 to 11. £155 per learner per day including transport, for schools and local authorities."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<APNav />

	<!-- Hero -->
	<section class="max-w-6xl mx-auto px-4 mb-12 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
		<div>
			<p class="text-brand-orange font-semibold uppercase tracking-wide text-sm mb-3">Alternative Provision</p>
			<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{o.heading}</h1>
			<p class="text-xl md:text-2xl text-gray-200 mb-4">{o.subheading}</p>
			<p class="text-gray-300 text-lg leading-relaxed mb-8">{o.intro}</p>
			<div class="flex flex-col sm:flex-row gap-3">
				<a href={enquireHref} class="inline-flex justify-center items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">Contact us about a placement</a>
				<a href="tel:+447593975681" class="inline-flex justify-center items-center gap-2 px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200">Call {company.phone}</a>
			</div>
		</div>
		<div class="grid grid-cols-3 gap-3">
			{#each o.heroImages as img, i}
				<img src={img.image} alt={img.alt} class="w-full aspect-[3/4] object-cover rounded-2xl border border-stone-700/50 {i === 1 ? 'translate-y-6' : ''}" fetchpriority={i === 0 ? 'high' : undefined} />
			{/each}
		</div>
	</section>

	<!-- At a glance -->
	<section aria-label="At a glance" class="max-w-6xl mx-auto px-4 mb-20">
		<div class="rounded-2xl bg-stone-900/60 border border-stone-700/50 p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
			<div>
				<div class="text-5xl font-bold text-brand-orange">{o.price}</div>
				<div class="text-white font-medium">{o.priceUnit}</div>
				<div class="text-gray-400 text-sm mt-1">{o.priceNote}</div>
			</div>
			<dl class="grid sm:grid-cols-2 gap-4">
				{#each o.facts as fact}
					<div>
						<dt class="text-sm font-semibold uppercase tracking-wide text-brand-orange">{fact.label}</dt>
						<dd class="text-gray-200">{fact.value}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

	<!-- Why choose us -->
	<section id="why" class="max-w-6xl mx-auto px-4 mb-20 scroll-mt-28 grid md:grid-cols-2 gap-10 items-center">
		<div>
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{o.why.heading}</h2>
			{#each o.why.paragraphs as p}<p class="text-gray-300 text-lg leading-relaxed mb-4">{p}</p>{/each}
		</div>
		<img src={o.why.image} alt={o.why.imageAlt} loading="lazy" class="w-full aspect-[4/3] object-cover rounded-2xl border border-stone-700/50" />
	</section>

	<!-- Who we work with -->
	<section id="who" class="bg-stone-950 border-y border-stone-800 py-16 mb-20 scroll-mt-28">
		<div class="max-w-6xl mx-auto px-4">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{o.who.heading}</h2>
			<p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">{o.who.intro}</p>
			<div class="grid lg:grid-cols-[1.2fr_1fr] gap-8">
				<TickList items={o.who.points} />
				<div class="rounded-2xl bg-stone-900/70 border border-stone-700/50 p-6">
					<h3 class="text-xl font-bold text-white mb-3">{o.who.suitabilityHeading}</h3>
					{#each o.who.suitability as p}<p class="text-gray-300 mb-3">{p}</p>{/each}
					<p class="text-gray-300"><strong class="text-white">Accessibility:</strong> {o.who.accessibility}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Our offer -->
	<section id="services" class="max-w-6xl mx-auto px-4 mb-20 scroll-mt-28 grid md:grid-cols-2 gap-10 items-center">
		<img src={o.offer.image} alt={o.offer.imageAlt} loading="lazy" class="w-full aspect-[4/3] object-cover rounded-2xl border border-stone-700/50 md:order-1" />
		<div class="md:order-2">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{o.offer.heading}</h2>
			{#each o.offer.paragraphs as p}<p class="text-gray-300 text-lg leading-relaxed mb-4">{p}</p>{/each}
			<a href={enquireHref} class="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 mt-2">Contact us about a placement</a>
		</div>
	</section>

	<!-- Experience & Engagement Days -->
	<section id="days" class="bg-stone-950 border-y border-stone-800 py-16 mb-20 scroll-mt-28">
		<div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
			<div>
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-5">{o.days.heading}</h2>
				<p class="text-gray-300 text-lg leading-relaxed mb-6">{o.days.intro}</p>
				<div class="grid sm:grid-cols-2 gap-4 mb-6">
					{#each o.days.types as type}
						<div class="rounded-xl bg-stone-900/70 border border-stone-700/50 p-4">
							<strong class="block text-brand-orange mb-1">{type.title}</strong>
							<span class="text-gray-300 text-sm">{type.text}</span>
						</div>
					{/each}
				</div>
				<p class="text-gray-400 mb-6">{o.days.note}</p>
				<a href={enquireHref} class="inline-flex items-center gap-2 px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200">Enquire about a day</a>
			</div>
			<img src={o.days.image} alt={o.days.imageAlt} loading="lazy" class="w-full aspect-[4/3] object-cover rounded-2xl border border-stone-700/50" />
		</div>
	</section>

	<!-- Schools call to action -->
	<section id="schools-cta" class="max-w-6xl mx-auto px-4 mb-20 scroll-mt-28">
		<div class="rounded-2xl bg-brand-orange/10 border border-brand-orange/40 p-6 md:p-10 flex flex-col lg:flex-row lg:items-center gap-6">
			<div class="flex-1">
				<h2 class="text-3xl font-bold text-white mb-3">{o.schoolsCta.heading}</h2>
				<p class="text-gray-300 text-lg">{o.schoolsCta.text}</p>
			</div>
			<div class="flex flex-col sm:flex-row gap-3">
				<a href={AP_SCHOOLS_URL} class="inline-flex justify-center px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">Information for schools</a>
				<a href={COMMISSIONER_PACK_URL} download="Hustle-Hive-Commissioner-Pack.pdf" class="inline-flex justify-center px-6 py-3 border border-stone-600 hover:border-brand-orange text-white font-semibold rounded-lg transition-colors duration-200">Download commissioner pack</a>
			</div>
		</div>
	</section>

	<!-- Gallery -->
	<section id="gallery" class="max-w-6xl mx-auto px-4 mb-20 scroll-mt-28">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-8">Gallery</h2>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-3">
			{#each o.gallery as img}
				<img src={img.image} alt={img.alt} loading="lazy" class="w-full aspect-square object-cover rounded-xl border border-stone-700/50" />
			{/each}
		</div>
	</section>

	<!-- AP contact -->
	<section id="contact" class="max-w-6xl mx-auto px-4 scroll-mt-28">
		<div class="rounded-2xl bg-stone-900/60 border border-stone-700/50 p-6 md:p-10">
			<h2 class="text-3xl font-bold text-white mb-3">{o.contact.heading}</h2>
			<p class="text-gray-300 text-lg mb-8">{o.contact.intro}</p>
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
				{#each o.contact.people as person}
					<div>
						<div class="text-white font-semibold">{person.name}</div>
						<div class="text-gray-400 text-sm mb-1">{person.role}</div>
						<a href="mailto:{person.email}" class="text-brand-orange hover:underline break-all">{person.email}</a>
					</div>
				{/each}
				<div>
					<div class="text-white font-semibold">Call us</div>
					<div class="text-gray-400 text-sm mb-1">Placements and referrals</div>
					<a href="tel:+447593975681" class="text-brand-orange hover:underline">{company.phone}</a>
				</div>
			</div>
			<a href={enquireHref} class="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">Send an enquiry</a>
		</div>
	</section>
</main>
