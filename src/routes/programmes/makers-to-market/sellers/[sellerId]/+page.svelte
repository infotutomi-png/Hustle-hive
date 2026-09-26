<script lang="ts">
	import { page } from '$app/state';
	import { getSellerById } from '$lib/data/sellers';

	const seller = $derived(getSellerById(page.params.sellerId ?? ''));
</script>

<svelte:head>
	{#if seller}
		<title>{seller.shopName} - Hustle Hive</title>
		<meta name="description" content="Shop handmade {seller.specialty.toLowerCase()} from {seller.name}. {seller.bio}" />
	{:else}
		<title>Seller Not Found - Hustle Hive</title>
	{/if}
</svelte:head>

<main class="bg-black min-h-screen pt-32 pb-20">
	{#if seller}
		<!-- Back Link -->
		<section class="max-w-6xl mx-auto px-4 mb-8">
			<a href="/programmes/makers-to-market/sellers" class="inline-flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors duration-200">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
				</svg>
				Back to Our Makers
			</a>
		</section>

		<!-- Seller Profile -->
		<section class="max-w-6xl mx-auto px-4 mb-12">
			<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-6 md:p-8">
				<div class="flex flex-col md:flex-row gap-6 items-start">
					<!-- Seller Image -->
					<div class="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0">
						<img
							src={seller.image}
							alt={seller.name}
							class="w-full h-full object-cover"
						/>
					</div>

					<!-- Seller Info -->
					<div class="flex-1">
						<span class="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange text-sm font-medium rounded-full mb-3">
							{seller.specialty}
						</span>
						<h1 class="text-3xl md:text-4xl font-bold text-white italic mb-2">
							{seller.shopName}
						</h1>
						<p class="text-lg text-brand-orange font-medium mb-4">
							by {seller.name}
						</p>
						<p class="text-gray-300 max-w-2xl">
							{seller.bio}
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Divider -->
		<div class="max-w-6xl mx-auto px-4">
			<div class="border-t border-stone-700/50 mb-12"></div>
		</div>

		<!-- Products Header -->
		<section class="max-w-6xl mx-auto px-4 mb-8">
			<h2 class="text-2xl md:text-3xl font-bold text-white">
				Products by {seller.name}
			</h2>
			<p class="text-gray-400 mt-2">
				{seller.products.length} handmade {seller.products.length === 1 ? 'item' : 'items'} available
			</p>
		</section>

		<!-- Product Grid -->
		<section class="max-w-6xl mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each seller.products as product}
					<a href="/programmes/makers-to-market/sellers/{seller.id}/{product.id}" class="group rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-700/50 backdrop-blur-sm flex flex-col h-full hover:border-brand-orange/50 transition-colors duration-300">
						<!-- Product Image -->
						<div class="h-56 overflow-hidden">
							<img
								src={product.image}
								alt={product.name}
								loading="lazy"
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							/>
						</div>

						<!-- Product Content -->
						<div class="p-6 bg-gradient-to-b from-stone-800/80 to-stone-900/90 flex-1 flex flex-col">
							<h3 class="text-xl font-bold text-white mb-2">
								{product.name}
							</h3>
							<p class="text-gray-400 text-sm mb-4 flex-1">
								{product.description}
							</p>

							<div class="flex items-center justify-between mt-auto">
								<span class="text-2xl font-bold text-brand-orange">
									£{product.price.toFixed(2)}
								</span>
								<span class="px-5 py-2 bg-brand-orange hover:bg-brand-orange-dark text-black font-medium rounded-lg transition-colors duration-200">
									View Details
								</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</section>

		<!-- Info Banner -->
		<section class="max-w-6xl mx-auto px-4 mt-16">
			<div class="rounded-2xl bg-stone-900/50 border border-stone-700/50 p-8 text-center">
				<svg class="w-12 h-12 text-brand-orange mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
				</svg>
				<h3 class="text-xl font-bold text-white mb-2">Supporting {seller.name}</h3>
				<p class="text-gray-300 max-w-2xl mx-auto">
					{seller.name} is part of our Makers to Market programme. Your purchase directly supports their entrepreneurial journey and helps fund future workshops.
				</p>
			</div>
		</section>
	{:else}
		<!-- Not Found -->
		<section class="max-w-6xl mx-auto px-4 text-center">
			<svg class="w-16 h-16 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<h1 class="text-3xl font-bold text-white mb-4">Seller Not Found</h1>
			<p class="text-gray-400 mb-8">
				We couldn't find the seller you're looking for.
			</p>
			<a href="/programmes/makers-to-market/sellers" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
				</svg>
				Browse All Makers
			</a>
		</section>
	{/if}
</main>
