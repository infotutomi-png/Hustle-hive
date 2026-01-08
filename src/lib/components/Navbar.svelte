<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

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
					<img src="/images/logo-title.png" alt="" class="h-6 md:hidden" />
				</a>

				<!-- Navigation Links -->
				<div class="hidden md:flex items-center gap-8">
					<a href="/about" class="text-brand-orange hover:text-white transition-colors duration-200 font-medium">
						About
					</a>
					<a href="/programmes" class="text-brand-orange hover:text-white transition-colors duration-200 font-medium">
						Programmes
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
					class="hidden md:block px-5 py-2 bg-brand-orange text-black font-semibold rounded-lg hover:bg-brand-orange-dark transition-colors duration-200"
				>
					Get Involved
				</a>

				<!-- Mobile Menu Button -->
				<button
					class="md:hidden text-brand-orange p-2"
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
	<div class="fixed inset-0 z-40 md:hidden">
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
			class="absolute inset-x-0 top-0 min-h-screen bg-gradient-to-b from-stone-900 via-stone-950 to-black pt-24 px-6"
		>
			<!-- Menu Items -->
			<div class="space-y-2">
				{#each menuItems as item}
					<a
						href={item.href}
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
						<svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
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
			<div class="absolute bottom-12 left-0 right-0 flex justify-center opacity-30">
				<img src="/images/hustlehive-logo.png" alt="" class="h-20" />
			</div>
		</div>
	</div>
{/if}
