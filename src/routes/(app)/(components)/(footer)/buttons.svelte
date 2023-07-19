<script lang="ts">
	import { page } from '$app/stores';
	import { Button, Input, Label, Modal, Select, Textarea } from 'flowbite-svelte';

	let resourcesModal = false,
		contactModal = false,
		legalModal = false;

	let category: string | undefined;
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

	function contactButton() {
		const url = $page.url;
		category = url.pathname.includes('photography')
			? 'photo'
			: url.pathname.includes('music')
			? 'music'
			: url.pathname.includes('coding')
			? 'coding'
			: undefined;
		contactModal = !contactModal;
	}
</script>

<div class="grid-cols-2 gap-x-12 lg:gap-x-20 xl:gap-x-40 sm:grid-cols-3 hidden md:grid">
	<Button
		color="none"
		class="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
		on:click={() => (resourcesModal = !resourcesModal)}>Resources</Button
	>
	<Button
		color="none"
		class="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
		on:click={contactButton}>Contact</Button
	>
	<Button
		color="none"
		class="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
		on:click={() => (legalModal = !legalModal)}>Legal</Button
	>
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
		<Input name="url" class="hidden" value={$page.url.pathname} />
	</form>
</Modal>
