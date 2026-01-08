<svelte:head>
	<title>Makers to Market - Hustle Hive</title>
	<meta name="description" content="Join our 12-week Makers to Market programme - take your handmade products from idea to market with Hustle Hive." />
</svelte:head>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="flex items-center gap-3 mb-4">
			<svg class="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
			</svg>
			<h1 class="text-4xl md:text-5xl font-bold text-white italic">Makers to Market</h1>
		</div>
		<p class="text-lg md:text-xl text-gray-300">
			A 12-week journey turning creative ideas into real-world success.
		</p>
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Hero Image -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="rounded-2xl overflow-hidden">
			<img
				src="/images/makers-to-market.png"
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
				href="/programmes/makers-to-market/apply"
				class="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-lg"
			>
				Apply Now
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</section>
</main>
