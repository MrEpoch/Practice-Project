<script lang="ts">
  import { services } from './services';
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
        <img src={service.image} alt={service.name} class="max-w-2xl w-full" />
        <p class="sm:text-xl text-md max-w-2xl dark:text-white text-black">{service.description}</p>
      </a>
    {/each}
    </div>
  </div>
</div>
