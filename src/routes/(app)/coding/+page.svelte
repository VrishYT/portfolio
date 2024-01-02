<script lang="ts">
    import Modal from 'svelte-simple-modal';
    import type {
        CodingProject,
        IncomingCodingProject
    } from './Utils';
    import Content from './Content.svelte';
	import { Icon } from "@steeze-ui/svelte-icon";
	import { ArrowsUpDown } from "@steeze-ui/heroicons";
	import { Button, Chevron, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { page } from '$app/stores';

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
                    collaborators: project.collaborators
                });
            }
        );

    let newUrl = new URL($page.url);

    function updateOrder(order: string) {
        newUrl.searchParams.set('orderBy', order);
        return newUrl.toString();
    }

    function invertOrder() {
        newUrl.searchParams.set('asc', (!data.ascending).toString());
        return newUrl.toString();
    }
</script>

<div class="flex-row justify-between align-top">
    <div class="flex p-5 pb-0 space-x-2">
        <Button color="dark" class="hidden dark:inline-flex" data-sveltekit-reload href={invertOrder()}>
            <Icon src={ArrowsUpDown} size="20px" theme="solid" /></Button
        >
        <Button color="light" class="dark:hidden" data-sveltekit-reload href={invertOrder()}>
            <Icon src={ArrowsUpDown} size="20px" theme="solid" /></Button
        >
        <Button color="dark" class="hidden dark:inline-flex"
            ><Chevron
                ><p class="capitalize font-semibold">
                    Sort by: <span class="font-normal pl-1">{data.orderBy}</span>
                </p></Chevron
            ></Button
        >
        <Dropdown>
            <DropdownItem data-sveltekit-reload href={updateOrder('date')}>Date</DropdownItem>
            <DropdownItem data-sveltekit-reload href={updateOrder('name')}>Name</DropdownItem>
        </Dropdown>
        <Button color="light" class="dark:hidden"
            ><Chevron
                ><p class="capitalize font-semibold">
                    Sort by: <span class="font-normal pl-1">{data.orderBy}</span>
                </p></Chevron
            ></Button
        >
        <Dropdown>
            <DropdownItem data-sveltekit-reload href={updateOrder('date')}>Date</DropdownItem>
            <DropdownItem data-sveltekit-reload href={updateOrder('name')}>Name</DropdownItem>
        </Dropdown>
    </div>
    <Modal>
        <Content projects={projects}/>
    </Modal>
</div>