<script lang="ts">
	import { lazyLoad } from "lib/lazyload";

  export let data;
  $: product = data.product
  
  let isAnimating = true;
</script>

<div class="dark:bg-darkmode-500 min-h-screen w-full">
  <div class="max-w-screen-xl mx-auto p-4 flex flex-col items-center">
      <div class="flex flex-col items-center justify-center gap-16 p-6  transition text-indigo-600">
        <h3 class="md:text-5xl sm:text-3xl text-2xl font-bold">{product.name}</h3> 
        <div class={`max-w-2xl w-full bg-gray-200 h-128 dark:bg-gray-800 h-full rounded-lg transition-transform ${isAnimating ? "animate-pulse" : ""}`}>
          <img use:lazyLoad={product.image} on:load={() => (isAnimating = false)} src={product.image} alt={product.name} class="opacity-0 max-w-2xl w-full rounded-lg" />
        </div>
        <button class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">Buy Now</button>
      </div>
  </div>
</div>
