<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { BOOKINGS_URL, contactHref } from '$lib/links';

	const details = ['Ages 8–11', '£39.99 per day', 'Only 10 places per day'];

	const activities = [
		{ title: 'Create a mini brand', text: 'Invent a character, a name and a logo of your own' },
		{ title: 'Learn how brands work', text: 'What makes a good logo, how colour works, and spotting famous logos' },
		{ title: 'Make real products', text: 'Turn your design into something you can wear or use, with our printers and heat presses' },
		{ title: 'Designer showcase', text: 'Show off what you have made at the end of the day' },
		{ title: 'Something to take home', text: 'Every child leaves with something they designed and made' }
	];

	const shirts = [
		{ image: '/images/brand-lab-shirt-chillz.webp', alt: 'A finished T-shirt printed with Chillz, a fluffy blue monster in headphones and a star T-shirt' },
		{ image: '/images/brand-lab-shirt-monster.webp', alt: 'A finished T-shirt printed with a blue, green and pink three-eyed monster holding a racket' }
	];

	const sessionPhotos = [
		{ image: '/images/brand-lab-table.webp', alt: 'Children designing logos and characters round the table at Hustle HQ', width: 1400, height: 952 },
		{ image: '/images/brand-lab-smile.webp', alt: 'A smiling Brand Lab designer next to a laptop', width: 900, height: 1200 },
		{ image: '/images/brand-lab-showcase.webp', alt: 'Children watching the Hive City Fashion Week showcase on the projector screen', width: 1400, height: 1050 }
	];

	const buttonClass =
		'inline-flex items-center gap-2 px-6 sm:px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-black font-semibold rounded-lg transition-colors duration-200 text-base sm:text-lg';
</script>

<Seo
	title="Brand Lab Holiday Club for Ages 8–11 - Hustle Hive"
	description="Brand Lab is a holiday club at Hustle HQ in Darlington for ages 8–11: create your own mini brand, design products and make something to take home."
/>

