<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Seo from '$lib/components/Seo.svelte';
	import { AP_SCHOOLS_URL, CONTACT_SUBJECTS, MAPS_DIRECTIONS_URL, MAPS_EMBED_URL, company, contactHref } from '$lib/links';

	let isSubmitting = $state(false);

	// TODO: replace with arrival and parking details (e.g. where to park, which door to use)
	const arrivalInfo = 'Arrival and parking information coming soon.';

	// Pre-select a subject from the web address, e.g. /contact?subject=after-school.
	// After a failed submit, keep whatever the person had chosen.
	const isValidSubject = (value: string | null | undefined) =>
		!!value && CONTACT_SUBJECTS.some((s) => s.value === value);
	const fromUrl = $page.url.searchParams.get('subject');
	let subject = $state(
		isValidSubject($page.form?.values?.subject) ? $page.form.values.subject : isValidSubject(fromUrl) ? fromUrl! : ''
	);

	// The cards at the top link to this same page with a different ?subject=, so keep the dropdown in step
	$effect(() => {
		const value = $page.url.searchParams.get('subject');
		if (isValidSubject(value)) subject = value!;
	});
</script>

<Seo
	title="Contact Us - Hustle Hive"
	description="Get in touch with Hustle Hive in Darlington about Makers to Market, holiday clubs and workshops, our programmes, or partnership opportunities."
