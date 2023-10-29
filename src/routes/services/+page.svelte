<script lang="ts">
	import { currentPage } from 'lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$currentPage = 'services';
	});
</script>

<div class="min-h-screen w-full dark:bg-darkmode-500" />
