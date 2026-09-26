<script lang="ts">
	import { page } from '$app/state';
	import { getSellerById } from '$lib/data/sellers';

	const seller = $derived(getSellerById(page.params.sellerId ?? ''));
	const product = $derived(seller?.products.find(p => p.id === page.params.productId));
</script>

<svelte:head>
	{#if seller && product}
		<title>{product.name} - {seller.shopName} | Hustle Hive</title>
		<meta name="description" content="{product.description} Handmade by {seller.name}." />
	{:else}
		<title>Product Not Found - Hustle Hive</title>
	{/if}
</svelte:head>

<main class="bg-black min-h-screen pt-32 pb-20">
	{#if seller && product}
		<!-- Back Link -->
		<section class="max-w-6xl mx-auto px-4 mb-8">
			<a href="/programmes/makers-to-market/sellers/{seller.id}" class="inline-flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors duration-200">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
				</svg>
				Back to {seller.shopName}
			</a>
		</section>

		<!-- Product Detail -->
		<section class="max-w-6xl mx-auto px-4">
			<div class="grid md:grid-cols-2 gap-8 md:gap-12">
				<!-- Product Image -->
				<div class="rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-700/50">
					<img
						src={product.imageLarge}
						alt={product.name}
						class="w-full h-80 md:h-[500px] object-cover"
					/>
				</div>

				<!-- Product Info -->
				<div class="flex flex-col">
					<span class="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange text-sm font-medium rounded-full mb-4 w-fit">
						{seller.specialty}
					</span>

					<h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
						{product.name}
					</h1>

					<p class="text-2xl md:text-3xl font-bold text-brand-orange mb-6">
						£{product.price.toFixed(2)}
					</p>

					<p class="text-gray-300 text-lg mb-8">
						{product.description}
					</p>

					<!-- Product Details -->
					<div class="mb-8">
						<h2 class="text-lg font-semibold text-white mb-3">Details</h2>
						<ul class="space-y-2">
							{#each product.details as detail}
								<li class="flex items-center gap-2 text-gray-400">
									<svg class="w-4 h-4 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									{detail}
								</li>
							{/each}
						</ul>
					</div>

					<!-- Seller Info -->
					<div class="rounded-xl bg-stone-900/50 border border-stone-700/50 p-4 mb-8">
						<div class="flex items-center gap-4">
							<img
								src={seller.image}
								alt={seller.name}
								class="w-12 h-12 rounded-full object-cover"
							/>
							<div>
								<p class="text-white font-medium">Made by {seller.name}</p>
								<a href="/programmes/makers-to-market/sellers/{seller.id}" class="text-brand-orange text-sm hover:underline">
									Visit {seller.shopName}
								</a>
							</div>
						</div>
					</div>

					<!-- Buy Button -->
					<button
						class="w-full py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-lg"
					>
						Add to Cart
					</button>

					<p class="text-gray-500 text-sm text-center mt-4">
						Secure checkout coming soon
					</p>
				</div>
			</div>
		</section>
	{:else}
		<!-- Not Found -->
		<section class="max-w-6xl mx-auto px-4 text-center">
			<svg class="w-16 h-16 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<h1 class="text-3xl font-bold text-white mb-4">Product Not Found</h1>
			<p class="text-gray-400 mb-8">
				We couldn't find the product you're looking for.
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