{#snippet bookButton()}
	<a href={BOOKINGS_URL} target="_blank" rel="noopener noreferrer" class={buttonClass}>
		See dates &amp; book
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
		</svg>
		<span class="sr-only">(opens in a new tab)</span>
	</a>
{/snippet}

<main class="bg-black min-h-screen pt-32 pb-20">
	<!-- Header -->
	<section class="max-w-6xl mx-auto px-4 mb-12">
		<div class="flex items-center gap-3 mb-4">
			<svg class="w-10 h-10 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
			</svg>
			<h1 class="text-4xl md:text-5xl font-bold text-white italic">Brand Lab</h1>
		</div>
		<p class="text-lg md:text-xl text-gray-300 mb-6">
			Holiday club for ages 8–11: create your own mini brand, design products and make something to take home.
		</p>
		<ul class="flex flex-wrap gap-2 mb-8">
			{#each details as detail}
				<li class="px-4 py-1.5 rounded-full border border-stone-700 text-gray-200 text-sm font-medium">{detail}</li>
			{/each}
		</ul>
		{@render bookButton()}
	</section>

	<!-- Divider -->
	<div class="max-w-6xl mx-auto px-4">
		<div class="border-t border-stone-700/50 mb-12"></div>
	</div>

	<!-- Main photo -->
	<section class="max-w-4xl mx-auto px-4 mb-16">
		<img
			src="/images/brand-lab-demo.webp"
			alt="A Hustle Hive leader showing a group of children the 3D printer and heat presses under the Ideas Made Here sign"
			width="1400"
			height="1050"
			class="w-full h-auto aspect-[16/10] object-cover rounded-2xl border border-stone-700/50"
		/>
	</section>

	<div class="max-w-6xl mx-auto px-4 space-y-20">
		<!-- What happens -->
		<section aria-labelledby="what-happens">
			<h2 id="what-happens" class="text-2xl md:text-3xl font-bold text-white mb-6">What happens at Brand Lab</h2>
			<ul class="grid md:grid-cols-2 gap-4">
				{#each activities as item}
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<svg class="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-semibold">{item.title}</h3>
							<p class="text-gray-400">{item.text}</p>
						</div>
					</li>
				{/each}
			</ul>
		</section>

		<!-- From sketch to T-shirt -->
		<section aria-labelledby="sketch-to-shirt">
			<h2 id="sketch-to-shirt" class="text-2xl md:text-3xl font-bold text-white mb-3">From sketch to T-shirt</h2>
			<p class="text-gray-300 text-lg mb-8 max-w-3xl">Every design starts as a drawing. Here's where our October half-term designers began, and what their ideas became.</p>
			<img
				src="/images/brand-lab-sketches.webp"
				alt="Where it started: five hand-drawn characters by Brand Lab children, coloured in pencil"
				width="1400"
				height="788"
				loading="lazy"
				class="w-full h-auto rounded-2xl border border-stone-700/50 mb-4"
			/>
			<div class="flex items-center justify-center gap-2 text-brand-orange font-semibold my-4" aria-hidden="true">
				<span>Sketch</span>
				<svg class="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
				<span>Finished product</span>
			</div>
			<ul class="grid sm:grid-cols-2 gap-4">
				{#each shirts as shirt}
					<li class="rounded-2xl bg-white overflow-hidden border border-stone-700/50">
						<img src={shirt.image} alt={shirt.alt} width="700" height="674" loading="lazy" class="w-full h-auto" />
					</li>
				{/each}
			</ul>

			<!-- Animated advert (Cloudflare Stream). Doesn't autoplay; the poster image shows until someone presses play. -->
			<div class="mt-10">
				<h3 class="text-xl md:text-2xl font-bold text-white mb-2">Chillz, brought to life</h3>
				<p class="text-gray-300 mb-5">From a pencil drawing to a T-shirt to an animated advert.</p>
				<div class="relative w-full aspect-video rounded-2xl overflow-hidden border border-stone-700/50 bg-stone-900">
					<iframe
						src="https://customer-cclrl1ux6vgu15bo.cloudflarestream.com/1b55848a173eef5f3ec6723a519f6c13/iframe?preload=metadata&poster=https%3A%2F%2Fcustomer-cclrl1ux6vgu15bo.cloudflarestream.com%2F1b55848a173eef5f3ec6723a519f6c13%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
						title="Chillz animated advert: the Brand Lab character snowboarding through ice to a party"
						loading="lazy"
						class="absolute inset-0 w-full h-full border-0"
						allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</section>

		<!-- Session photos -->
		<section aria-labelledby="half-term">
			<h2 id="half-term" class="text-2xl md:text-3xl font-bold text-white mb-6">Brand Lab, October half term</h2>
			<ul class="grid md:grid-cols-3 gap-4">
				{#each sessionPhotos as photo}
					<li>
						<img
							src={photo.image}
							alt={photo.alt}
							width={photo.width}
							height={photo.height}
							loading="lazy"
							class="w-full aspect-[4/3] md:aspect-[3/4] object-cover rounded-2xl border border-stone-700/50"
						/>
					</li>
				{/each}
			</ul>
		</section>

		<!-- Book -->
		<section aria-labelledby="book" class="rounded-2xl bg-stone-900/50 border border-brand-orange/40 p-6 md:p-8">
			<h2 id="book" class="text-2xl md:text-3xl font-bold text-white mb-3">Book Brand Lab</h2>
			<p class="text-gray-300 text-lg mb-6 max-w-3xl">
				See the next dates and book a place on our bookings site. Can't see any dates? <a href={contactHref('holiday-clubs')} class="text-brand-orange font-semibold hover:underline">Contact us</a> and we'll let you know when the next Brand Lab is on.
			</p>
			{@render bookButton()}
		</section>
	</div>
</main>
