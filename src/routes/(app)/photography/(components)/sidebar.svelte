<script lang="ts">
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';

	const prefix: string = '/photography/';

	enum PhotoType {
		portrait = 'Portraits',
		street = 'Street Photography',
		test = 'Test'
	}
</script>

<Sidebar>
	<SidebarWrapper>
		<SidebarGroup>
			<SidebarItem label="All Photos" href={prefix} />
		</SidebarGroup>
		<SidebarGroup border>
			{#each Object.keys(PhotoType) as t}
				<SidebarItem label={PhotoType[t]} href="{prefix}{t}" />
			{/each}
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
