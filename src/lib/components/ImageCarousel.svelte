<script lang="ts">
	interface Props {
		images: string[];
		alt?: string;
	}

	let { images, alt = 'Carousel image' }: Props = $props();

	let currentSlide = $state(0);
	let dragOffset = $state(0);
	let isDragging = $state(false);
	let containerWidth = $state(0);
	let sliderElement: HTMLDivElement;

	// Track drag state
	let startX = 0;
	let startY = 0;
	let startOffset = 0;

	// Touch direction detection
	type SwipeDirection = 'undecided' | 'horizontal' | 'vertical';
	let swipeDirection: SwipeDirection = 'undecided';
	const DIRECTION_THRESHOLD = 10;

	function nextSlide() {
		if (currentSlide < images.length - 1) {
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

		const maxOffset = 0;
		const minOffset = -(images.length - 1) * containerWidth;

		if (newOffset > maxOffset) {
			newOffset = maxOffset + (newOffset - maxOffset) * 0.3;
		} else if (newOffset < minOffset) {
			newOffset = minOffset + (newOffset - minOffset) * 0.3;
		}

		dragOffset = newOffset;
	}

	function handleDragEnd() {
		if (!isDragging) return;
		isDragging = false;

		const currentPosition = -currentSlide * containerWidth;
		const dragDistance = dragOffset - currentPosition;
		const threshold = containerWidth * 0.2;

		if (dragDistance > threshold && currentSlide > 0) {
			currentSlide--;
		} else if (dragDistance < -threshold && currentSlide < images.length - 1) {
			currentSlide++;
		}

		dragOffset = -currentSlide * containerWidth;
	}

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

		if (swipeDirection === 'undecided') {
			if (deltaX > DIRECTION_THRESHOLD || deltaY > DIRECTION_THRESHOLD) {
				swipeDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
			}
		}

		if (swipeDirection === 'horizontal') {
			e.preventDefault();
			handleDragMove(touch.clientX);
		} else if (swipeDirection === 'vertical') {
			const scrollDelta = lastTouchY - touch.clientY;
			window.scrollBy(0, scrollDelta);
			lastTouchY = touch.clientY;
		}
	}

	function onTouchEnd() {
		if (swipeDirection === 'horizontal') {
			handleDragEnd();
		} else {
			isDragging = false;
		}
		swipeDirection = 'undecided';
	}

	$effect(() => {
		if (sliderElement) {
			const updateWidth = () => {
				containerWidth = sliderElement.offsetWidth;
				dragOffset = -currentSlide * containerWidth;
			};

			updateWidth();
			window.addEventListener('resize', updateWidth);

			return () => {
				window.removeEventListener('resize', updateWidth);
			};
		}
	});

	$effect(() => {
		if (!isDragging && containerWidth > 0) {
			dragOffset = -currentSlide * containerWidth;
		}
	});

	let transform = $derived(
		isDragging
			? `translateX(${dragOffset}px)`
			: `translateX(${-currentSlide * containerWidth}px)`
	);
</script>

<div class="relative rounded-2xl border-4 border-stone-600/30 shadow-2xl overflow-visible">
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
				style="transform: {transform}; width: {images.length * 100}%;"
			>
				{#each images as image, index}
					<div
						class="relative flex-shrink-0 h-full"
						style="width: {100 / images.length}%;"
					>
						<img
							src={image}
							alt="{alt} {index + 1}"
							loading="lazy"
							class="w-full h-full object-cover select-none pointer-events-none"
							draggable="false"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Previous Arrow -->
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

	<!-- Next Arrow -->
	<button
		onclick={nextSlide}
		class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed"
		aria-label="Next slide"
		disabled={currentSlide === images.length - 1}
	>
		<svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>
</div>

<!-- Dot Indicators -->
<!-- Each button is 36px square so it's easy to tap; the visible dot inside stays small -->
<div class="flex items-center justify-center mt-3">
	{#each images as _, index}
		<button
			onclick={() => goToSlide(index)}
			class="w-9 h-9 flex items-center justify-center"
			aria-label="Go to slide {index + 1}"
			aria-current={currentSlide === index ? 'true' : undefined}
		>
			<span
				class="w-3 h-3 rounded-full transition-colors duration-200"
				class:bg-brand-orange={currentSlide === index}
				class:bg-stone-600={currentSlide !== index}
			></span>
		</button>
	{/each}
</div>
