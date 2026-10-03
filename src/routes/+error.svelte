<script lang="ts">
	// Shown for any missing page (404) or unexpected error, inside the normal site layout
	import { page } from '$app/state';
	import { AP_URL, BOOKINGS_URL, COMMUNITY_URL } from '$lib/links';

	const notFound = $derived(page.status === 404);

	const links = [
		{ label: 'Home', text: 'Start again from the homepage', href: '/' },
		{ label: 'Community & Youth', text: 'Holiday clubs, Maker Days and programmes', href: COMMUNITY_URL },
		{ label: 'Alternative Provision', text: 'For schools and local authorities', href: AP_URL },
		{ label: 'Contact us', text: "Tell us what you were looking for", href: '/contact#message' }
	];
</script>

<svelte:head>
	<title>{notFound ? 'Page not found' : 'Something went wrong'} - Hustle Hive</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="bg-black min-h-screen pt-36 pb-20">
	<section class="max-w-3xl mx-auto px-4 text-center">
		<img src="/images/hustlehive-logo-160.webp" alt="" width="73" height="80" class="h-20 w-auto mx-auto mb-6 opacity-80" />
		<p class="text-brand-orange font-semibold mb-2">{page.status}</p>
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
			{notFound ? "We can't find that page" : 'Something went wrong'}
		</h1>
		<p class="text-lg text-gray-300 mb-10">
			{notFound
				? 'It may have moved, or the link might be out of date. Try one of these instead:'
				: "Sorry, that didn't work. Please try again in a moment, or head to one of these pages:"}
		</p>

		<ul class="grid sm:grid-cols-2 gap-4 text-left mb-10">
			{#each links as link}
				<li>
					<a href={link.href} class="group block h-full rounded-2xl bg-stone-900/60 border border-stone-700/50 hover:border-brand-orange/60 p-5 transition-colors duration-200">
						<span class="flex items-center justify-between text-lg font-semibold text-white group-hover:text-brand-orange">
							{link.label}
							<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</span>
						<span class="block text-gray-400 text-sm mt-1">{link.text}</span>
					</a>
				</li>
			{/each}
		</ul>

		<a
			href={BOOKINGS_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200"
		>
			Book a course
		</a>
	</section>
</main>
