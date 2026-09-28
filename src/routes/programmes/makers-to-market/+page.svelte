<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import home from '$lib/content/home.json';
	import { SHOW_SELLERS } from '$lib/features';
	import { MAKERS_APPLY_URL } from '$lib/links';

	const gallery = home.makersToMarket.slides.map((slide) => slide.image);
</script>

<Seo
	title="Makers to Market - Hustle Hive"
	description="Applications open now for our 12-week Makers to Market programme in Darlington - take your handmade products from idea to real-world market sales."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Applications Open Banner -->
	<section class="max-w-6xl mx-auto px-4 mb-10">
		<div class="bg-brand-orange/10 border border-brand-orange/40 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
			<div class="flex items-center gap-3 flex-1">
				<span class="relative flex h-3 w-3 flex-shrink-0" aria-hidden="true">
					<span class="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
				</span>
				<p class="text-white text-lg font-semibold">Applications open now</p>
			</div>
			<a
				href={MAKERS_APPLY_URL}
				class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200"
			>
				Apply now
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</section>

	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="flex items-center gap-3 mb-4">
			<svg class="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
			</svg>
			<h1 class="text-4xl md:text-5xl font-bold text-white italic">Makers to Market</h1>
		</div>
		<p class="text-lg md:text-xl text-gray-300 mb-6">
			A 12-week journey turning creative ideas into real-world success.
		</p>

		<!-- At a Glance -->
		<div class="inline-block bg-stone-900/50 border border-stone-700/50 rounded-xl px-5 py-4">
			<h2 class="text-sm font-semibold uppercase tracking-wide text-brand-orange mb-1">At a glance</h2>
			<p class="text-white font-medium">12-week programme · Darlington</p>
			<!-- TODO (add when confirmed): Who it's for, e.g. <p class="text-gray-300">Who it's for: ...</p> -->
			<!-- TODO (add when confirmed): Cost, e.g. <p class="text-gray-300">Cost: ...</p> -->
			<!-- TODO (add when confirmed): Time per week, e.g. <p class="text-gray-300">Time per week: ...</p> -->
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
				src="/images/makers_to_market2.webp"
				alt="Makers to Market programme"
				class="w-full h-64 md:h-96 object-cover object-[center_30%]"
			/>
		</div>
	</section>

	<!-- Content -->
	<section class="max-w-6xl mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-12">
			<!-- About -->
			<div>
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-6">About This Programme</h2>
				<div class="space-y-4 text-gray-300">
					<p>
						Take your <span class="text-brand-orange font-semibold">handmade</span> products from idea to market with Hustle Hive's 12-week Makers to Market programme, designed to help you design, brand and sell your creations at real-world markets.
					</p>
					<p>
						Whether you're crafting jewellery, baking goods, creating art, or building furniture, this programme gives you the skills, confidence, and support to turn your passion into a thriving business.
					</p>
					<p>
						You'll work alongside mentors and fellow makers, gaining practical experience and building connections that last beyond the programme.
					</p>
				</div>
			</div>

			<!-- What You'll Learn -->
			<div>
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-6">What You'll Learn</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Product Development</h3>
							<p class="text-gray-400">Refine your products and create a cohesive collection ready for market</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Branding & Marketing</h3>
							<p class="text-gray-400">Build your brand identity and learn how to reach your target customers</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Pricing & Finance</h3>
							<p class="text-gray-400">Understand your costs and set prices that work for you and your customers</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Real Market Experience</h3>
							<p class="text-gray-400">Sell at live markets with support from our team and fellow makers</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-16 text-center">
			<a
				href={MAKERS_APPLY_URL}
				class="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-lg"
			>
				Apply now
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</section>

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
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					Browse Sellers
				</a>
			</div>
		</div>
	</section>
	{/if}
</main>
