<script lang="ts">
  export let data;
  $: service = data.service
</script>

<div class="min-h-screen w-full dark:bg-darkmode-500 flex flex-col justify-center items-center">
  <div class="max-w-screen-xl mx-auto p-4 flex items-center justify-center flex-col h-full">
      <div class="flex flex-col items-center justify-center gap-16 p-6  transition text-indigo-600">
        <h3 class="md:text-5xl sm:text-3xl text-2xl font-bold">{service.name}</h3> 
        <img src={service.image} alt={service.name} class="max-w-2xl w-full" />
        <p class="sm:text-xl text-md max-w-2xl dark:text-white text-black">{service.description}</p>
      </div>
  </div>
</div>
