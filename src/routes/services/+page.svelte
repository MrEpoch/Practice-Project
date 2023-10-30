<script lang="ts">
	import { currentPage } from 'lib/stores';
	import { onMount } from 'svelte';
  import MainServices from "components/services/MainServices.svelte";

	onMount(() => {
		$currentPage = 'services';
	});
</script>

<div class="min-h-screen w-full dark:bg-darkmode-500">
  <MainServices />
</div>
