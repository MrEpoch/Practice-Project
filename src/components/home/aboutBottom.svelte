<script lang="ts">
  import { lang } from "lib/localStorage";
  import { aboutHome } from "lib/texts"; 

  $: shownAccordion = {
    first: false,
    second: false,
    third: false
  }
</script>



<div class="w-full pb-32 dark:text-white">
	<div class="max-w-screen-xl flex items-center flex-col gap-8 justify-center w-full h-full mx-auto p-4">
    <h3 class="sm:text-4xl text-xl font-bold text-center">{aboutHome[$lang.current].title}</h3>
    <svg
      class="w-32 h-32 mt-16"
			viewBox="0 0 64 64"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			version="1.1"
			xml:space="preserve"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			/><g id="SVGRepo_iconCarrier">
				<g id="ICON">
					<path
						fill="currentColor"
						d="M26.5,40.5l-0,17.5c-0,0.796 0.316,1.559 0.879,2.121c0.562,0.563 1.325,0.879 2.121,0.879c5.751,-0 22.29,-0 28.041,-0c0.796,-0 1.559,-0.316 2.122,-0.879c0.562,-0.562 0.878,-1.325 0.878,-2.121c0,-4.084 0,-13 0,-13c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1c0,-0 0,8.916 0,13c0,0.265 -0.105,0.52 -0.293,0.707c-0.187,0.188 -0.442,0.293 -0.707,0.293c-5.751,-0 -22.29,-0 -28.041,0c-0.265,-0 -0.52,-0.105 -0.707,-0.293c-0.188,-0.187 -0.293,-0.442 -0.293,-0.707l-0,-17.5c-0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1Zm7.041,-5.5l-28.041,0c-0.552,-0 -1,-0.448 -1,-1c-0,-0 -0,-12 -0,-12c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l-0,12c0,1.657 1.343,3 3,3l25,0l-0,19c-0,0.552 0.448,1 1,1l24.041,0c0.553,0 1,-0.448 1,-1l0,-24.041c0,-0.553 -0.447,-1 -1,-1l-17,-0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l16,-0c0,-0 0,22.041 0,22.041c0,0 -22.041,0 -22.041,0l0,-18l1.041,-0c1.657,-0 3,-1.343 3,-3l0,-5.041l21,-0c0.265,-0 0.52,0.105 0.707,0.293c0.188,0.187 0.293,0.442 0.293,0.707c0,-0 0,10.041 0,10.041c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l0,-10.041c0,-0.796 -0.316,-1.559 -0.878,-2.122c-0.563,-0.562 -1.326,-0.878 -2.122,-0.878l-21,-0l0,-21c0,-1.657 -1.343,-3 -3,-3l-28.041,-0c-1.657,-0 -3,1.343 -3,3c-0,3.878 -0,12.041 -0,12.041c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l0,-12.041c0,-0.553 0.448,-1 1,-1l28.041,-0c0.553,-0 1,0.447 1,1l0,28.041c0,0.552 -0.447,1 -1,1Zm7.313,12.4l6.042,0l2.188,5.001c0.221,0.505 0.811,0.736 1.317,0.515c0.505,-0.221 0.736,-0.811 0.515,-1.317l-6.125,-14c-0.159,-0.364 -0.519,-0.599 -0.916,-0.599c-0.397,0 -0.757,0.235 -0.916,0.599l-6.125,14c-0.221,0.506 0.01,1.096 0.515,1.317c0.506,0.221 1.096,-0.01 1.317,-0.515l2.188,-5.001Zm0.875,-2l4.292,0l-2.146,-4.905l-2.146,4.905Zm-9.188,-37.441c0,-0.553 -0.447,-1 -1,-1l-24.041,-0c-0.552,-0 -1,0.447 -1,1l-0,24.041c0,0.552 0.448,1 1,1l24.041,0c0.553,0 1,-0.448 1,-1l0,-24.041Zm-2,1l0,22.041c0,0 -22.041,0 -22.041,0c-0,0 -0,-22.041 -0,-22.041c0,-0 22.041,-0 22.041,-0Zm-5.85,18.146l1.602,1.602c0.39,0.39 1.024,0.39 1.414,0c0.39,-0.39 0.39,-1.024 0,-1.414l-1.479,-1.479c1.434,-1.526 2.313,-3.578 2.313,-5.835c0,-4.702 -3.818,-8.52 -8.52,-8.52c-4.703,-0 -8.521,3.818 -8.521,8.52c-0,4.703 3.818,8.521 8.521,8.521c1.724,0 3.329,-0.513 4.67,-1.395Zm0.122,-2.706c1.073,-1.162 1.728,-2.715 1.728,-4.42c0,-3.598 -2.922,-6.52 -6.52,-6.52c-3.599,-0 -6.521,2.922 -6.521,6.52c-0,3.599 2.922,6.521 6.521,6.521c1.169,0 2.267,-0.308 3.216,-0.848l-0.944,-0.945c-0.39,-0.39 -0.39,-1.024 -0,-1.414c0.39,-0.39 1.024,-0.39 1.414,-0l1.106,1.106Z"
					/>
				</g>
			</g></svg>
    <div class="w-full" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
      <h2 id="accordion-flush-heading-1">
        <button on:click={() => shownAccordion.first = !shownAccordion.first} type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
          <span>{aboutHome[$lang.current].why.whyTitle}</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      {#if shownAccordion.first}
      <div class="" aria-labelledby="accordion-flush-heading-1">
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
              {aboutHome[$lang.current].why.whyContent1}
              <a class="text-blue-600 dark:text-blue-500 hover:underline" href="/about">{aboutHome[$lang.current].why.whyLink1}</a>
              {aboutHome[$lang.current].why.whyContent2}
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            <a class="dark:text-blue-500 text-blue-600 hover:underline" href="/about">{aboutHome[$lang.current].why.whyLink2}</a> 
            {aboutHome[$lang.current].why.whyContent3}
        </div>
      </div>
      {/if}
      <h2 id="accordion-flush-heading-2">
        <button on:click={() => shownAccordion.second = !shownAccordion.second} type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
          <span>{aboutHome[$lang.current].problem.problemTitle}</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      {#if shownAccordion.second}
      <div class="" aria-labelledby="accordion-flush-heading-2">
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">{aboutHome[$lang.current].problem.problemContent1}</p>
          <p class="text-gray-500 dark:text-gray-400">{aboutHome[$lang.current].problem.problemContent2}</p>
        </div>
      </div>
      {/if}
      <h2 id="accordion-flush-heading-3">
        <button on:click={() => shownAccordion.third = !shownAccordion.third} type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
          <span>{aboutHome[$lang.current].more.moreTitle}</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      {#if shownAccordion.third}
      <div class="" aria-labelledby="accordion-flush-heading-3">
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li><a href="/contact" class="text-blue-600 dark:text-blue-500 hover:underline">{aboutHome[$lang.current].more.moreLink1}</a></li>
            <li><a href="/contact" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">{aboutHome[$lang.current].more.moreLink2}</a></li>
          </ul>
        </div>
      </div>
      {/if}
    </div>
	</div>
</div>
