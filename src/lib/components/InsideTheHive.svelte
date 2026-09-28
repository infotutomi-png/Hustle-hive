<script lang="ts">
	// "Inside the Hive" photo strip for the homepage.
	// Add photos in src/lib/content/inside-the-hive.json (or in the CMS) — the strip grows to fit.
	import content from '$lib/content/inside-the-hive.json';
</script>

{#if content.photos.length}
	<section class="py-16 md:py-20 bg-gradient-to-b from-stone-950 to-black">
		<div class="max-w-6xl mx-auto px-4">
			<h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-8">{content.heading}</h2>
		</div>

		<!-- Swipeable row on phones; wraps into a grid on larger screens -->
		<ul
			class="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-4 px-4 pb-2 max-w-6xl mx-auto
				md:grid md:grid-cols-5 md:overflow-visible md:snap-none"
			aria-label={content.heading}
		>
			{#each content.photos as photo}
				<li class="snap-start shrink-0 w-[70%] sm:w-[45%] md:w-auto">
					<img
						src={photo.image}
						alt={photo.alt}
						loading="lazy"
						decoding="async"
						width="400"
						height="400"
						class="w-full aspect-square object-cover rounded-xl border border-stone-700/50"
					/>
				</li>
			{/each}
		</ul>
	</section>
{/if}
