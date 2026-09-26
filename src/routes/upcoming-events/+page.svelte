<script lang="ts">
	import eventsContent from '$lib/content/events.json';
	import { BOOKINGS_URL } from '$lib/links';

	type EventCategory = 'Makers to Market' | 'Outdoor Education & Wellbeing' | 'Young People' | 'Community';

	interface Event {
		title: string;
		date: string;
		category: EventCategory;
		description: string;
	}

	const events = eventsContent.events as Event[];

	const categoryColors: Record<EventCategory, string> = {
		'Makers to Market': 'bg-amber-600/20 text-amber-400 border-amber-600/30',
		'Outdoor Education & Wellbeing': 'bg-green-600/20 text-green-400 border-green-600/30',
		'Young People': 'bg-orange-600/20 text-orange-400 border-orange-600/30',
		'Community': 'bg-blue-600/20 text-blue-400 border-blue-600/30'
	};

	// Fallback styling if a category from the CMS isn't in the map above
	const defaultCategoryColor = 'bg-stone-600/20 text-stone-300 border-stone-600/30';
</script>

<svelte:head>
	<title>Upcoming Events - Hustle Hive</title>
	<meta
		name="description"
		content="Upcoming workshops, taster sessions, and community events at Hustle Hive."
	/>
</svelte:head>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Background -->
	<div class="fixed inset-0 -z-10">
		<div class="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950"></div>
		<div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
	</div>

	<div class="max-w-6xl mx-auto px-4">
		<!-- Header -->
		<div class="mb-12">
			<h1 class="text-4xl md:text-5xl font-bold text-white italic mb-4">{eventsContent.title}</h1>
			<p class="text-lg md:text-xl text-gray-300">
				{eventsContent.subtitle}
			</p>
		</div>

		<!-- Divider -->
		<div class="border-t border-stone-700/50 mb-12"></div>

		<!-- Notice Banner -->
		<div class="bg-brand-orange/10 border border-brand-orange/30 rounded-2xl p-6 mb-10 text-center">
			<svg class="w-10 h-10 text-brand-orange mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
			</svg>
			<h2 class="text-xl font-bold text-white mb-2">{eventsContent.noticeTitle}</h2>
			<p class="text-gray-300">
				{eventsContent.noticeText}
			</p>
		</div>

		<!-- Bookings Banner -->
		<div class="bg-stone-900/50 border border-stone-700/50 rounded-2xl p-6 md:p-8 mb-10 backdrop-blur-sm flex flex-col md:flex-row md:items-center gap-6">
			<div class="w-14 h-14 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
				<svg class="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
				</svg>
			</div>
			<div class="flex-1">
				<h2 class="text-xl md:text-2xl font-bold text-white mb-1">Book workshops & courses online</h2>
				<p class="text-gray-300">See live dates, check availability and reserve your place on our bookings site.</p>
			</div>
			<a
				href={BOOKINGS_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 flex-shrink-0"
			>
				View & book
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
				</svg>
			</a>
		</div>

		<!-- Events Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
			{#each events as event}
				<div
					class="bg-stone-900/50 border border-stone-700/50 rounded-2xl p-6 backdrop-blur-sm flex flex-col opacity-70"
				>
					<!-- Event Title -->
					<h2 class="text-xl md:text-2xl font-bold text-brand-orange mb-4 leading-tight min-h-[3.5rem]">
						{event.title}
					</h2>

					<!-- Date -->
					<div class="flex items-center gap-2 text-gray-300 mb-3">
						<svg class="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<span class="font-medium">{event.date}</span>
					</div>

					<!-- Category Tag -->
					<div class="mb-4">
						<span
							class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border {categoryColors[event.category] ?? defaultCategoryColor}"
						>
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
									clip-rule="evenodd"
								/>
							</svg>
							{event.category}
						</span>
					</div>

					<!-- Description -->
					<p class="text-gray-400 flex-1">
						{event.description}
					</p>
				</div>
			{/each}
		</div>

		<!-- Contact CTA -->
		<div class="text-center">
			<p class="text-gray-400 mb-4">Want to be notified when events are announced?</p>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200"
			>
				Get in Touch
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</div>
</main>
