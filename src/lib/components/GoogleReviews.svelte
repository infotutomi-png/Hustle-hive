<script lang="ts">
	// Google reviews, shown with the WeWidget embed (https://app.wewidget.app).
	// The widget script is only loaded on pages that show this section, once per visit. It watches the
	// page for embed divs, so it also picks this one up after SvelteKit client-side navigation.
	// The section stays hidden until the widget has actually rendered review cards, so visitors never
	// see an empty "No reviews to display yet" box.
	import { onMount } from 'svelte';

	const WIDGET_ID = '062123cd-6a5f-451e-a8fd-909a641356ca';
	const SCRIPT_SRC = 'https://app.wewidget.app/widget.js';

	let embed: HTMLDivElement;
	let hasReviews = $state(false);

	onMount(() => {
		if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
			const script = document.createElement('script');
			script.src = SCRIPT_SRC;
			script.async = true;
			script.dataset.widgetId = WIDGET_ID;
			document.body.appendChild(script);
		}

		// Check for rendered review cards (inside the widget's shadow root) for up to 20 seconds.
		let tries = 0;
		const timer = setInterval(() => {
			if (embed?.shadowRoot?.querySelector('.rw-card')) {
				hasReviews = true;
				clearInterval(timer);
			} else if (++tries >= 40) {
				clearInterval(timer);
			}
		}, 500);
		return () => clearInterval(timer);
	});
</script>

<!-- Collapsed (not display:none) while waiting, so the widget can still measure its width -->
<section
	id="reviews"
	class="bg-stone-950 scroll-mt-24 {hasReviews ? 'py-16 md:py-20' : 'h-0 overflow-hidden'}"
	aria-labelledby="reviews-heading"
	aria-hidden={!hasReviews}
	inert={!hasReviews}
>
	<div class="max-w-6xl mx-auto px-4">
		<h2 id="reviews-heading" class="text-3xl md:text-4xl font-bold text-white text-center mb-3">What people say about us</h2>
		<p class="text-gray-300 text-lg text-center mb-8">Reviews from families and young people on Google.</p>
		<div bind:this={embed} data-review-widget={WIDGET_ID}></div>
	</div>
</section>
