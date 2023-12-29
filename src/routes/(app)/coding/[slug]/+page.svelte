<script>
	import { ArrowUturnLeft } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	import { Button } from 'flowbite-svelte';

	export let data;
</script>

<div class="justify-start flex-auto align-top">
	<Button pill color="dark" class="space-x-3 align-top" href="/coding">
		<Icon src={ArrowUturnLeft} size="20px" theme="solid" />
		<p class="hidden md:block">All Projects</p>
	</Button>
</div>

<div class="flex-auto justify-between">
	<p
		class="align-middle justify-center text-black dark:text-white text-4xl lg:text-8xl font-semibold"
	>
		{data.project.title}
	</p>
</div>
