<script lang="ts">
  import InfoCards from "components/home/infoCards.svelte";
  import Main from "components/home/main.svelte";
	import { onMount } from "svelte";
  import { currentPage } from "lib/stores";

  onMount(() => {
    $currentPage = "home"
  })

</script>

<div class="min-h-screen w-full py-8 dark:text-white dark:bg-darkmode-500">
  <Main />
  <InfoCards />
</div>
