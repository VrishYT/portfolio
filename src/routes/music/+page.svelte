<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { Icon } from '@steeze-ui/svelte-icon';

	import { Play } from '@steeze-ui/heroicons';
	import * as fs from 'fs';

	interface musicProject {
		title: string;
		img: string;
		links: {
			spotify: string | undefined;
			soundcloud: string | undefined;
			youtube: string | undefined;
		};
		dateCreated: Date;
		tags: string[];
		visible: boolean;
	}

	const jsonString = fs.readFileSync('./src/assets/music.json', 'utf-8');
	const data = JSON.parse(jsonString);
	const projects = new Map<string, musicProject>();

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
    console.log(projects);

	function toggleMenu(id: string) {
		const { title, img, links, dateCreated, tags, visible } = data.get(id);
		data.set(id, {
			title,
			img,
			links,
			dateCreated,
			tags,
			visible: !visible
		});
	}
</script>

<div class="flex p-10 justify-center space-x-5">
	<!-- <Card img="https://i1.sndcdn.com/avatars-l6uKhpIzJC7sdu4Y-ysXDZA-t500x500.jpg">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Empty</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Lofi, Chill</p>
	</Card> -->
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
				<button on:click={() => toggleMenu(id)} class="flex rounded hover:border-gray-700">
					<Icon src={Play} size="24px" theme="solid" />
				</button>
			</div>
		</Card>
	{/each}
</div>
