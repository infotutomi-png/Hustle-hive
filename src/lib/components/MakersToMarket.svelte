<script lang="ts">
	// Makers to Market feature section
	import home from '$lib/content/home.json';

	const content = home.makersToMarket;
	let currentSlide = $state(0);
	let dragOffset = $state(0);
	let isDragging = $state(false);
	let containerWidth = $state(0);
	let sliderElement: HTMLDivElement;

	const slides = content.slides.map((s) => s.image);

	// Track drag state
	let startX = 0;
	let startY = 0;
	let startOffset = 0;

	// Touch direction detection
	type SwipeDirection = 'undecided' | 'horizontal' | 'vertical';
	let swipeDirection: SwipeDirection = 'undecided';
	const DIRECTION_THRESHOLD = 10; // pixels before we decide direction

	function nextSlide() {
		if (currentSlide < slides.length - 1) {
			currentSlide++;
		}
	}

	function prevSlide() {
		if (currentSlide > 0) {
			currentSlide--;
		}
	}

	function goToSlide(index: number) {
		currentSlide = index;
		dragOffset = 0;
	}

	function handleDragStart(clientX: number) {
		isDragging = true;
		startX = clientX;
		startOffset = dragOffset;
	}

	function handleDragMove(clientX: number) {
		if (!isDragging) return;

		const diff = clientX - startX;
		let newOffset = startOffset + diff;

		// Add resistance at edges (elastic effect)
		const maxOffset = 0;
		const minOffset = -(slides.length - 1) * containerWidth;

		if (newOffset > maxOffset) {
			// Pulling past first slide - add resistance
			newOffset = maxOffset + (newOffset - maxOffset) * 0.3;
		} else if (newOffset < minOffset) {
			// Pulling past last slide - add resistance
			newOffset = minOffset + (newOffset - minOffset) * 0.3;
		}

		dragOffset = newOffset;
	}

	function handleDragEnd() {
		if (!isDragging) return;
		isDragging = false;

		// Calculate which slide to snap to based on drag distance and velocity
		const currentPosition = -currentSlide * containerWidth;
		const dragDistance = dragOffset - currentPosition;
		const threshold = containerWidth * 0.2; // 20% threshold to change slide

		if (dragDistance > threshold && currentSlide > 0) {
			// Swiped right - go to previous slide
			currentSlide--;
		} else if (dragDistance < -threshold && currentSlide < slides.length - 1) {
			// Swiped left - go to next slide
			currentSlide++;
		}

		// Snap to current slide
		dragOffset = -currentSlide * containerWidth;
	}

	// Mouse events
	function onMouseDown(e: MouseEvent) {
		e.preventDefault();
		handleDragStart(e.clientX);
	}

	function onMouseMove(e: MouseEvent) {
		handleDragMove(e.clientX);
	}

	function onMouseUp() {
		handleDragEnd();
	}

	function onMouseLeave() {
		if (isDragging) {
			handleDragEnd();
		}
	}

	// Touch events
	let lastTouchY = 0;

	function onTouchStart(e: TouchEvent) {
		const touch = e.touches[0];
		startX = touch.clientX;
		startY = touch.clientY;
		lastTouchY = touch.clientY;
		swipeDirection = 'undecided';
		handleDragStart(touch.clientX);
	}

	function onTouchMove(e: TouchEvent) {
		const touch = e.touches[0];
		const deltaX = Math.abs(touch.clientX - startX);
		const deltaY = Math.abs(touch.clientY - startY);

		// Decide direction if we haven't yet
		if (swipeDirection === 'undecided') {
			if (deltaX > DIRECTION_THRESHOLD || deltaY > DIRECTION_THRESHOLD) {
				swipeDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
			}
		}

		if (swipeDirection === 'horizontal') {
			// Horizontal swipe - handle carousel, prevent page scroll
			e.preventDefault();
			handleDragMove(touch.clientX);
		} else if (swipeDirection === 'vertical') {
			// Vertical swipe - scroll the page manually since touch-action is none
			const scrollDelta = lastTouchY - touch.clientY;
			window.scrollBy(0, scrollDelta);
			lastTouchY = touch.clientY;
		}
		// If undecided, don't do anything yet - wait for more movement
	}

	function onTouchEnd() {
		if (swipeDirection === 'horizontal') {
			handleDragEnd();
		} else {
			// Reset drag state without snapping
			isDragging = false;
		}
		swipeDirection = 'undecided';
	}

	// Update container width on mount and resize
	$effect(() => {
		if (sliderElement) {
			const updateWidth = () => {
				containerWidth = sliderElement.offsetWidth;
				// Reset offset when width changes
				dragOffset = -currentSlide * containerWidth;
			};

			updateWidth();
			window.addEventListener('resize', updateWidth);

			return () => {
				window.removeEventListener('resize', updateWidth);
			};
		}
	});

	// Sync dragOffset when currentSlide changes (from arrow buttons)
	$effect(() => {
		if (!isDragging && containerWidth > 0) {
			dragOffset = -currentSlide * containerWidth;
		}
	});

	// Calculate transform
	let transform = $derived(
		isDragging
			? `translateX(${dragOffset}px)`
			: `translateX(${-currentSlide * containerWidth}px)`
	);
