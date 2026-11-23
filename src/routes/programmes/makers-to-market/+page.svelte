<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import SubjectTags from '$lib/components/SubjectTags.svelte';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import home from '$lib/content/home.json';
	import { SHOW_SELLERS } from '$lib/features';
	import { MAKERS_APPLY_URL } from '$lib/links';
	import { iconPaths } from '$lib/icons';

	const gallery = home.makersToMarket.slides.map((slide) => slide.image);

	// The three things people most want to know: it costs nothing, and what they make is theirs
	const freeItems = [
		{ icon: 'ticket', title: 'Free place', text: 'Fully funded by The National Lottery Community Fund, so there is nothing to pay.' },
		{ icon: 'box', title: 'Free materials', text: 'The materials you need to make your products are provided.' },
		{ icon: 'cart', title: 'Keep or sell what you make', text: 'Everything you make is yours, to keep or to sell at market.' }
	];

	const whoFor = [
		{ icon: 'people', title: 'Out of work?', text: 'Build skills and confidence, and earn from what you make.' },
		{ icon: 'chart', title: 'Need to earn more?', text: 'Turn your making into extra income alongside your current work.' },
		{ icon: 'sparkles', title: 'Love crafts?', text: 'Whether you make for fun or dream of starting a small business, this is for you.' }
	];

	const skills = [
		{ icon: 'pencil', title: 'Product development', text: 'Refine your ideas and create a cohesive collection that is ready for market.' },
		{ icon: 'sparkles', title: 'Branding and design', text: 'Build a brand identity, from your name and logo to labels and packaging.' },
		{ icon: 'megaphone', title: 'Marketing', text: 'Find your customers and learn how to reach them, online and in person.' },
		{ icon: 'calculator', title: 'Pricing and costs', text: 'Work out what your products cost to make and set prices that work for you and your customers.' },
		{ icon: 'cart', title: 'Selling at market', text: 'Sell at live markets with support from our team and fellow makers.' },
		{ icon: 'chart', title: 'Next steps for your business', text: 'Leave with the confidence and a plan to keep growing beyond the programme.' }
	];

	const applyClass =
		'inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200';
</script>

<Seo
	title="Makers to Market - Free Course in Darlington - Hustle Hive"
	description="Free 12-week course in Darlington, Mondays 6pm to 8pm from 4 January 2027. Lottery funded: free materials, and keep or sell what you make."
	image="/og/makers-to-market.jpg"
	imageAlt="Makers to Market: a maker and mentor working on a printed tote bag"
/>

