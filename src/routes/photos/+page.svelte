<script lang="ts">
	import { SiteHeader } from '$lib/components/site';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data;

	// Array of all the uploaded photos
	const images = [
		{ src: '/photos/IMG_0776.JPEG', alt: 'Photography' },
		{ src: '/photos/IMG_3248.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_0973_01.jpg', alt: 'Photography' },
		{ src: '/photos/IMG_3114.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_1053.jpg', alt: 'Photography' },
		{ src: '/photos/IMG_2887.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_1188.JPEG', alt: 'Photography' },
		{ src: '/photos/IMG_2025.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_3028.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_2074.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_2120.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_3132.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_2257.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_2311.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_0788.JPEG', alt: 'Photography' },
		{ src: '/photos/IMG_3020.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_3105.JPG', alt: 'Photography' },
		{ src: '/photos/IMG_3283.JPG', alt: 'Photography' },
	];

	let mounted = false;
	let selectedImage: string | null = null;

	onMount(() => {
		mounted = true;
		
		// Handle escape key to close lightbox
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') selectedImage = null;
		};
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<SiteHeader title={data.title} subTitle={data.subTitle}>
	<p class="text-center text-sm text-green-700 dark:text-green-400">
		Capturing moments through my lens.
	</p>
</SiteHeader>

<section class="container mx-auto mb-16 py-8 px-4">
	{#if mounted}
		<div class="columns-1 md:columns-2 gap-6">
			{#each images as image, i}
				<button
					class="group relative block w-full mb-6 break-inside-avoid overflow-hidden rounded-xl bg-muted shadow-md transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					in:fly={{ y: 50, duration: 500, delay: i * 50 }}
					on:click={() => selectedImage = image.src}
				>
					<img
						src={image.src}
						alt={image.alt}
						class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
						loading="lazy"
					/>
					<!-- Subtle overlay on hover -->
					<div class="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
				</button>
			{/each}
		</div>
	{/if}
</section>

<!-- Lightbox Modal -->
{#if selectedImage}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-8"
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		on:click={() => selectedImage = null}
	>
		<div class="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
			<img
				src={selectedImage}
				alt="Enlarged view"
				class="max-h-full max-w-full object-contain rounded-md shadow-2xl"
				in:fly={{ y: 20, duration: 300, delay: 100 }}
				on:click|stopPropagation
			/>
			<button
				class="absolute top-0 right-0 md:-top-4 md:-right-4 text-foreground/50 hover:text-foreground bg-background/50 hover:bg-background rounded-full p-2 backdrop-blur-md transition-all"
				on:click={() => selectedImage = null}
				aria-label="Close lightbox"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>
		</div>
	</div>
{/if}
