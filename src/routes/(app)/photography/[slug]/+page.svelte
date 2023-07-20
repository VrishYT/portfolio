<script lang="ts">
	import { Carousel } from 'flowbite-svelte';

	export let data;
</script>

<div class="p-10 justify-center">
	{#if data.imgs.length}
		<Carousel
			images={data.imgs}
			loop
			showCaptions={false}
			showThumbs={false}
			divClass="object-contain"
			duration={5000}
		/>
	{:else}
		<div class="text-center space-y-10">
			<p
				class="align-middle justify-center text-black dark:text-white text-4xl lg:text-8xl font-semibold"
			>
				No images...
			</p>
		</div>
	{/if}
</div>
