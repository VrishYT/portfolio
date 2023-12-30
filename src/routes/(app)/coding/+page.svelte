<script lang="ts">
    import Modal from 'svelte-simple-modal';
    import type {
        CodingProject,
        IncomingCodingProject
    } from './Utils';
    import Content from './Content.svelte';

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
</script>

<Modal>
    <Content projects={projects}/>
</Modal>