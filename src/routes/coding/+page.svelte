<script lang="ts">
	import { Card, Button, Layout } from 'flowbite-svelte';
</script>

<div class="bg-white dark:bg-slate-900 relative w-full h-full">
	<Layout gap={6} cols="grid-cols-1 sm:grid-cols-3">
		<div class="col-span-2">
			<h1 class="pt-5 pb-2 px-10 text-black dark:text-white text-2xl font-extrabold">
				Recent Projects:
			</h1>
			<div class="justify-items-center px-10 space-y-4 pb-10">
				<Card
					img="/src/photo/coding/tasksOnTheGo.jpg"
					horizontal
					class="bg-slate-200 dark:bg-slate-600 align-middle justify-start"
				>
					<div class="align-top">
						<h1 class="text-black dark:text-white font-bold text-xl">TasksOnTheGo</h1>
						<p class="text-black dark:text-white">
							A location-based reminder app, useful for remembering chores and tasks that are not
							time sensitive.
						</p>
					</div>
					<div class="align-top justify-items-center">
						<Button class="align-bottom">Read More</Button>
					</div>
				</Card>
				<Card
					img="/src/photo/coding/tasksOnTheGo.jpg"
					horizontal
					class="bg-slate-200 dark:bg-slate-600 align-middle justify-start"
				>
					<h1 class="">Minecraft: Star Wars</h1>
				</Card>
			</div>
		</div>
		<div class="col-span-1">
			<h1 class="pt-5 pb-2 px-10 text-black dark:text-white text-2xl font-extrabold">
				Booking Form:
			</h1>
		</div>
	</Layout>
</div>
