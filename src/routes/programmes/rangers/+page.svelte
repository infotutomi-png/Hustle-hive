<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { contactHref } from '$lib/links';

	const contactUrl = contactHref('rangers');

	const learn = [
		{ title: 'Route planning & map reading', text: 'map symbols, scale, grid references and using a compass' },
		{ title: 'Rights of way', text: "where you can go, where you shouldn't, and the Countryside Code" },
		{
			title: 'Nature detectives',
			text: "animal tracks, signs and identification, plus a safe introduction to foraging (look and learn: nothing gets eaten unless a leader says it's safe)"
		},
		{ title: 'First aid & emergencies', text: 'basic first aid, and what to do if things go wrong' },
		{ title: 'Outdoor know-how', text: 'checking the weather, packing the right kit, and bushcraft basics' },
		{ title: 'Teamwork & leadership', text: 'working together and taking turns to lead the way' }
	];

	const weeks = [
		'Kit, weather & the Countryside Code',
		'Maps: symbols, scale & setting the map',
		'Rights of way: where can we go?',
		'Compass basics & grid references',
		'Nature detectives: tracks & animal ID',
		'Foraging walk, safely done',
		'Bushcraft: shelter, knots & a brew (hot chocolate on the camp stove)',
		'First aid & “what if?” scenarios',
		'Plan your own route',
		'Lead it: final expedition & celebration'
	];

	const groups = [
		{ title: 'Primary Rangers', text: 'Years 4–6 (ages 8–11)' },
		{ title: 'Secondary Rangers', text: 'Years 7–11 (ages 11–16)' }
	];

	const details = [
		{ title: 'When', text: 'dates to be confirmed.' },
		{ title: 'Pick-up & drop-off', text: "included within Darlington, from your home. We'll confirm times once your group is confirmed." },
		{
			title: 'Cost',
			text: '£40 per week, paid weekly by subscription (£400 for the full 10 weeks). The subscription ends automatically after week 10.'
		},
		{
			title: 'What to bring',
			text: 'waterproof jacket, sturdy footwear, warm layers, a water bottle and a packed lunch (nut-free, please)'
		},
		{
			title: 'Weather',
			text: "we go out in most weathers, which is part of the adventure. If conditions are unsafe, we'll run an indoor session or rearrange it, and let you know by 8am."
		},
		{
			title: 'The final celebration',
			text: "families are invited to meet us at the finish of the week 10 expedition. We'll send the location and time during week 8."
		}
	];

	const ctaClass =
		'inline-flex items-center gap-2 px-6 sm:px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-base sm:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';
</script>

<Seo
	title="Hustle Hive Rangers: Outdoor Skills for Ages 8–16 - Hustle Hive"
	description="10-week outdoor skills programme for ages 8–16 in Darlington: map reading, navigation, nature, bushcraft and first aid, led by qualified outdoor leaders."
/>

