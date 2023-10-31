<script lang="ts">
	import { currentPage } from 'lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$currentPage = 'about';
	});
</script>

<div class="min-h-screen w-full dark:bg-darkmode-500">
  <div class="max-w-screen-xl py-16 flex flex-col mx-auto px-4">
    <h1 class="text-4xl font-bold">Our Story</h1>
    <div class="h-full pt-16 w-full">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
          <li class="mb-10 ml-4 p-6">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2020</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Company start</h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">With brilliant ideas to pursue, we created company InfinitySights VR, whose goal is to share our techology with whole world.</p>
          </li>
          <li class="mb-10 ml-4 p-6">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2021</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Product Testing</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Public product testing of our VR technologies, meant to showcase capabilities of our company and of our product. It was successfull test.</p>
          </li>
          <li class="mb-10 ml-4 p-6">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Global Market</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">We finally opened our product to the whole world to buy and see for themselves our success with VR technologies.</p>
          </li>
          <li class="ml-4 p-6">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2023</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">VR conference</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">We were on world famous VR conference nominated as contestants of most successfull VR startup.</p>
          </li>
      </ol>
    </div>
  </div>
</div>
