<script lang="ts">
  import { BoxIcon, ToolIcon, GlobeIcon, CpuIcon } from "svelte-feather-icons";

  const cardText = [
    {
      content: "VR Technologies",
      svg: CpuIcon,
      path: "/services"
    },
    {
      content: "About Us",
      svg: BoxIcon,
      path: "/about"
    },
    {
      content: "Recommendations",
      svg: GlobeIcon,
      path: "/pricing"
    },
    {
      content: "How to use",
      svg: ToolIcon,
      path: "/contact"
    }
  ]  
</script>


<div class="min-h-screen flex justify-center w-full">
  <div class="flex flex-col
        overflow-hidden items-center text-center lg:py-16 sm:grid grid-cols-1 gap-x-6 gap-y-6
        p-4
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
    {#each cardText as card}
      <a href={card.path} class="aspect-square flex items-center
        justify-center max-w-sm w-full flex-col gap-7 text-2xl
        p-16 font-extrabold dark:bg-darkmode-200 rounded-lg
        dark:hover:bg-darkmode-300 transition duration-300">
        <span class="bg-gradient-to-br from-purple-400 to-cyan-600 bg-clip-text text-transparent box-decoration-clone">{card.content}</span>
        <svelte:component class="w-16 h-16" this={card.svg}/>
      </a>
    {/each}
  </div>
</div>
