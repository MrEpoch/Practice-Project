<script lang="ts">
  export let data;
  $: product = data.product

</script>

<div class="dark:bg-darkmode-500 min-h-screen w-full">
  <div class="max-w-screen-xl mx-auto p-4 flex flex-col items-center">
      <div class="flex flex-col items-center justify-center gap-16 p-6  transition text-indigo-600">
        <h3 class="md:text-5xl sm:text-3xl text-2xl font-bold">{product.name}</h3> 
        <img src={product.image} alt={product.name} class="max-w-2xl w-full rounded-lg" />
        <button class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">Buy Now</button>
      </div>
  </div>
</div>
