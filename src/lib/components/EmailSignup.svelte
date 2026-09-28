<script lang="ts">
	// Holiday club mailing list sign-up for the homepage (handled by the "subscribe" action in routes/+page.server.ts)
	import { enhance } from '$app/forms';
	import { page } from '$app/state';

	let isSubmitting = $state(false);

	const form = $derived(page.form as {
		subscribed?: boolean;
		signupErrors?: Record<string, string>;
		signupValues?: { firstName: string; email: string };
	} | null);
</script>

<section id="mailing-list" class="py-16 md:py-20 bg-black scroll-mt-24">
	<div class="max-w-3xl mx-auto px-4">
		<div class="bg-brand-orange/10 border border-brand-orange/30 rounded-2xl p-6 md:p-10">
			{#if form?.subscribed}
				<div class="text-center py-4" role="status">
					<div class="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<h2 class="text-2xl md:text-3xl font-bold text-white mb-2">You're on the list!</h2>
					<p class="text-gray-300">We'll email you when the next holiday club dates are announced.</p>
				</div>
			{:else}
				<div class="text-center mb-8">
					<h2 class="text-3xl md:text-4xl font-bold text-white mb-3">Get the next holiday club dates first</h2>
					<p class="text-gray-300">Join our mailing list and we'll let you know as soon as new holiday clubs and workshops open for booking.</p>
				</div>

				<form
					method="POST"
					action="/?/subscribe"
					use:enhance={() => {
						isSubmitting = true;
						return async ({ update }) => {
							isSubmitting = false;
							await update({ reset: false, invalidateAll: false });
						};
					}}
					class="space-y-5"
					novalidate
				>
					<!-- Honeypot: hidden from people, bots tend to fill it in -->
					<div class="absolute -left-[9999px]" aria-hidden="true">
						<label for="signup-website">Leave this field empty</label>
						<input type="text" id="signup-website" name="website" tabindex="-1" autocomplete="off" />
					</div>

					<div class="grid sm:grid-cols-2 gap-5">
						<div>
							<label for="signup-first-name" class="block text-sm font-medium text-gray-300 mb-2">First name</label>
							<input
								type="text"
								id="signup-first-name"
								name="firstName"
								autocomplete="given-name"
								required
								value={form?.signupValues?.firstName ?? ''}
								aria-invalid={!!form?.signupErrors?.firstName}
								class="w-full px-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors duration-200"
								placeholder="Your first name"
							/>
							{#if form?.signupErrors?.firstName}
								<p class="text-red-400 text-sm mt-1">{form.signupErrors.firstName}</p>
							{/if}
						</div>
						<div>
							<label for="signup-email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
							<input
								type="email"
								id="signup-email"
								name="email"
								autocomplete="email"
								required
								value={form?.signupValues?.email ?? ''}
								aria-invalid={!!form?.signupErrors?.email}
								class="w-full px-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors duration-200"
								placeholder="your@email.com"
							/>
							{#if form?.signupErrors?.email}
								<p class="text-red-400 text-sm mt-1">{form.signupErrors.email}</p>
							{/if}
						</div>
					</div>

					<div>
						<label class="flex items-start gap-3 cursor-pointer">
							<input
								type="checkbox"
								name="consent"
								value="yes"
								required
								aria-invalid={!!form?.signupErrors?.consent}
								class="mt-1 w-5 h-5 flex-shrink-0 accent-brand-orange"
							/>
							<span class="text-gray-300 text-sm leading-relaxed">
								I'm happy to receive emails from Hustle Hive about holiday clubs and workshops. I can unsubscribe at any time.
							</span>
						</label>
						{#if form?.signupErrors?.consent}
							<p class="text-red-400 text-sm mt-1">{form.signupErrors.consent}</p>
						{/if}
					</div>

					{#if form?.signupErrors?.form}
						<div class="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
							<p class="text-red-400 text-sm">{form.signupErrors.form}</p>
						</div>
					{/if}

					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full sm:w-auto px-8 py-3 bg-brand-orange hover:bg-brand-orange-dark disabled:bg-brand-orange/50 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-colors duration-200"
					>
						{isSubmitting ? 'Signing up...' : 'Sign me up'}
					</button>

					<p class="text-gray-400 text-sm">
						We'll only use your details to email you about holiday clubs and workshops. See our
						<a href="/privacy" class="text-brand-orange hover:underline">Privacy Policy</a>.
					</p>
				</form>
			{/if}
		</div>
	</div>
</section>
