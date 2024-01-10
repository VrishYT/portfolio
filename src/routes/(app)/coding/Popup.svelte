<script lang="ts">
    import type { CodingProject } from "./Utils";
    import { Hr } from 'flowbite-svelte';
    import Time from "svelte-time";

    export let project: CodingProject;

</script>

<div class="space-y-2">
    <div class="flex columns-2 justify-between pr-10">
        <h1 class="font-bold text-xl underline">{project.title}</h1>
        <Time class="text-slate-600 italic" timestamp={project.timestamp} format="MMMM YYYY"/>
    </div>
    <h3 class="text-slate-800 italic">{project.subtitle}</h3>
    {#if project.desc != ""}
        <p class="">{project.desc}</p>
    {/if}

    {#if (project.links && project.links.length) || (project.collaborators && project.collaborators.length)}
        <Hr/>
        <div class="flex columns-2 gap-4">
            {#if project.links && project.links.length}
                <div class="flex-row w-full">
                    <h1 class="font-semibold">Links:</h1>
                    {#each project.links as { label, url }}
                        <p class="text-blue-700 hover:text-purple-700 underline"><a href={url}>{label}</a></p>
                    {/each}
                </div>
            {/if}
            {#if project.collaborators && project.collaborators.length}
                <div class="flex-row w-full">
                    <h1 class="font-semibold">Collaborators:</h1>
                    {#each project.collaborators as collaborator}
                        <p>{collaborator}</p>
                    {/each}
                </div>
            {/if}
        </div>  
    {/if}

    <Hr/>
    <div class="flex columns-2 gap-4">
        <div class="justify-start flex-row w-full">
            <p class="font-bold">Technologies Used:</p>
            {#each project.stack as tech}
                <p>{tech}</p>
            {/each}
        </div>
        {#if project.tags && project.tags.length}
            <div class="justify-start flex-row w-full">
                <p class="font-bold">Tags:</p>
                {#each project.tags as tag}
                    <p>{tag}</p>
                {/each}
            </div>
        {/if}
    </div>
</div>