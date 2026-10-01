<script lang="ts">
	import {
		AP_APPROACH_URL,
		AP_SCHOOLS_URL,
		AP_URL,
		BOOKINGS_URL,
		COMMISSIONER_PACK_URL,
		COMMUNITY_URL,
		FACEBOOK_URL,
		MAKERS_URL,
		SAFEGUARDING_URL,
		company
	} from '$lib/links';

	const currentYear = new Date().getFullYear();

	type FooterLink = { label: string; href: string; external?: boolean; download?: boolean };
	const columns: { title: string; links: FooterLink[] }[] = [
		{
			title: 'About',
			links: [
				{ label: 'About Us', href: '/about' },
				{ label: 'Meet the team', href: '/about#team' },
				{ label: 'Safeguarding & policies', href: SAFEGUARDING_URL },
				{ label: 'Contact Us', href: '/contact' }
			]
		},
		{
			title: 'Community & Youth',
			links: [
				{ label: 'Community & Youth', href: COMMUNITY_URL },
				{ label: 'Makers to Market', href: MAKERS_URL },
				{ label: 'Book a course', href: BOOKINGS_URL, external: true }
			]
		},
		{
			title: 'Alternative Provision',
			links: [
				{ label: 'Our provision', href: AP_URL },
				{ label: 'Approach & curriculum', href: AP_APPROACH_URL },
				{ label: 'For schools & local authorities', href: AP_SCHOOLS_URL },
				{ label: 'Commissioner pack (PDF)', href: COMMISSIONER_PACK_URL, download: true }
			]
		}
	];
</script>

<footer class="relative bg-black border-t border-stone-800">
	<!-- Honeycomb pattern overlay -->
	<div class="absolute inset-0 opacity-5" style="background-image: url('/images/honeycomb-pattern.svg'); background-size: 60px 60px;"></div>

	<div class="relative z-10 max-w-6xl mx-auto px-6 py-16">
		<!-- Main Footer Content -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr_1.3fr] gap-10 mb-12">
			<!-- Brand Column -->
			<div>
				<a href="/" class="inline-block mb-4">
					<img src="/images/logo-full-160.webp" alt="Hustle Hive" class="h-20" />
				</a>
				<p class="text-gray-400 text-sm leading-relaxed mb-6">
					A community-powered makerspace and enterprise hub in Darlington, helping people of all ages build confidence, skills and real-world opportunities.
				</p>
				<!-- Social Icons -->
				<a
					href={FACEBOOK_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="w-10 h-10 rounded-full bg-white/5 border border-white/10 inline-flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange/50 transition-colors duration-200"
					title="Hustle Hive on Facebook"
				>
					<!-- Label as real (visually hidden) text so screen readers and page-text tools read it instead of the URL -->
					<span class="sr-only">Hustle Hive on Facebook</span>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
					</svg>
				</a>
			</div>

			<!-- Link columns -->
			{#each columns as column}
				<div>
					<h3 class="text-white font-semibold text-lg mb-4">{column.title}</h3>
					<ul class="space-y-3">
						{#each column.links as link}
							<li>
								<a
									href={link.href}
									target={link.external ? '_blank' : undefined}
									rel={link.external ? 'noopener noreferrer' : undefined}
									download={link.download ? 'Hustle-Hive-Commissioner-Pack.pdf' : undefined}
									class="inline-flex items-center gap-1.5 text-gray-400 hover:text-brand-orange transition-colors duration-200"
								>
									{link.label}
									{#if link.external}
										<svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}

			<!-- Contact -->
			<div>
				<h3 class="text-white font-semibold text-lg mb-4">Contact</h3>
				<ul class="space-y-4">
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<a href="mailto:kieron@hustlehive.co.uk" class="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">
							kieron@hustlehive.co.uk
						</a>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<a href="mailto:gavin@hustlehive.co.uk" class="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">
							gavin@hustlehive.co.uk
						</a>
					</li>
					<li class="flex items-center gap-3">
						<svg class="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
						</svg>
						<a href="tel:+447593975681" class="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">
							07593 975681
						</a>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<address class="not-italic text-gray-400 text-sm">
							{company.businessAddress}
						</address>
					</li>
				</ul>
			</div>
		</div>

		<!-- Divider -->
		<div class="border-t border-stone-800 pt-8">
			<div class="flex flex-col md:flex-row items-center justify-between gap-4">
				<p class="text-gray-400 text-sm">
					&copy; {currentYear} {company.name}. All rights reserved.
				</p>
				<div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
					<img
						src="/images/national-lottery-community-fund-digital-logo-black-background.webp"
						alt="Supported by The National Lottery Community Fund"
						class="h-16"
					/>
					<div class="flex items-center gap-6">
						<a href="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
							Privacy Policy
						</a>
						<a href="/terms" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
							Terms of Use
						</a>
					</div>
				</div>
			</div>

			<!-- Company details -->
			<p class="mt-6 text-center md:text-left text-gray-400 text-xs leading-relaxed">
				{company.name} · Company no. {company.number} · Registered office: {company.registeredOffice} · Business address: {company.businessAddress}
			</p>
		</div>
	</div>
</footer>
