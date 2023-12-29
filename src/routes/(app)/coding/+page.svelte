<script lang="ts">
	import { Card, Button, Layout } from 'flowbite-svelte';
	import type { CodingProject, TechType } from './Utils';

	export let data;

	let projects = new Map<string, CodingProject>();

	data &&
		data.projects &&
		data.projects.forEach(
			(project: {
				id: string;
				timestamp: Date;
				title: string;
				subtitle: string;
				img: string;
				desc: string;
				tags: string[];
				stack: TechType[];
			}) => {
				projects.set(project.id, {
					timestamp: project.timestamp,
					title: project.title,
					subtitle: project.subtitle,
					img: project.img,
					desc: project.desc,
					tags: project.tags,
					stack: project.stack
				});
			}
		);

	console.log(projects)
</script>

<!-- <h1 class="pt-5 pb-2 px-10 text-black dark:text-white text-2xl font-extrabold">Projects:</h1> -->
<!-- <div class="justify-items-center px-10 space-y-4 pb-10">
	<Card
		img="/src/photo/coding/tasksOnTheGo.jpg"
		horizontal
		class="bg-slate-200 dark:bg-slate-600 align-middle justify-start"
	>
		<h1 class="text-black dark:text-white font-bold text-xl">TasksOnTheGo</h1>
		<p class="text-black dark:text-white">
			A location-based reminder app, useful for remembering chores and tasks that are not time
			sensitive.
		</p>
		<Button class="align-bottom">Read More</Button>
	</Card>
	<Card
		img="/src/photo/coding/tasksOnTheGo.jpg"
		horizontal
		class="bg-slate-200 dark:bg-slate-600 align-middle justify-start"
	>
		<h1 class="">Minecraft: Star Wars</h1>
	</Card>
</div> -->

{#each [...projects] as [id, project] (id)}
	<Card
		img={project.img}
		horizontal
		class="bg-slate-200 dark:bg-slate-600 align-middle justify-start"
		rounded shadow href="/coding/{id}"
	>
		<h1 class="text-black dark:text-white font-bold text-xl">{project.title}</h1>
		<p class="text-black dark:text-white">
			{project.subtitle}
		</p>
		<Button>Read More</Button>
	</Card>
{/each}
