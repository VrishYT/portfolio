<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { Icon } from '@steeze-ui/svelte-icon';

	import { Play } from '@steeze-ui/heroicons';
	import { MusicProjectType, type MusicProject } from './Utils';

	export let data;

	let projects = new Map<string, MusicProject>();

	data &&
		data.projects &&
		data.projects.forEach(
			(project: {
				id: string;
				title: string;
				img: string;
				links: any;
				created_at: string;
				tags: string[];
				type: string;
			}) => {
				projects.set(project.title.toLowerCase(), {
					title: project.title,
					img: project.img,
					links: project.links,
					dateCreated: new Date(project.created_at),
					tags: project.tags,
					visible: false,
					type: project.type as MusicProjectType
				});
			}
		);
</script>

<div class="flex p-10 justify-center space-x-5">
	{#each [...projects] as [id, { title, img, links, dateCreated, tags, visible, type }] (id)}
		<Card {img} class="w-80" rounded shadow href="/music/{id}">
			<div class="flex flex-row justify-between pb-2">
				<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p class="text-base font-mono tracking-tight text-gray-500">
					{dateCreated.toLocaleDateString()}
				</p>
			</div>
			<div class="flex justify-between max-h-8">
				<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
					{tags.map(tag => `#${tag}`).join(" ")}
				</p>
				<p class="font-semibold text-lg text-right">{MusicProjectType[type]}</p>
			</div>
		</Card>
	{/each}
</div>
