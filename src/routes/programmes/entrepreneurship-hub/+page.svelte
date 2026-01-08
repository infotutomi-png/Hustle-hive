<svelte:head>
	<title>Entrepreneurship Hub - Hustle Hive</title>
	<meta name="description" content="Startups and side-hustles: mentorship, co-working, and workshops at Hustle Hive's Entrepreneurship Hub." />
</svelte:head>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="flex items-center gap-3 mb-4">
			<svg class="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
			</svg>
			<h1 class="text-4xl md:text-5xl font-bold text-white italic">Entrepreneurship Hub</h1>
		</div>
		<p class="text-lg md:text-xl text-gray-300">
			Startups and side-hustles: mentorship, co-working, and workshops.
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
				src="/images/entrepreneurs-hub.png"
				alt="Entrepreneurship Hub"
				class="w-full h-64 md:h-96 object-cover"
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
						The Entrepreneurship Hub is your launchpad for turning business ideas into reality. Whether you're starting a side-hustle or scaling a startup, we provide the space, support, and skills you need to succeed.
					</p>
					<p>
						Access our co-working space, attend workshops on everything from social media marketing to financial planning, and connect with mentors who've been where you are.
					</p>
					<p>
						Join a community of like-minded entrepreneurs who support each other, share knowledge, and celebrate wins together.
					</p>
				</div>
			</div>

			<!-- What We Offer -->
			<div>
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-6">What We Offer</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Co-Working Space</h3>
							<p class="text-gray-400">Flexible workspace with WiFi, meeting rooms, and hot desks</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Mentorship</h3>
							<p class="text-gray-400">One-to-one guidance from experienced business mentors</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Workshops & Training</h3>
							<p class="text-gray-400">Regular sessions on marketing, finance, legal, and more</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Networking Events</h3>
							<p class="text-gray-400">Connect with fellow entrepreneurs and potential collaborators</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-16 text-center">
			<a
				href="/contact"
				class="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-lg"
			>
				Get in Touch
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</section>
</main>
