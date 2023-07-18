<script lang="ts">
	import { Carousel, CarouselTransition } from "flowbite-svelte";
	import { slide } from "svelte/transition";

	export let data;
	let images: {
		id: number;
		name: string;
		imgurl: string;
	}[] = [];

	data &&
		data.photos &&
		data.photos.forEach((photo) => {
			images = [photo, ...images];
		});

	// console.log(images);
</script>

<div class="flex p-10 justify-center">
	<Carousel {images} loop showCaptions={false} showThumbs={false} divClass="object-contain" duration={5000}/>
</div>