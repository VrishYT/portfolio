<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { Icon } from '@steeze-ui/svelte-icon';

	import { Play } from '@steeze-ui/heroicons';
	import * as fs from 'fs';
	import type { MusicProject } from './Utils';
	import { musicProjectsStore } from '../../../Store';

	const jsonString = fs.readFileSync('./src/assets/music.json', 'utf-8');
	const data = JSON.parse(jsonString);
	// export const projects = new Map<string, MusicProject>();

	let projects: Map<string, MusicProject>;
	musicProjectsStore.subscribe((data: Map<string, MusicProject>) => (projects = data));

	data.forEach(
		(project: {
			id: string;
			title: string;
			img: string;
			links: any;
			dateCreated: string;
			tags: string[];
		}) => {
			projects.set(project.id, {
				title: project.title,
				img: project.img,
				links: project.links,
				dateCreated: new Date(project.dateCreated),
				tags: project.tags,
				visible: false
			});
		}
	);
	musicProjectsStore.update(() => projects);
</script>

<div class="flex p-10 justify-center space-x-5">
	{#each [...projects] as [id, { title, img, links, dateCreated, tags, visible }] (id)}
		<Card {img}>
			<div class="flex flex-row justify-between">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p class="text-sm font-mono tracking-tight text-gray-500 align-bottom">
					{dateCreated.toLocaleDateString()}
				</p>
			</div>
			<div class="flex flex-row justify-between">
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
					{#each tags as tag}
						<a href="/music">#{tag} </a>
					{/each}
				</p>
				<Button href="/music/{id}" color="none">
					<Icon src={Play} size="24px" theme="solid" />
				</Button>
			</div>
		</Card>
	{/each}
</div>
