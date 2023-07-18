<script lang="ts">
	import {
		Button,
		Footer,
		FooterCopyright,
		FooterIcon,
		Input,
		Label,
		Modal,
		Select,
		Textarea,
		Toast
	} from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	const url = $page.url;

	let resourcesModal = false,
		contactModal = false,
		legalModal = false;

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
		const enquirySuccess = url.searchParams.get('enquirySuccess');
		console.log(enquirySuccess);
		if (enquirySuccess) enquirySuccess === 'true' ? successTrigger() : failTrigger();
	});

	let category: string;
	let categories = [
		{
			value: 'photo',
			name: 'Photography'
		},
		{
			value: 'coding',
			name: 'Coding'
		},
		{
			value: 'music',
			name: 'Music'
		},
		{
			value: 'other',
			name: 'Other'
		}
	];
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
			<div class="grid-cols-2 gap-x-12 lg:gap-x-20 xl:gap-x-40 sm:grid-cols-3 hidden md:grid">
				<Button
					color="none"
					class="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
					on:click={() => (resourcesModal = !resourcesModal)}>Resources</Button
				>
				<Button
					color="none"
					class="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
					on:click={() => (contactModal = !contactModal)}>Contact</Button
				>
				<Button
					color="none"
					class="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
					on:click={() => (legalModal = !legalModal)}>Legal</Button
				>
			</div>
			<div class="flex space-x-6">
				<!-- Instagram -->
				<FooterIcon
					href="https://www.instagram.com/16vrish/"
					class="text-gray-400 hover:text-gray-900"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
							clip-rule="evenodd"
						/></svg
					>
				</FooterIcon>
				<!-- GitHub -->
				<FooterIcon href="https://github.com/VrishYT" class="text-gray-400 hover:text-gray-900">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						/></svg
					>
				</FooterIcon>
			</div>
		</div>
	</Footer>
</div>

<Modal title="Resources (WIP)" bind:open={resourcesModal} autoclose outsideclose>
	<p>SvelteKit, Supabase, Vercel, Flowbite</p>
	<!-- TODO: complete resources modal -->
</Modal>

<Modal title="Legal (WIP)" bind:open={legalModal} autoclose outsideclose>
	<p>Legal stuffs...</p>
	<!-- TODO: complete legal modal -->
</Modal>

<Modal title="Contact (WIP)" bind:open={contactModal} outsideclose>
	<form class="flex flex-col space-y-6" method="POST" action="?/enquiry">
		<Label class="space-y-2">
			<span>Name</span>
			<Input type="text" name="name" placeholder="Your name..." required />
		</Label>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Category</span>
			<Select
				items={categories}
				bind:value={category}
				placeholder="Select a category..."
				required
			/>
		</Label>
		<Label class="space-y-2">
			<span>Message</span>
			<Textarea name="message" placeholder="Your message..." rows="4" required />
		</Label>
		<Button type="submit" class="w-full1">Submit</Button>
		<Input name="url" class="hidden" value={$page.url.pathname}/>
	</form>
</Modal>
