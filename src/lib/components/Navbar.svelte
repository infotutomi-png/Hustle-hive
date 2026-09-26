<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { LEARNING_URL, BOOKINGS_URL } from '$lib/links';

	let mobileMenuOpen = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}

	const menuItems = [
		{ label: 'About Us', href: '/about', icon: 'info' },
		{ label: 'Programmes', href: '/programmes', icon: 'book' },
		{ label: 'Alternative Provision', href: LEARNING_URL, icon: 'graduation', external: true },
		{ label: 'Workshops & Courses', href: BOOKINGS_URL, icon: 'tools', external: true },
		{ label: 'Events', href: '/upcoming-events', icon: 'calendar' },
		{ label: 'Contact Us', href: '/contact', icon: 'mail' }
	];
</script>

<nav class="fixed top-0 left-0 right-0 z-50">
	<div class="mx-4 mt-4">
		<div class="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-3">
			<div class="flex items-center justify-between max-w-7xl mx-auto">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-2">
					<img src="/images/hustlehive-logo.png" alt="Hustle Hive" class="h-10" />
					<img src="/images/logo-title.png" alt="" class="h-6 lg:hidden" />
				</a>

				<!-- Navigation Links -->
				<div class="hidden lg:flex items-center gap-8">
					<a href="/about" class="text-brand-orange hover:text-white transition-colors duration-200 font-medium">
						About
					</a>
					<a href="/programmes" class="text-brand-orange hover:text-white transition-colors duration-200 font-medium">
						Programmes
					</a>
					<a href={LEARNING_URL} target="_blank" rel="noopener noreferrer" class="text-brand-orange hover:text-white transition-colors duration-200 font-medium">
						Alternative Provision
					</a>
					<a href={BOOKINGS_URL} target="_blank" rel="noopener noreferrer" class="text-brand-orange hover:text-white transition-colors duration-200 font-medium">
						Workshops
					</a>
					<a href="/upcoming-events" class="text-brand-orange hover:text-white transition-colors duration-200 font-medium">
						Events
					</a>
					<a href="/contact" class="text-brand-orange hover:text-white transition-colors duration-200 font-medium">
						Contact
					</a>
				</div>

				<!-- CTA Button -->
				<a
					href="/contact"
					class="hidden lg:block px-5 py-2 bg-brand-orange text-black font-semibold rounded-lg hover:bg-brand-orange-dark transition-colors duration-200"
				>
					Get Involved
				</a>

				<!-- Mobile Menu Button -->
				<button
					class="lg:hidden text-brand-orange p-2"
					aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
					onclick={toggleMenu}
				>
					{#if mobileMenuOpen}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>
</nav>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
	<div class="fixed inset-0 z-40 lg:hidden overflow-y-auto">
		<!-- Backdrop -->
		<button
			transition:fade={{ duration: 250, easing: cubicOut }}
			class="absolute inset-0 bg-black/80 backdrop-blur-sm"
			onclick={closeMenu}
			aria-label="Close menu"
		></button>

		<!-- Menu Panel -->
		<div
			transition:fly={{ y: -30, duration: 300, easing: cubicOut }}
			class="absolute inset-x-0 top-0 min-h-screen bg-gradient-to-b from-stone-900 via-stone-950 to-black pt-24 pb-12 px-6"
		>
			<!-- Menu Items -->
			<div class="space-y-2">
				{#each menuItems as item}
					<a
						href={item.href}
						target={item.external ? '_blank' : undefined}
						rel={item.external ? 'noopener noreferrer' : undefined}
						onclick={closeMenu}
						class="flex items-center gap-4 px-4 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
					>
						<!-- Icon -->
						<div class="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center">
							{#if item.icon === 'info'}
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							{:else if item.icon === 'book'}
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							{:else if item.icon === 'graduation'}
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
								</svg>
							{:else if item.icon === 'tools'}
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437" />
								</svg>
							{:else if item.icon === 'calendar'}
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							{:else if item.icon === 'mail'}
								<svg class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							{/if}
						</div>

						<!-- Label -->
						<span class="text-xl font-semibold text-white">{item.label}</span>

						<!-- Arrow -->
						{#if item.external}
							<svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						{:else}
							<svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						{/if}
					</a>
				{/each}
			</div>

			<!-- CTA Button -->
			<div class="mt-8">
				<a
					href="/contact"
					onclick={closeMenu}
					class="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-bold rounded-xl transition-colors duration-200 text-lg"
				>
					Get Involved
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>

			<!-- Logo at bottom -->
			<div class="absolute bottom-12 left-0 right-0 flex justify-center opacity-30 pointer-events-none [@media(max-height:860px)]:hidden">
				<img src="/images/hustlehive-logo.png" alt="" class="h-20" />
			</div>
		</div>
	</div>
{/if}
