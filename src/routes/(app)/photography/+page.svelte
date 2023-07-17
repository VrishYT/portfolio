<script lang="ts">
	import { Gallery } from 'flowbite-svelte';

	type Image = {
		alt: string;
		src: string;
	};

	let images: Image[] = [];

	const imageModules = import.meta.glob('/src/photo/photography/*.jpg');
	for (const modulePath in imageModules) {
		imageModules[modulePath]().then(({ default: imageUrl }) => {
			const slash = modulePath.lastIndexOf('/');
			const dot = modulePath.lastIndexOf('.');
			const name = modulePath.substring(slash + 1, dot);
			console.log(`${name}: ${imageUrl}`);
			images.push({
				alt: name,
				src: imageUrl
			});
			images = images;
		});
	}
	console.log(images);
</script>

<div class='items-center p-5'>
	<Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"/>
</div>
