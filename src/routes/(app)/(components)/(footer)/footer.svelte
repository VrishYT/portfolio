<script lang="ts">
	import { Footer, FooterCopyright } from 'flowbite-svelte';
	import Socials from './socials.svelte';
	import Buttons from './buttons.svelte';
	import Toast from './toast.svelte';
</script>

<div>
	<Toast />
	<Footer footerType="socialmedia">
		<div class="md:flex md:justify-center" />
		<!-- <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> -->
		<div class="flex items-center justify-between">
			<FooterCopyright href="/" by="Vrish" />
			<Buttons />
			<Socials />
		</div>
	</Footer>
</div>
