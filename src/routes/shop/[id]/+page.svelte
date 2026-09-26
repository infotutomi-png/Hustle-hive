<script lang="ts">
	import { page } from '$app/state';
	import { getProductById } from '$lib/data/products';

	const product = $derived(getProductById(page.params.id ?? ''));
</script>

<svelte:head>
	<title>{product ? product.name : 'Product Not Found'} - Hustle Hive Shop</title>
	<meta name="description" content={product ? product.description : 'Product not found'} />
</svelte:head>

<main class="bg-black min-h-screen pt-32 pb-20">
	{#if product}
		<div class="max-w-6xl mx-auto px-4">
			<!-- Back Link -->
			<a href="/shop" class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Back to Shop
			</a>

			<!-- Product Layout -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<!-- Product Image -->
				<div class="rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-700/50">
					<img
						src={product.imageLarge}
						alt={product.name}
						class="w-full h-full object-cover aspect-[4/3]"
					/>
				</div>

				<!-- Product Info -->
				<div class="flex flex-col">
					<h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
						{product.name}
					</h1>
					<p class="text-gray-400 mb-6">
						Made by {product.maker}
					</p>

					<p class="text-gray-300 text-lg mb-8">
						{product.description}
					</p>

					<!-- Product Details -->
					<div class="mb-8">
						<h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Details</h3>
						<ul class="space-y-2">
							{#each product.details as detail}
								<li class="flex items-center gap-2 text-gray-300">
									<svg class="w-4 h-4 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									{detail}
								</li>
							{/each}
						</ul>
					</div>

					<!-- Price & Buy -->
					<div class="mt-auto pt-8 border-t border-stone-700/50">
						<div class="flex items-center justify-between flex-wrap gap-4">
							<span class="text-3xl font-bold text-brand-orange">
								£{product.price.toFixed(2)}
							</span>
							<button
								class="px-8 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-lg"
								onclick={() => alert('Stripe checkout coming soon!')}
							>
								Buy Now
							</button>
						</div>
						<p class="text-gray-500 text-sm mt-4">
							Free UK shipping on all orders
						</p>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<!-- Product Not Found -->
		<div class="max-w-6xl mx-auto px-4 text-center">
			<h1 class="text-3xl font-bold text-white mb-4">Product Not Found</h1>
			<p class="text-gray-400 mb-8">Sorry, we couldn't find that product.</p>
			<a href="/shop" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors">
				Back to Shop
			</a>
		</div>
	{/if}
</main>
