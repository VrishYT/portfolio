<script lang="ts">
	import {
		Footer,
		FooterCopyright,
		Toast
	} from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import Socials from './socials.svelte';
	import Buttons from './buttons.svelte';

	let successToast = false,
		failToast = false,
		toastCounter = 5;

	function successTrigger() {
		successToast = true;
		toastCounter = 5;
		toastTimer();
	}

	function failTrigger() {
		failToast = true;
		toastCounter = 5;
		toastTimer();
	}

	function toastTimer(): any {
		if (--toastCounter > 0) return setTimeout(toastTimer, 1000);
		successToast = false;
		failToast = false;
	}

	onMount(() => {
		const url = $page.url;
		const enquirySuccess = url.searchParams.get('enquirySuccess');
		console.log(enquirySuccess);
		if (enquirySuccess) enquirySuccess === 'true' ? successTrigger() : failTrigger();
	});
</script>

<div>
	<Toast
		class="fixed z-10 left-2 bottom-24 shadow-black shadow-sm"
		simple
		color="green"
		contentClass="flex space-x-4 divide-x divide-gray-200 dark:divide-gray-700"
		transition={slide}
		bind:open={successToast}
		position="none"
	>
		<svg
			aria-hidden="true"
			class="w-7 h-7"
			focusable="false"
			data-prefix="fas"
			data-icon="paper-plane"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			><path
				fill="green"
				d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
			/></svg
		>
		<div class="pl-4 text-lg font-normal justify-center align-middle text-green-500">
			Enquiry successfully sent.
		</div>
	</Toast>
	<Toast
		class="fixed z-10 left-2 bottom-24 shadow-black shadow-sm"
		simple
		color="red"
		contentClass="flex space-x-4 divide-x divide-gray-200 dark:divide-gray-700"
		transition={slide}
		bind:open={failToast}
		position="none"
	>
		<svg
			aria-hidden="true"
			class="w-7 h-7"
			focusable="false"
			data-prefix="fas"
			data-icon="paper-plane"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			><path
				fill="darkred"
				d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
			/></svg
		>
		<div class="pl-4 text-lg font-normal justify-center align-middle text-red-500">
			Unable to send enquiry.
		</div>
	</Toast>

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
