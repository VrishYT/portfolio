<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Button } from 'flowbite-svelte';

	import { Home } from '@steeze-ui/heroicons';
</script>

<div class="text-center py-40 space-y-20">
	<p
		class="align-middle justify-center text-black dark:text-white text-4xl lg:text-8xl font-semibold"
	>
		This page is under construction...
	</p>
	<Button color="blue" outline pill class="text-2xl p-5 space-x-3 hidden dark:inline-flex" href="/"
		><Icon src={Home} size="36px" theme="solid" />
		<p>Home</p></Button
	>
	<Button color="dark" pill class="text-2xl p-5 space-x-3 dark:hidden" href="/"
		><Icon src={Home} size="36px" theme="solid" />
		<p>Home</p></Button
	>
</div>
