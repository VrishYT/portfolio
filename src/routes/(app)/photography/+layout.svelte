<script>
	import Sidebar from './(components)/sidebar.svelte';
</script>

<div class="flex space-x-10 flex-row">
	<Sidebar />
	<slot />
</div>
