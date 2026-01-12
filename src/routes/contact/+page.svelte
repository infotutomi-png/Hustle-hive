<svelte:head>
	<title>Contact Us - Hustle Hive</title>
	<meta name="description" content="Get in touch with Hustle Hive. We'd love to hear from you about our programmes, events, or partnership opportunities." />
</svelte:head>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Hero Section -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-white italic mb-4">Contact Us</h1>
		<p class="text-lg md:text-xl text-gray-300">
			We'd love to hear from you
		</p>
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Contact Section -->
	<section class="max-w-6xl mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-12">
				<!-- Contact Info -->
				<div>
					<h2 class="text-3xl font-bold text-white mb-6">Get in Touch</h2>
					<p class="text-gray-300 text-lg mb-8">
						Whether you have questions about our programmes, want to partner with us, or just want to say hello, we're here to help.
					</p>

					<div class="space-y-6">
						<!-- Email - Kieron -->
						<div class="flex items-start gap-4">
							<div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<div>
								<h3 class="text-xl font-semibold text-white mb-1">Email - Kieron</h3>
								<a href="mailto:kieron@hustlehive.co.uk" class="text-gray-400 hover:text-brand-orange transition-colors duration-200">
									kieron@hustlehive.co.uk
								</a>
							</div>
						</div>

						<!-- Email - Gavin -->
						<div class="flex items-start gap-4">
							<div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<div>
								<h3 class="text-xl font-semibold text-white mb-1">Email - Gavin</h3>
								<a href="mailto:gavin@hustlehive.co.uk" class="text-gray-400 hover:text-brand-orange transition-colors duration-200">
									gavin@hustlehive.co.uk
								</a>
							</div>
						</div>

						<!-- Phone -->
						<div class="flex items-start gap-4">
							<div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
							</div>
							<div>
								<h3 class="text-xl font-semibold text-white mb-1">Call Us</h3>
								<a href="tel:+447593975681" class="text-gray-400 hover:text-brand-orange transition-colors duration-200">
									07593 975681
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Contact Form -->
				<div class="bg-stone-900/50 border border-stone-700/50 rounded-2xl p-8">
					<h2 class="text-2xl font-bold text-white mb-6">Send us a Message</h2>
					<form class="space-y-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								class="w-full px-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors duration-200"
								placeholder="Your name"
							/>
						</div>

						<div>
							<label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								class="w-full px-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors duration-200"
								placeholder="your@email.com"
							/>
						</div>

						<div>
							<label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
							<select
								id="subject"
								name="subject"
								required
								class="w-full px-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors duration-200"
							>
								<option value="">Select a subject</option>
								<option value="general">General Enquiry</option>
								<option value="programmes">Programmes</option>
								<option value="events">Events</option>
								<option value="partnership">Partnership Opportunities</option>
								<option value="volunteer">Volunteering</option>
								<option value="other">Other</option>
							</select>
						</div>

						<div>
							<label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
							<textarea
								id="message"
								name="message"
								rows="5"
								required
								class="w-full px-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors duration-200 resize-none"
								placeholder="How can we help you?"
							></textarea>
						</div>

						<button
							type="submit"
							class="w-full px-6 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200"
						>
							Send Message
						</button>
					</form>
				</div>
		</div>
	</section>
</main>
