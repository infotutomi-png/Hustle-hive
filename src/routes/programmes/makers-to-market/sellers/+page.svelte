<script lang="ts">
	import { sellers } from '$lib/data/sellers';
</script>

<svelte:head>
	<title>Our Makers - Hustle Hive</title>
	<meta name="description" content="Meet the talented young entrepreneurs behind our Makers to Market programme. Browse their unique handmade products." />
</svelte:head>

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="flex items-center gap-3 mb-4">
			<svg class="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>
			<h1 class="text-4xl md:text-5xl font-bold text-white italic">Our Makers</h1>
		</div>
		<p class="text-lg md:text-xl text-gray-300">
			Meet the talented young entrepreneurs from our Makers to Market programme. Each maker brings their unique skills and passion to create beautiful handmade products.
		</p>
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Sellers Grid -->
	<section class="max-w-6xl mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each sellers as seller}
				<a href="/programmes/makers-to-market/sellers/{seller.id}" class="group rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-700/50 backdrop-blur-sm flex flex-col h-full hover:border-brand-orange/50 transition-colors duration-300">
					<!-- Seller Image -->
					<div class="h-56 overflow-hidden relative">
						<img
							src={seller.image}
							alt={seller.name}
							loading="lazy"
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
						<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
							<span class="inline-block px-3 py-1 bg-brand-orange/90 text-black text-sm font-medium rounded-full">
								{seller.specialty}
							</span>
						</div>
					</div>

					<!-- Seller Content -->
					<div class="p-6 bg-gradient-to-b from-stone-800/80 to-stone-900/90 flex-1 flex flex-col">
						<h2 class="text-xl font-bold text-white mb-1">
							{seller.shopName}
						</h2>
						<p class="text-brand-orange text-sm font-medium mb-3">
							by {seller.name}
						</p>
						<p class="text-gray-400 text-sm mb-4 flex-1">
							{seller.bio}
						</p>

						<div class="flex items-center justify-between mt-auto">
							<span class="text-sm text-gray-500">
								{seller.products.length} products
							</span>
							<span class="px-5 py-2 bg-stone-700/60 group-hover:bg-stone-600/60 text-white font-medium rounded-lg transition-colors duration-200 border border-stone-600/50">
								Visit Shop
							</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- Back Link -->
	<section class="max-w-6xl mx-auto px-4 mt-12">
		<a href="/programmes/makers-to-market" class="inline-flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors duration-200">
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
			</svg>
			Back to Makers to Market
		</a>
	</section>
</main>
