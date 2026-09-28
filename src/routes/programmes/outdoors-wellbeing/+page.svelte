<script lang="ts">
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { contactHref } from '$lib/links';

	const outdoorImages = [
		'/images/outdoor_activities.jpeg',
		'/images/outdoor1.jpeg',
		'/images/outdoor2.jpeg',
		'/images/outdoor3.jpeg',
		'/images/outdoor4.jpeg',
		'/images/outdoor5.jpeg',
		'/images/outdoor6.jpeg',
		'/images/outdoor7.jpeg'
	];
</script>

<Seo
	title="Outdoor Education & Wellbeing - Hustle Hive"
	description="Nature-based learning, teamwork and wellbeing activities at Hustle Hive's Outdoor Education & Wellbeing programme."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="flex items-center gap-3 mb-4">
			<svg class="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L2 19h20L12 2z" />
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v17" />
			</svg>
			<h1 class="text-4xl md:text-5xl font-bold text-white italic">Outdoor Education & Wellbeing</h1>
		</div>
		<p class="text-lg md:text-xl text-gray-300">
			Nature-based learning, teamwork and wellbeing activities.
		</p>
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Image Carousel -->
	<section class="max-w-4xl mx-auto px-8 md:px-12 mb-12">
		<ImageCarousel images={outdoorImages} alt="Outdoor Education & Wellbeing programme" />
	</section>

	<!-- Content -->
	<section class="max-w-6xl mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-12">
			<!-- About -->
			<div>
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-6">About This Programme</h2>
				<div class="space-y-4 text-gray-300">
					<p>
						Our Outdoor Education & Wellbeing programme connects participants with nature through hands-on activities designed to build resilience, teamwork, and mental wellbeing.
					</p>
					<p>
						From forest walks and campfire cooking to bushcraft skills and mindfulness sessions, we create space for people to step away from screens, breathe fresh air, and reconnect with themselves and others.
					</p>
					<p>
						Whether you're looking to reduce stress, build confidence, or simply enjoy the outdoors with a supportive community, this programme offers something for everyone.
					</p>
				</div>
			</div>

			<!-- What You'll Experience -->
			<div>
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-6">What You'll Experience</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Nature Activities</h3>
							<p class="text-gray-400">Bushcraft, foraging, wildlife observation, and outdoor cooking</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Mindfulness & Wellbeing</h3>
							<p class="text-gray-400">Guided meditation, breathing exercises, and reflective journaling</p>
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
							<p class="text-gray-400">Problem-solving activities that build trust and communication</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">Community Connection</h3>
							<p class="text-gray-400">Build lasting friendships in a supportive outdoor environment</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-16 text-center">
			<a
				href={contactHref('outdoor-education')}
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
