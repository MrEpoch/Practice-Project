<script lang="ts">
  import UpdatingSoftware from "assets/UpdatingSoftware.jpg";
  import ReplacingParts from "assets/FaultyComponents.jpg";
  import VR_Showcase from "assets/VR_showcase.jpg";
	import { lazyLoad } from "lib/lazyload";

  const services = [
    {
      id: 1,
      name: 'Replacing faulty parts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: ReplacingParts 
    },
    {
      id: 2,
      name: "Showcasing how to use VR",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: VR_Showcase
    },
    {
      id: 3,
      name: 'Updating the software',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: UpdatingSoftware
    }
  ]
  
  let isAnimating = true;

</script>


<div class="w-full dark:text-white flex flex-col">
  <div class="max-w-screen-xl w-full mx-auto flex flex-col py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="md:flex md:items-center md:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight  sm:text-4xl">
        <span class="block">Our Services</span>
      </h2>
    </div>
    <div class="flex flex-col pt-32 gap-32 items-center text-center w-full h-full">
    {#each services as service}
      <a href={`/services/${service.id}`}
        class="flex flex-col items-center gap-8 hover:brightness-75 p-6  transition text-indigo-600 hover:text-indigo-500">
        <h3 class="md:text-5xl sm:text-3xl text-2xl font-bold">{service.name}</h3> 
        <div class={`max-w-2xl w-full bg-gray-200 h-128 dark:bg-gray-800 transition-transform ${isAnimating ? "animate-pulse" : ""}`}>
          <img 
            use:lazyLoad={service.image}
            on:load={() => (isAnimating = false)}
            src={service.image} alt={service.name} class="opacity-0 w-full object-cover" />
        </div>
        <p class="sm:text-xl text-md max-w-2xl dark:text-white text-black">{service.description}</p>
      </a>
    {/each}
    </div>
  </div>
</div>