/>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Hero Section -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-white italic mb-4">Contact Us</h1>
		<p class="text-lg md:text-xl text-gray-300">
			We'd love to hear from you
		</p>
	</section>

	<!-- Which team? -->
	<section aria-label="Contacts by area" class="max-w-6xl mx-auto px-4 mb-12 grid md:grid-cols-2 gap-4">
		<!-- Both cards jump down to the form on this page with the right subject chosen (they used to link away, which sent people round in a loop) -->
		<a href={contactHref('general')} class="group rounded-2xl bg-stone-900/50 border border-stone-700/50 hover:border-brand-orange p-6 transition-colors duration-200">
			<h2 class="text-xl font-bold text-white group-hover:text-brand-orange mb-1">Community &amp; Youth</h2>
			<p class="text-gray-300">Programmes, holiday clubs, workshops, volunteering and general questions. Use the form below.</p>
		</a>
		<a href={contactHref('school-referral')} class="group rounded-2xl bg-stone-900/50 border border-stone-700/50 hover:border-brand-orange p-6 transition-colors duration-200">
			<h2 class="text-xl font-bold text-white group-hover:text-brand-orange mb-1">Alternative Provision</h2>
			<p class="text-gray-300">Schools and local authorities: placements, referrals and Experience &amp; Engagement Days. Use the form below.</p>
		</a>
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

						<!-- Address -->
						<div class="flex items-start gap-4">
							<div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<div>
								<h3 class="text-xl font-semibold text-white mb-1">Visit Us</h3>
								<address class="not-italic text-gray-400">
									{company.businessAddress}
								</address>
							</div>
						</div>
					</div>
				</div>

				<!-- Contact Form. Contact links elsewhere on the site jump here via #message. The marker sits
				     just above the card (clear of the fixed menu) rather than using scroll-margin, which
				     isn't respected when SvelteKit restores the position after an in-site link. -->
				<div class="relative bg-stone-900/50 border border-stone-700/50 rounded-2xl p-8">
					<span id="message" class="absolute -top-28" aria-hidden="true"></span>
					{#if $page.form?.success}
						<!-- Success Message -->
						<div class="text-center py-8">
							<div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<h2 class="text-2xl font-bold text-white mb-2">Message Sent!</h2>
							<p class="text-gray-300 mb-6">
								Thank you for getting in touch. We'll get back to you as soon as possible.
							</p>
							<a
								href="/"
								class="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors"
							>
								Return to Homepage
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
						</div>
					{:else}
						<h2 class="text-2xl font-bold text-white mb-6">Send us a Message</h2>
						<form
							method="POST"
							use:enhance={() => {
								isSubmitting = true;
								return async ({ update }) => {
									isSubmitting = false;
									await update();
								};
							}}
							class="space-y-6"
						>
							<!-- Honeypot: hidden from people, bots tend to fill it in -->
							<div class="absolute -left-[9999px]" aria-hidden="true">
								<label for="website">Leave this field empty</label>
								<input type="text" id="website" name="website" tabindex="-1" autocomplete="off" />
							</div>
							<div>
								<label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									value={$page.form?.values?.name ?? ''}
									class="w-full px-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors duration-200"
									placeholder="Your name"
								/>
								{#if $page.form?.errors?.name}
									<p class="text-red-400 text-sm mt-1">{$page.form.errors.name}</p>
								{/if}
							</div>

							<div>
								<label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									value={$page.form?.values?.email ?? ''}
									class="w-full px-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors duration-200"
									placeholder="your@email.com"
								/>
								{#if $page.form?.errors?.email}
									<p class="text-red-400 text-sm mt-1">{$page.form.errors.email}</p>
								{/if}
							</div>

							<div>
								<label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
								<select
									id="subject"
									name="subject"
									required
									bind:value={subject}
									class="w-full px-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors duration-200"
								>
									<option value="">Select a subject</option>
									{#each CONTACT_SUBJECTS as option}
										<option value={option.value}>{option.label}</option>
									{/each}
								</select>
								{#if $page.form?.errors?.subject}
									<p class="text-red-400 text-sm mt-1">{$page.form.errors.subject}</p>
								{/if}
								{#if subject === 'school-referral'}
									<p class="mt-3 px-4 py-3 rounded-lg bg-brand-orange/10 border border-brand-orange/30 text-gray-200 text-sm" role="status">
										Making a referral? See
										<a href="{AP_SCHOOLS_URL}#referrals" class="text-brand-orange font-semibold hover:underline">how referrals work</a>
										and the information we'll need, then send us a message here.
									</p>
								{/if}
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
								>{$page.form?.values?.message ?? ''}</textarea>
								{#if $page.form?.errors?.message}
									<p class="text-red-400 text-sm mt-1">{$page.form.errors.message}</p>
								{/if}
							</div>

							{#if $page.form?.errors?.form}
								<div class="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
									<p class="text-red-400 text-sm">{$page.form.errors.form}</p>
								</div>
							{/if}

							<button
								type="submit"
								disabled={isSubmitting}
								class="w-full px-6 py-4 bg-brand-orange hover:bg-brand-orange-dark disabled:bg-brand-orange/50 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-colors duration-200"
							>
								{#if isSubmitting}
									Sending...
								{:else}
									Send Message
								{/if}
							</button>
						</form>
					{/if}
				</div>
		</div>
	</section>

	<!-- Find Us -->
	<section class="max-w-6xl mx-auto px-4 mt-16" aria-labelledby="find-us-heading">
		<div class="border-t border-stone-700/50 pt-12">
			<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
				<div>
					<h2 id="find-us-heading" class="text-3xl font-bold text-white mb-3">Find Us</h2>
					<address class="not-italic text-gray-300 text-lg">{company.businessAddress}</address>
					<p class="text-gray-400 mt-2">{arrivalInfo}</p>
				</div>
				<a
					href={MAPS_DIRECTIONS_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 w-full md:w-auto flex-shrink-0"
				>
					Get directions
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				</a>
			</div>

			<!-- Photo and map: side by side on desktop, stacked on mobile -->
			<div class="grid md:grid-cols-2 gap-6">
				<img
					src="/images/hustle-hive-building.webp"
					alt="The outside of Paramo House on Denmark Street, Darlington, home of Hustle Hive"
					width="800"
					height="600"
					loading="lazy"
					decoding="async"
					class="w-full aspect-[4/3] object-cover rounded-2xl border border-stone-700/50"
				/>
				<div class="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-stone-700/50 bg-stone-900">
					<iframe
						src={MAPS_EMBED_URL}
						title="Map showing Hustle Hive at {company.businessAddress}"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						class="w-full h-full border-0"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	</section>
</main>