{#snippet tick()}
	<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
		<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
		</svg>
	</div>
{/snippet}

{#snippet contactButton()}
	<a href={contactUrl} class={ctaClass}>
		Contact us for more info
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
		</svg>
	</a>
{/snippet}

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="flex items-center gap-3 mb-4">
			<svg class="w-10 h-10 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
			</svg>
			<h1 class="text-4xl md:text-5xl font-bold text-white italic">Hustle Hive Rangers</h1>
		</div>
		<p class="text-lg md:text-xl text-gray-200 font-semibold mb-5">
			10 weeks of maps, trails and outdoor skills for ages 8–16.
		</p>
		<p class="mb-6">
			<span class="inline-block px-4 py-1.5 bg-brand-orange text-black text-sm md:text-base font-bold rounded-full">Dates to be confirmed</span>
		</p>
		<p class="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
			Hustle Hive Rangers gets young people out into the countryside around Darlington, learning the skills to explore it confidently and safely. Each week builds on the last. By week 10 your Ranger will plan and lead their own route, with family invited to join the celebration at the finish.
		</p>
		{@render contactButton()}
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<div class="max-w-6xl mx-auto px-4 space-y-16">
		<!-- What Rangers will learn + The 10 weeks -->
		<div class="grid md:grid-cols-2 gap-12">
			<section aria-labelledby="learn">
				<h2 id="learn" class="text-2xl md:text-3xl font-bold text-white mb-6">What Rangers will learn</h2>
				<ul class="space-y-4">
					{#each learn as item}
						<li class="flex items-start gap-3">
							{@render tick()}
							<p class="text-gray-300"><strong class="text-white font-semibold">{item.title}:</strong> {item.text}</p>
						</li>
					{/each}
				</ul>
			</section>

			<section aria-labelledby="weeks">
				<h2 id="weeks" class="text-2xl md:text-3xl font-bold text-white mb-6">The 10 weeks</h2>
				<ol class="space-y-3">
					{#each weeks as week, i}
						<li class="flex items-start gap-3">
							<span class="w-7 h-7 rounded-full bg-brand-orange text-black text-sm font-bold flex items-center justify-center flex-shrink-0" aria-hidden="true">{i + 1}</span>
							<span class="text-gray-300 pt-0.5">{week}</span>
						</li>
					{/each}
				</ol>
			</section>
		</div>

		<!-- Who it's for -->
		<section aria-labelledby="who">
			<h2 id="who" class="text-2xl md:text-3xl font-bold text-white mb-4">Who it's for</h2>
			<p class="text-gray-300 text-lg mb-6">Two groups, split by school year, so everyone is with children their own age:</p>
			<ul class="grid sm:grid-cols-2 gap-4 mb-6">
				{#each groups as group}
					<li class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6">
						<p class="text-xl font-bold text-brand-orange mb-1">{group.title}</p>
						<p class="text-gray-300">{group.text}</p>
					</li>
				{/each}
			</ul>
			<p class="text-gray-300 text-lg">Up to 10 young people per group, with at least two leaders on every session.</p>
		</section>

		<!-- The details -->
		<section aria-labelledby="details">
			<h2 id="details" class="text-2xl md:text-3xl font-bold text-white mb-6">The details</h2>
			<ul class="grid md:grid-cols-2 gap-4">
				{#each details as item}
					<li class="flex items-start gap-3 rounded-2xl bg-stone-900/50 border border-stone-700/50 p-5">
						{@render tick()}
						<p class="text-gray-300"><strong class="text-white font-semibold">{item.title}:</strong> {item.text}</p>
					</li>
				{/each}
			</ul>
		</section>

		<!-- How booking works -->
		<section aria-labelledby="booking" class="rounded-2xl bg-stone-900/50 border border-brand-orange/40 p-6 md:p-8">
			<h2 id="booking" class="text-2xl md:text-3xl font-bold text-white mb-5">How booking works</h2>
			<div class="space-y-4 text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
				<p>
					Dates are still to be confirmed. Courses start once 7 young people have signed up. Get in touch through our contact form and we'll let you know as soon as dates are set and your child's group is confirmed, along with how to set up payment. If a group doesn't fill, we'll hold your child's place for the next start date.
				</p>
				<p>When you sign up, we'll ask about any medical needs, allergies and emergency contacts.</p>
			</div>
			{@render contactButton()}
		</section>

		<!-- Safe hands -->
		<section aria-labelledby="safe">
			<h2 id="safe" class="text-2xl md:text-3xl font-bold text-white mb-5">Safe hands</h2>
			<p class="text-gray-300 text-lg leading-relaxed max-w-3xl">
				Rangers is led by our qualified outdoor team, including Gavin Copland: Mountain Leader, Designated Safeguarding Lead and outdoor first aider. All our leaders are DBS-checked. Every activity is risk assessed.
			</p>
		</section>
	</div>
</main>