</script>

<section id="makers-to-market" class="relative py-20 overflow-hidden scroll-mt-20">
	<!-- Smokey/Textured Background -->
	<div class="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
		<!-- Texture overlay -->
		<div class="absolute inset-0 opacity-30" style="background-image: url('/images/texture-dark.jpg'); background-size: cover; background-position: center;"></div>
		<!-- Gradient overlays for depth -->
		<div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
	</div>

	<div class="relative z-10 max-w-4xl mx-auto px-4">
		<!-- Section Header -->
		<div class="text-center mb-8">
			<div class="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-4">
				<!-- Shopping cart icon in hexagon -->
				<div class="w-14 h-14 md:w-16 md:h-16 bg-brand-orange flex items-center justify-center flex-shrink-0" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">
					<svg class="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
				</div>
				<h2 class="text-3xl md:text-5xl font-bold text-white italic">
					{content.heading}
				</h2>
			</div>

			<p class="text-xl text-gray-300 italic mb-6">
				{content.tagline}
			</p>

			<p class="text-gray-300 max-w-2xl mx-auto leading-relaxed">
				{content.description}
			</p>
		</div>

		<!-- Image Carousel -->
		<div class="mt-10 mb-8 px-6 md:px-8">
			<!-- Main Image Container with arrows ON the border -->
			<div class="relative rounded-2xl border-4 border-stone-600/30 shadow-2xl overflow-visible">
				<!-- Image wrapper with overflow hidden for the image only -->
				<div
					bind:this={sliderElement}
					class="rounded-xl overflow-hidden cursor-grab active:cursor-grabbing"
					style="touch-action: none;"
					role="region"
					aria-label="Image carousel"
					onmousedown={onMouseDown}
					onmousemove={onMouseMove}
					onmouseup={onMouseUp}
					onmouseleave={onMouseLeave}
					ontouchstart={onTouchStart}
					ontouchmove={onTouchMove}
					ontouchend={onTouchEnd}
				>
					<div class="aspect-[4/3] md:aspect-[16/10] relative">
						<div
							class="absolute inset-0 flex"
							class:transition-transform={!isDragging}
							class:duration-300={!isDragging}
							class:ease-out={!isDragging}
							style="transform: {transform}; width: {slides.length * 100}%;"
						>
							{#each slides as slide, index}
								<div
									class="relative flex-shrink-0 h-full"
									style="width: {100 / slides.length}%;"
								>
									<img
										src={slide}
										alt="Makers to Market programme image {index + 1}"
										loading="lazy"
										class="w-full h-full object-cover select-none pointer-events-none"
										draggable="false"
									/>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Previous Arrow - ON the left border -->
				<button
					onclick={prevSlide}
					class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed"
					aria-label="Previous slide"
					disabled={currentSlide === 0}
				>
					<svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<!-- Next Arrow - ON the right border -->
				<button
					onclick={nextSlide}
					class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed"
					aria-label="Next slide"
					disabled={currentSlide === slides.length - 1}
				>
					<svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			<!-- Dot Indicators -->
			<div class="flex items-center justify-center gap-2 mt-6">
				{#each slides as _, index}
					<button
						onclick={() => goToSlide(index)}
						class="w-3 h-3 rounded-full transition-colors duration-200"
						class:bg-brand-orange={currentSlide === index}
						class:bg-stone-600={currentSlide !== index}
						aria-label="Go to slide {index + 1}"
					></button>
				{/each}
			</div>
		</div>

		<!-- CTA Button -->
		<div class="text-center">
			<a
				href={content.ctaHref}
				class="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
			>
				{content.ctaLabel}
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</div>
</section>
