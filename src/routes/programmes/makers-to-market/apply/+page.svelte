<script lang="ts">
	// Form state
	let formData = $state({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		age: '',
		productType: '',
		productDescription: '',
		experience: '',
		goals: '',
		availability: '',
		heardAbout: '',
		additionalInfo: ''
	});

	let isSubmitting = $state(false);
	let submitSuccess = $state(false);
	let submitError = $state('');

	const productTypes = [
		'Crafts & Handmade Goods',
		'Art & Illustration',
		'Jewellery & Accessories',
		'Clothing & Textiles',
		'Food & Baked Goods',
		'Woodwork & Carpentry',
		'Candles & Home Fragrance',
		'Skincare & Beauty',
		'Other'
	];

	const experienceLevels = [
		'Complete beginner - I have an idea but haven\'t started yet',
		'Hobbyist - I make things for fun/gifts',
		'Side hustle - I\'ve sold a few items informally',
		'Established - I have an existing small business'
	];

	const availabilityOptions = [
		'Weekday evenings (6pm-9pm)',
		'Saturday mornings',
		'Saturday afternoons',
		'Sunday afternoons',
		'Flexible - most times work for me'
	];

	const heardAboutOptions = [
		'Social media (Facebook, Instagram)',
		'Friend or family recommendation',
		'School or college',
		'Community centre or local event',
		'Google search',
		'Other'
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

	<div class="max-w-3xl mx-auto px-4">
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
				Ready to turn your creative ideas into a real business? Fill out this application to join
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
				<!-- Personal Information -->
				<div class="mb-8">
					<h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
						<span
							class="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange text-sm font-bold"
							>1</span
						>
						Personal Information
					</h2>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label for="firstName" class="block text-sm font-medium text-gray-300 mb-1"
								>First Name *</label
							>
							<input
								type="text"
								id="firstName"
								bind:value={formData.firstName}
								required
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
								placeholder="Your first name"
							/>
						</div>

						<div>
							<label for="lastName" class="block text-sm font-medium text-gray-300 mb-1"
								>Last Name *</label
							>
							<input
								type="text"
								id="lastName"
								bind:value={formData.lastName}
								required
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
								placeholder="Your last name"
							/>
						</div>

						<div>
							<label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email *</label
							>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
								placeholder="your@email.com"
							/>
						</div>

						<div>
							<label for="phone" class="block text-sm font-medium text-gray-300 mb-1"
								>Phone Number</label
							>
							<input
								type="tel"
								id="phone"
								bind:value={formData.phone}
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
								placeholder="07xxx xxxxxx"
							/>
						</div>

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
					</div>
				</div>

				<!-- Product Information -->
				<div class="mb-8">
					<h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
						<span
							class="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange text-sm font-bold"
							>2</span
						>
						Your Product
					</h2>

					<div class="space-y-4">
						<div>
							<label for="productType" class="block text-sm font-medium text-gray-300 mb-1"
								>What type of product do you want to create/sell? *</label
							>
							<select
								id="productType"
								bind:value={formData.productType}
								required
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
							>
								<option value="">Select a category</option>
								{#each productTypes as type}
									<option value={type}>{type}</option>
								{/each}
							</select>
						</div>

						<div>
							<label for="productDescription" class="block text-sm font-medium text-gray-300 mb-1"
								>Describe your product idea *</label
							>
							<textarea
								id="productDescription"
								bind:value={formData.productDescription}
								required
								rows="3"
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors resize-none"
								placeholder="Tell us about what you want to make and sell..."
							></textarea>
						</div>

						<div>
							<label for="experience" class="block text-sm font-medium text-gray-300 mb-1"
								>What's your current experience level? *</label
							>
							<select
								id="experience"
								bind:value={formData.experience}
								required
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
							>
								<option value="">Select your experience</option>
								{#each experienceLevels as level}
									<option value={level}>{level}</option>
								{/each}
							</select>
						</div>
					</div>
				</div>

				<!-- Goals & Availability -->
				<div class="mb-8">
					<h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
						<span
							class="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange text-sm font-bold"
							>3</span
						>
						Goals & Availability
					</h2>

					<div class="space-y-4">
						<div>
							<label for="goals" class="block text-sm font-medium text-gray-300 mb-1"
								>What do you hope to achieve from this programme? *</label
							>
							<textarea
								id="goals"
								bind:value={formData.goals}
								required
								rows="3"
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors resize-none"
								placeholder="Your goals and what you want to learn..."
							></textarea>
						</div>

						<div>
							<label for="availability" class="block text-sm font-medium text-gray-300 mb-1"
								>When are you available for sessions? *</label
							>
							<select
								id="availability"
								bind:value={formData.availability}
								required
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
							>
								<option value="">Select your availability</option>
								{#each availabilityOptions as option}
									<option value={option}>{option}</option>
								{/each}
							</select>
						</div>

						<div>
							<label for="heardAbout" class="block text-sm font-medium text-gray-300 mb-1"
								>How did you hear about us?</label
							>
							<select
								id="heardAbout"
								bind:value={formData.heardAbout}
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
							>
								<option value="">Select an option</option>
								{#each heardAboutOptions as option}
									<option value={option}>{option}</option>
								{/each}
							</select>
						</div>

						<div>
							<label for="additionalInfo" class="block text-sm font-medium text-gray-300 mb-1"
								>Anything else you'd like us to know?</label
							>
							<textarea
								id="additionalInfo"
								bind:value={formData.additionalInfo}
								rows="3"
								class="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors resize-none"
								placeholder="Any additional information, questions, or accessibility needs..."
							></textarea>
						</div>
					</div>
				</div>

				<!-- Error Message -->
				{#if submitError}
					<div class="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6">
						<p class="text-red-400 text-sm">{submitError}</p>
					</div>
				{/if}

				<!-- Submit Button -->
				<button
					type="submit"
					disabled={isSubmitting}
					class="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark disabled:bg-brand-orange/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
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