{#snippet icon(name: string, cls: string)}
	<svg class={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		{#each iconPaths(name) as d}<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" {d} />{/each}
	</svg>
{/snippet}

{#snippet applyButton(extra = '')}
	<a href={MAKERS_APPLY_URL} class="{applyClass} {extra}">
		Apply now
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
		</svg>
	</a>
{/snippet}

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Applications Open Banner -->
	<section class="max-w-6xl mx-auto px-4 mb-10">
		<div class="bg-brand-orange/10 border border-brand-orange/40 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
			<div class="flex items-center gap-3 flex-1">
				<span class="relative flex h-3 w-3 flex-shrink-0" aria-hidden="true">
					<span class="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
				</span>
				<p class="text-white text-lg font-semibold">Applications open now: free places, starting Monday 4 January 2027</p>
			</div>
			{@render applyButton()}
		</div>
	</section>

	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="flex items-center gap-3 mb-4">
			{@render icon('pencil', 'w-10 h-10 text-brand-orange flex-shrink-0')}
			<h1 class="text-4xl md:text-5xl font-bold text-white">Makers to Market</h1>
		</div>
		<p class="text-lg md:text-xl text-gray-300 mb-6">
			A free 12-week journey turning your creative ideas into real-world success.
		</p>
		<SubjectTags class="mb-6" />

		<!-- At a Glance -->
		<div class="inline-block max-w-2xl bg-stone-900/50 border border-stone-700/50 rounded-xl px-5 py-4">
			<h2 class="text-sm font-semibold uppercase tracking-wide text-brand-orange mb-1">At a glance</h2>
			<p class="text-white font-medium">12-week programme · Darlington</p>
			<p class="text-gray-300">Starts: <strong class="text-white">Monday 4 January 2027</strong></p>
			<p class="text-gray-300">When: <strong class="text-white">Mondays, 6pm to 8pm</strong></p>
			<p class="text-gray-300">Cost: <strong class="text-white">Free</strong>, including materials</p>
			<p class="text-gray-300">Who it's for: <strong class="text-white">people who are out of work, people who need to earn more, and anyone interested in crafts or starting a small business</strong></p>
		</div>
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Hero Image -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="rounded-2xl overflow-hidden">
			<img
				src="/images/makers-workshop.webp"
				alt="A maker peeling the backing off a vinyl design on a tote bag while a mentor looks on, with a heat press behind them"
				width="1600"
				height="566"
				class="w-full h-64 md:h-96 object-cover object-center"
			/>
		</div>
	</section>

	<div class="max-w-6xl mx-auto px-4 space-y-16">
		<!-- Free -->
		<section aria-labelledby="free">
			<h2 id="free" class="text-2xl md:text-3xl font-bold text-white mb-6">Completely free to take part</h2>
			<ul class="grid md:grid-cols-3 gap-4">
				{#each freeItems as item}
					<li class="rounded-2xl bg-brand-orange/10 border border-brand-orange/30 p-6">
						<span class="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center mb-4" aria-hidden="true">
							{@render icon(item.icon, 'w-6 h-6 text-brand-orange')}
						</span>
						<h3 class="text-xl font-bold text-white mb-2">{item.title}</h3>
						<p class="text-gray-300 leading-relaxed">{item.text}</p>
					</li>
				{/each}
			</ul>
		</section>

		<!-- Who it is for -->
		<section aria-labelledby="who">
			<h2 id="who" class="text-2xl md:text-3xl font-bold text-white mb-6">Who it's for</h2>
			<ul class="grid md:grid-cols-3 gap-4">
				{#each whoFor as who}
					<li class="flex items-start gap-3 rounded-2xl bg-stone-900/50 border border-stone-700/50 p-5">
						{@render icon(who.icon, 'w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5')}
						<p class="text-gray-300"><strong class="text-white font-semibold">{who.title}</strong> {who.text}</p>
					</li>
				{/each}
			</ul>
		</section>

		<!-- About -->
		<section aria-labelledby="about" class="max-w-3xl">
			<h2 id="about" class="text-2xl md:text-3xl font-bold text-white mb-6">About the programme</h2>
			<div class="space-y-4 text-gray-300 text-lg leading-relaxed">
				<p>
					Take your <span class="text-brand-orange font-semibold">handmade</span> products from idea to market with Hustle Hive's 12-week Makers to Market programme, designed to help you design, brand and sell your creations at real-world markets.
				</p>
				<p>
					Whether it's printed mugs, T-shirts and tote bags, custom vinyl designs cut on our Cricut machines or 3D-printed products, this programme gives you the skills, confidence and support to turn your ideas into products people want to buy.
				</p>
				<p>
					You'll work alongside mentors and fellow makers, gaining practical experience and building connections that last beyond the programme.
				</p>
			</div>
		</section>

		<!-- Skills -->
		<section aria-labelledby="skills">
			<h2 id="skills" class="text-2xl md:text-3xl font-bold text-white mb-3">Skills you'll learn</h2>
			<p class="text-gray-300 text-lg mb-8 max-w-3xl">Everything you need to go from making for yourself to selling to customers.</p>
			<ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each skills as skill}
					<li class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6">
						<span class="w-11 h-11 rounded-full bg-brand-orange/20 flex items-center justify-center mb-4" aria-hidden="true">
							{@render icon(skill.icon, 'w-6 h-6 text-brand-orange')}
						</span>
						<h3 class="text-lg font-bold text-white mb-2">{skill.title}</h3>
						<p class="text-gray-300 text-sm leading-relaxed">{skill.text}</p>
					</li>
				{/each}
			</ul>
		</section>

		<!-- Funder -->
		<section aria-labelledby="funder" class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
			<img
				src="/images/national-lottery-community-fund-digital-logo-black-background.webp"
				alt="The National Lottery Community Fund"
				width="800"
				height="391"
				loading="lazy"
				class="h-16 md:h-20 w-auto self-start md:self-center flex-shrink-0"
			/>
			<div>
				<h2 id="funder" class="text-2xl font-bold text-white mb-2">Funded by The National Lottery Community Fund</h2>
				<p class="text-gray-300 leading-relaxed">
					Makers to Market is fully funded by The National Lottery Community Fund. Thanks to National Lottery players, places and materials are free, so local makers can get the skills, support and confidence to turn their ideas into real businesses.
				</p>
			</div>
		</section>

		<!-- CTA -->
		<section class="text-center">
			<h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Ready to take your products to market?</h2>
			<p class="text-gray-300 text-lg mb-8">Places are free and limited. Apply now to join the programme starting Monday 4 January 2027, running on Mondays from 6pm to 8pm.</p>
			{@render applyButton('px-8 py-4 text-lg')}
		</section>
	</div>

	<!-- Gallery -->
	<section class="max-w-4xl mx-auto px-4 mt-20">
		<h2 class="text-2xl md:text-3xl font-bold text-white text-center mb-8">Makers to Market in pictures</h2>
		<ImageCarousel images={gallery} alt="Makers to Market" />
	</section>

	<!-- Meet Our Makers Section (hidden until the sellers pages show real makers; see $lib/features) -->
	{#if SHOW_SELLERS}
	<section class="max-w-6xl mx-auto px-4 mt-16">
		<div class="rounded-2xl bg-gradient-to-br from-stone-800/80 to-stone-900/90 border border-stone-700/50 p-8 md:p-10">
			<div class="flex flex-col md:flex-row items-center gap-6 md:gap-10">
				<div class="flex-1 text-center md:text-left">
					<h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Meet Our Makers</h2>
					<p class="text-gray-300">
						Browse products from our talented Makers to Market graduates. Each purchase supports a local maker on their business journey.
					</p>
				</div>
				<a
					href="/programmes/makers-to-market/sellers"
					class="inline-flex items-center gap-2 px-6 py-3 bg-stone-700/60 hover:bg-stone-600/60 text-white font-semibold rounded-lg transition-colors duration-200 border border-stone-600/50 whitespace-nowrap"
				>
					{@render icon('people', 'w-5 h-5')}
					Browse Sellers
				</a>
			</div>
		</div>
	</section>
	{/if}
</main>
