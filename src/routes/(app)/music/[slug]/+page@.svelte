<script lang="ts">
	import { musicProjectsStore } from '../../../../Store';
	import type { MusicProject } from '../Utils';
	import { page } from '$app/stores';
    import { error } from '@sveltejs/kit';

	let projects = new Map<string, MusicProject>();
	musicProjectsStore.subscribe((data: Map<string, MusicProject>) => (projects = data));

	const path = $page.url.pathname;
	const id = path.substring(path.lastIndexOf('/') + 1);

	const data = projects.get(id);
    console.log(data);
	if (!data) {
        throw error(404, {
            message: 'Not found'
        });
	}
</script>

<p>{data.title}</p>
