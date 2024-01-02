<script lang="ts">
    import { Plus } from '@steeze-ui/heroicons';
import type {
        CodingProject,
        IncomingCodingProject
    } from '../../coding/Utils';
    import { Breadcrumb, BreadcrumbItem, Button, Card, Gallery, Modal } from 'flowbite-svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import AddNewForm from './AddProject.svelte';
	import AddProject from './AddProject.svelte';
	import EditProject from './EditProject.svelte';

    export let data;

    let projects = new Map <string, CodingProject>();

    data &&
        data.projects &&
        data.projects.forEach(
            (project: IncomingCodingProject) => {
                projects.set(project.id, {
                    timestamp: project.timestamp,
                    title: project.title,
                    subtitle: project.subtitle,
                    img: project.img,
                    desc: project.desc,
                    tags: project.tags,
                    stack: project.stack,
                    links: project.links,
                    collaborators: project.collaborators,
                    visible: project.visible
                });
            }
        );

    let addNewModal: boolean = false;
    let editModal: boolean = false;
    let editId: string | null = null;

</script>

<div class="flex-row p-3 pb-0 justify-between columns-2">
    <Breadcrumb aria-label="Default breadcrumb example" class="ml-3 pb-0">
        <BreadcrumbItem href="/admin" home>Admin</BreadcrumbItem>
        <BreadcrumbItem href="/admin/coding">Coding</BreadcrumbItem>
    </Breadcrumb>
</div>

<div class="flex-row justify-between align-top p-5 py-3">
    <Button pill color="dark" class="p-3 hidden dark:flex mb-3" on:click={() => addNewModal = true}>
        <Icon src={Plus} size="20px" class="mr-1"/>
        Add New
    </Button>
    <Button pill outline color="dark" class="p-3 dark:hidden flex mb-3" on:click={() => addNewModal = true}>
        <Icon src={Plus} size="20px" class="mr-1"/>
        Add New
    </Button>
	<Gallery class="grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
		{#each [...projects] as [id, project] (id)}
				<Card
					img={project.img}
					horizontal
					class="relative bg-none align-middle justify-start text-left outline-2 hover:outline-black hover:dark:outline-slate-6
					00 outline-none hover:cursor-pointer"
					rounded
					on:click={() => {
                        editId = id;
                        editModal = true;
                    }}
				>
					<div class="flex-col">
						<h1 class="text-black dark:text-white font-bold text-xl">{project.title}</h1>
						<p class="text-black dark:text-white w-auto h-full">
							{project.subtitle}
						</p>
					</div>
				</Card>
		{/each}
	</Gallery>
</div>

<Modal bind:open={addNewModal} autoclose={false} class="w-full"><AddProject/></Modal>

<Modal bind:open={editModal} autoclose={false} class="w-full"><EditProject id={editId}/></Modal>