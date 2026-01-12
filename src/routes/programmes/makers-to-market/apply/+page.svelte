<script lang="ts">
	// Form state
	let formData = $state({
		name: '',
		age: '',
		location: '',
		areaOfInterest: ''
	});

	let isSubmitting = $state(false);
	let submitSuccess = $state(false);
	let submitError = $state('');

	const areasOfInterest = [
		'3D Printing',
		'Clothing & Textiles',
		'Art & Illustration',
		'Other Craft Activities'
	];

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;
		submitError = '';

		// Simulate form submission (replace with actual API call)
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			submitSuccess = true;
		} catch {
			submitError = 'Something went wrong. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>Apply to Makers to Market | Hustle Hive</title>
	<meta
		name="description"
		content="Apply for the Makers to Market programme - a 12-week journey from product design to real-world market sales."
	/>
</svelte:head>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Background -->
	<div class="fixed inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-black -z-10">
		<div
			class="absolute inset-0 opacity-10"
			style="background-image: url('/images/honeycomb-pattern.svg'); background-size: 60px 60px;"
		></div>
	</div>

	<div class="max-w-xl mx-auto px-4">
		<!-- Header -->
		<div class="text-center mb-10">
			<a
				href="/programmes/makers-to-market"
				class="inline-flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors mb-6"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Back to Makers to Market
			</a>

			<div class="flex items-center justify-center gap-4 mb-4">
				<div
					class="w-14 h-14 bg-brand-orange flex items-center justify-center"
					style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);"
				>
					<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
				</div>
				<h1 class="text-3xl md:text-4xl font-bold text-white">Apply to Makers to Market</h1>
			</div>

			<p class="text-gray-300 max-w-xl mx-auto">
				Ready to turn your creative ideas into a real business? Fill out this quick application to join
				our 12-week programme.
			</p>
		</div>

		{#if submitSuccess}
			<!-- Success Message -->
			<div
				class="bg-green-900/30 border border-green-500/50 rounded-2xl p-8 text-center backdrop-blur-sm"
			>
				<div
					class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
				>
					<svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h2 class="text-2xl font-bold text-white mb-2">Application Submitted!</h2>
				<p class="text-gray-300 mb-6">
					Thank you for applying to Makers to Market. We'll review your application and get back to
					you within 5 working days.
				</p>
				<a
					href="/"
					class="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors"
				>
					Return to Homepage
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
			</div>
		{:else}
			<!-- Application Form -->
			<form
				onsubmit={handleSubmit}
				class="bg-stone-900/50 border border-stone-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
			>
				<div class="space-y-5">
					<!-- Name -->
					<div>
						<label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name *</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							required
							class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
							placeholder="Your full name"
						/>
					</div>

					<!-- Age -->
					<div>
						<label for="age" class="block text-sm font-medium text-gray-300 mb-1">Age *</label>
						<input
							type="number"
							id="age"
							bind:value={formData.age}
							required
							min="11"
							max="99"
							class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
							placeholder="Your age"
						/>
					</div>

					<!-- Location -->
					<div>
						<label for="location" class="block text-sm font-medium text-gray-300 mb-1">Where do you live? *</label>
						<input
							type="text"
							id="location"
							bind:value={formData.location}
							required
							class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
							placeholder="Town or area"
						/>
					</div>

					<!-- Area of Interest -->
					<div>
						<label for="areaOfInterest" class="block text-sm font-medium text-gray-300 mb-2">Area of Interest *</label>
						<div class="space-y-2">
							{#each areasOfInterest as area}
								<label class="flex items-center gap-3 p-3 bg-stone-800/30 border border-stone-600/30 rounded-lg cursor-pointer hover:border-brand-orange/50 transition-colors has-[:checked]:border-brand-orange has-[:checked]:bg-brand-orange/10">
									<input
										type="radio"
										name="areaOfInterest"
										value={area}
										bind:group={formData.areaOfInterest}
										required
										class="w-4 h-4 text-brand-orange bg-stone-700 border-stone-600 focus:ring-brand-orange focus:ring-2"
									/>
									<span class="text-white">{area}</span>
								</label>
							{/each}
						</div>
					</div>
				</div>

				<!-- Error Message -->
				{#if submitError}
					<div class="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mt-6">
						<p class="text-red-400 text-sm">{submitError}</p>
					</div>
				{/if}

				<!-- Submit Button -->
				<button
					type="submit"
					disabled={isSubmitting}
					class="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark disabled:bg-brand-orange/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 text-lg mt-6"
				>
					{#if isSubmitting}
						<svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						Submitting...
					{:else}
						Submit Application
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					{/if}
				</button>

				<p class="text-gray-500 text-sm text-center mt-4">
					By submitting this form, you agree to be contacted about the Makers to Market programme.
				</p>
			</form>
		{/if}
	</div>
</main>
