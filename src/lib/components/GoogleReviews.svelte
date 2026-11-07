<script lang="ts">
	// Google reviews, shown with the WeWidget embed (https://app.wewidget.app).
	// The widget script is only loaded on pages that show this section, once per visit. It watches the
	// page for embed divs, so it also picks this one up after SvelteKit client-side navigation.
	import { onMount } from 'svelte';

	const WIDGET_ID = '062123cd-6a5f-451e-a8fd-909a641356ca';
	const SCRIPT_SRC = 'https://app.wewidget.app/widget.js';

	onMount(() => {
		if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
		const script = document.createElement('script');
		script.src = SCRIPT_SRC;
		script.async = true;
		script.dataset.widgetId = WIDGET_ID;
		document.body.appendChild(script);
	});
</script>

<section id="reviews" class="py-16 md:py-20 bg-stone-950 scroll-mt-24" aria-labelledby="reviews-heading">
	<div class="max-w-6xl mx-auto px-4">
		<h2 id="reviews-heading" class="text-3xl md:text-4xl font-bold text-white text-center mb-3">What people say about us</h2>
		<p class="text-gray-300 text-lg text-center mb-8">Reviews from families and young people on Google.</p>
		<div data-review-widget={WIDGET_ID}></div>
	</div>
</section>
