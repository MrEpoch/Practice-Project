<script lang="ts">
	import { currentPage } from 'lib/stores';
	import { onMount } from 'svelte';
  import { products } from "./pricing";
	import { lazyLoad } from 'lib/lazyload';

	onMount(() => {
		$currentPage = 'pricing';
  });

  let isAnimating = true;
</script>

<div class="min-h-screen w-full dark:bg-darkmode-500">
  <div class="max-w-screen-xl py-16 px-4 mx-auto w-full">
    <div class="grid grid-cols-1 gap-x-6 gap-y-10 w-full
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {#each products as product}
      <a href={`/pricing/${product.id}`} class="items-center group relative flex flex-col max-w-sm p-6 bg-white border-purple-600 border-[2px] rounded-xl shadow dark:bg-darkmode-400 hover:brightness-90 dark:hover:brightness-75 ">
        <h5 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        <div class={`overflow-hidden w-full transition-transform h-64 rounded-lg bg-gray-100 dark:bg-gray-800 ${isAnimating ? "animate-pulse" : ""}`}>
          <img
            use:lazyLoad={product.image}
            on:load={() => (isAnimating = false)}
            class="rounded-lg opacity-0 group-hover:scale-110 duration-300 object-cover h-full overflow-hidden transition" alt={product.name} />
        </div>
        <div class="p-6" />
        <p class="mb-3 text-gray-700 text-2xl absolute bottom-2 right-2 dark:text-gray-400 font-bold">${product.price}</p>
      </a>
    {/each}
        </div>
  </div>
</div>
