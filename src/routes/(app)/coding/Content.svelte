<script lang="ts">
	import { Button, Card, Gallery } from "flowbite-svelte";
	import type { CodingProject } from "./Utils";
	import Popup from './Popup.svelte';
	import { getContext } from 'svelte';
	
    export let projects: Map<string, CodingProject> = new Map();

    const { open } = getContext('simple-modal');
    const showProjectModal = (id: string) => {
		open(Popup, { project: projects.get(id) });
	};


</script>
<div class="flex p-10 justify-center">
	<Gallery class="grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
		{#each [...projects] as [id, project] (id)}
			<!-- <Button on:click={() => showProjectModal(id)} color="dark" class="p-0.5"> -->
				<Card
					img={project.img}
					horizontal
					class="relative bg-none align-middle justify-start text-left outline-2 hover:outline-black hover:dark:outline-slate-600 outline-none hover:cursor-pointer"
					rounded
					on:click={() => showProjectModal(id)}
				>
					<div class="flex-col">
						<h1 class="text-black dark:text-white font-bold text-xl">{project.title}</h1>
						<p class="text-black dark:text-white w-auto h-full">
							{project.subtitle}
						</p>
					</div>
				</Card>
			<!-- </Button> -->
		{/each}
	</Gallery>
</div>