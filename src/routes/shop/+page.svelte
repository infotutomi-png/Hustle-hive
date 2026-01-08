<script lang="ts">
	import { products } from '$lib/data/products';
</script>

<svelte:head>
	<title>Shop - Hustle Hive</title>
	<meta name="description" content="Shop handmade products created by Hustle Hive students. Support young makers and entrepreneurs." />
</svelte:head>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-white italic mb-4">Student Marketplace</h1>
		<p class="text-lg md:text-xl text-gray-300">
			Handmade with care by our talented young makers. Every purchase supports their journey.
		</p>
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Product Grid -->
	<section class="max-w-6xl mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each products as product}
				<a href="/shop/{product.id}" class="group rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-700/50 backdrop-blur-sm flex flex-col h-full hover:border-brand-orange/50 transition-colors duration-300">
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
						<h2 class="text-xl font-bold text-white mb-1">
							{product.name}
						</h2>
						<p class="text-gray-400 text-sm mb-4">
							Made by {product.maker}
						</p>

						<div class="mt-auto flex items-center justify-between">
							<span class="text-2xl font-bold text-brand-orange">
								£{product.price.toFixed(2)}
							</span>
							<span class="px-5 py-2 bg-stone-700/60 group-hover:bg-stone-600/60 text-white font-medium rounded-lg transition-colors duration-200 border border-stone-600/50">
								View Product
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
			<h3 class="text-xl font-bold text-white mb-2">Supporting Young Entrepreneurs</h3>
			<p class="text-gray-300 max-w-2xl mx-auto">
				All products are handmade by students in our Makers to Market programme.
				Your purchase directly supports their entrepreneurial journey and helps fund future workshops.
			</p>
		</div>
	</section>
</main>
