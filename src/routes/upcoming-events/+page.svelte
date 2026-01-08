<script lang="ts">
	type EventCategory = 'Adult Programme' | 'Outdoors & Wellbeing' | 'Young People' | 'Community';

	interface Event {
		title: string;
		date: string;
		category: EventCategory;
		description: string;
		buttonText: string;
		buttonLink: string;
	}

	const events: Event[] = [
		{
			title: 'Makers to Market – Open Evening',
			date: 'Thu 21 March',
			category: 'Adult Programme',
			description: 'Learn more about our 12-week enterprise programme and meet the team.',
			buttonText: 'Register interest',
			buttonLink: '/programmes/makers-to-market/apply'
		},
		{
			title: 'Outdoor Wellbeing Taster Session',
			date: 'Sat 6 April',
			category: 'Outdoors & Wellbeing',
			description: 'Learn more about our 12-week enterprise programme and meet the team.',
			buttonText: 'Find out more',
			buttonLink: '#'
		},
		{
			title: 'After-school Creative Club – Launch',
			date: 'Starts Mon 15 April',
			category: 'Young People',
			description: 'Starts Mon 15 April',
			buttonText: 'Register interest',
			buttonLink: '#'
		}
	];

	const categoryColors: Record<EventCategory, string> = {
		'Adult Programme': 'bg-amber-600/20 text-amber-400 border-amber-600/30',
		'Outdoors & Wellbeing': 'bg-green-600/20 text-green-400 border-green-600/30',
		'Young People': 'bg-orange-600/20 text-orange-400 border-orange-600/30',
		'Community': 'bg-blue-600/20 text-blue-400 border-blue-600/30'
	};
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
		<div
			class="absolute inset-0 opacity-30"
			style="background-image: url('/images/texture-dark.jpg'); background-size: cover; background-position: center;"
		></div>
		<div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
	</div>

	<div class="max-w-6xl mx-auto px-4">
		<!-- Header -->
		<div class="mb-12">
			<h1 class="text-4xl md:text-5xl font-bold text-white italic mb-4">What's Coming Up</h1>
			<p class="text-lg md:text-xl text-gray-300">
				Upcoming workshops, taster sessions, and community events at Hustle Hive.
			</p>
		</div>

		<!-- Divider -->
		<div class="border-t border-stone-700/50 mb-12"></div>

		<!-- Events Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
			{#each events as event}
				<div
					class="bg-stone-900/50 border border-stone-700/50 rounded-2xl p-6 backdrop-blur-sm flex flex-col"
				>
					<!-- Event Title -->
					<h2 class="text-xl md:text-2xl font-bold text-brand-orange mb-4 leading-tight">
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
						<span>{event.date}</span>
					</div>

					<!-- Category Tag -->
					<div class="mb-4">
						<span
							class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border {categoryColors[event.category]}"
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
					<p class="text-gray-400 mb-6 flex-1">
						{event.description}
					</p>

					<!-- Button -->
					<a
						href={event.buttonLink}
						class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-800/80 hover:bg-stone-700/80 text-white font-medium rounded-lg transition-colors duration-200 border border-stone-600/50"
					>
						{event.buttonText}
					</a>
				</div>
			{/each}
		</div>

	</div>
</main>
