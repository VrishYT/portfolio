<script>

	import { DarkMode } from "flowbite-svelte";

</script>
<div
	class="flex flex-col
bg-gradient-to-br
from-white via-slate-200 to-slate-600
dark:from-black dark:via-slate-800 dark:to-slate-700
bg-animate min-h-screen h-max w-screen"
>
	<DarkMode class="absolute bottom-0 left-0 p-4"/>
	<slot />
</div>



<style>
	.bg-animate {
		background-size: 400%;

		-webkit-animation: AnimationName 10s ease infinite;
		-moz-animation: AnimationName 10s ease infinite;
		animation: AnimationName 10s ease infinite;
	}
</style>