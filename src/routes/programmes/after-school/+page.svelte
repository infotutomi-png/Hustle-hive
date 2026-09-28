<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { contactHref } from '$lib/links';
</script>

<Seo
	title="After-School Programme - Hustle Hive"
	description="Creative, skill-building activities for ages 11–16 at Hustle Hive's After-School Programme."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="flex items-center gap-3 mb-4">
			<svg class="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
			</svg>
			<h1 class="text-4xl md:text-5xl font-bold text-white italic">After-School Programme</h1>
		</div>
		<p class="text-lg md:text-xl text-gray-300">
			Creative, skill-building activities for ages 11–16, after school.
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
				src="/images/after-school-programe2.webp"
				alt="After-School Programme"
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
						Our After-School Programme provides a safe, inspiring space for young people aged 11–16 to explore their creativity, develop new skills, and build confidence.
					</p>
					<p>
						From arts and crafts to digital design, woodworking to cooking, we offer a rotating schedule of hands-on activities that spark curiosity and nurture talent.
					</p>
					<p>
						Led by experienced mentors, sessions are designed to be fun, engaging, and educational—helping young people discover what they're passionate about while building friendships along the way.
					</p>
				</div>
			</div>

			<!-- What You'll Do -->
			<div>
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-6">What You'll Do</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Creative Projects</h3>
							<p class="text-gray-400">Design, make, and take home your own creations each week</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Skill Building</h3>
							<p class="text-gray-400">Learn practical skills from experienced makers and mentors</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Team Challenges</h3>
							<p class="text-gray-400">Work with others on group projects and friendly competitions</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Showcase Events</h3>
							<p class="text-gray-400">Share your work with family and friends at our termly showcases</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-16 text-center">
			<a
				href={contactHref('after-school')}
				class="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-lg"
			>
				Register interest
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</section>
</main>
