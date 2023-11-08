<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { homeMain } from 'lib/texts';
	import { lang, theme } from 'lib/localStorage';

	let animate = false;
	onMount(() => {
		animate = true;
	});

	const cardContent = [
		{
			title: homeMain[$lang.current].sold,
			subtitle: homeMain[$lang.current].soldText
		},
		{
			title: homeMain[$lang.current].immersion,
			subtitle: homeMain[$lang.current].immersionText
		},
		{
			title: homeMain[$lang.current].created,
			subtitle: homeMain[$lang.current].createdText
		},
		{
			title: homeMain[$lang.current].posts,
			subtitle: homeMain[$lang.current].postsText
		}
	];
</script>

<div class="flex h-full sm:flex-row flex-col gap-16 items-center w-full">
	<div class="min-h-screen w-full flex gap-5 items-center">
		<div
			class={`md:flex flex-col items-center justify-center h-full hidden ${
				!animate ? 'w-[7rem]' : ''
			}`}
		>
			{#if animate}
				<div in:fly={{}} class="flex gap-8 p-8 mt-28 flex-col">
					<p class="lg:text-4xl text-2xl flex flex-col font-bold text-center">
						{cardContent[0].title}
						<span class="text-xl">{cardContent[0].subtitle}</span>
					</p>
					<div class="h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-600" />
					<p class="lg:text-4xl text-2xl flex flex-col font-bold text-center">
						{cardContent[1].title}
						<span class="text-xl">{cardContent[1].subtitle}</span>
					</p>
				</div>
			{/if}
		</div>
		<div
			class="sm:max-w-screen-md min-h-screen lg:max-w-screen-xl max-w-screen-xl w-full
  justify-center pb-32 relative mx-auto p-4 flex flex-col items-center"
		>
			<div class="w-full overflow-hidden h-full flex items-center justify-center absolute top-0">
				<svg
          class={`overflow-hidden animate-slowSpin ${$theme.current === "dark" ? "brightness-50 blur-[2px]" : "blur-[2px]"} z-[0] max-w-[700px]`}
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 800 800"
					><defs
						><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cccoil-grad"
							><stop stop-color="hsl(167, 72%, 60%)" stop-opacity="1" offset="0%" /><stop
								stop-color="hsl(272, 99%, 54%)"
								stop-opacity="1"
								offset="100%"
							/></linearGradient
						></defs
					><g stroke="url(#cccoil-grad)" fill="none" stroke-linecap="round"
						><circle
							r="348"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="1859 2187"
							transform="rotate(360, 400, 400)"
							opacity="1.00"
						/><circle
							r="333.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="1704 2095"
							transform="rotate(344, 400, 400)"
							opacity="0.96"
						/><circle
							r="319"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="1556 2004"
							transform="rotate(329, 400, 400)"
							opacity="0.92"
						/><circle
							r="304.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="1414 1913"
							transform="rotate(313, 400, 400)"
							opacity="0.88"
						/><circle
							r="290"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="1279 1822"
							transform="rotate(297, 400, 400)"
							opacity="0.83"
						/><circle
							r="275.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="1152 1731"
							transform="rotate(282, 400, 400)"
							opacity="0.79"
						/><circle
							r="261"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="1030 1640"
							transform="rotate(266, 400, 400)"
							opacity="0.75"
						/><circle
							r="246.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="916 1549"
							transform="rotate(250, 400, 400)"
							opacity="0.71"
						/><circle
							r="232"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="808 1458"
							transform="rotate(235, 400, 400)"
							opacity="0.67"
						/><circle
							r="217.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="707 1367"
							transform="rotate(219, 400, 400)"
							opacity="0.63"
						/><circle
							r="203"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="613 1275"
							transform="rotate(203, 400, 400)"
							opacity="0.59"
						/><circle
							r="188.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="525 1184"
							transform="rotate(188, 400, 400)"
							opacity="0.55"
						/><circle
							r="174"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="444 1093"
							transform="rotate(172, 400, 400)"
							opacity="0.50"
						/><circle
							r="159.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="370 1002"
							transform="rotate(157, 400, 400)"
							opacity="0.46"
						/><circle
							r="145"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="303 911"
							transform="rotate(141, 400, 400)"
							opacity="0.42"
						/><circle
							r="130.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="242 820"
							transform="rotate(125, 400, 400)"
							opacity="0.38"
						/><circle
							r="116"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="189 729"
							transform="rotate(110, 400, 400)"
							opacity="0.34"
						/><circle
							r="101.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="141 638"
							transform="rotate(94, 400, 400)"
							opacity="0.30"
						/><circle
							r="87"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="101 547"
							transform="rotate(78, 400, 400)"
							opacity="0.26"
						/><circle
							r="72.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="67 456"
							transform="rotate(63, 400, 400)"
							opacity="0.22"
						/><circle
							r="58"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="40 364"
							transform="rotate(47, 400, 400)"
							opacity="0.17"
						/><circle
							r="43.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="20 273"
							transform="rotate(31, 400, 400)"
							opacity="0.13"
						/><circle
							r="29"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="7 182"
							transform="rotate(16, 400, 400)"
							opacity="0.09"
						/><circle
							r="14.5"
							cx="400"
							cy="400"
							stroke-width="5.5"
							stroke-dasharray="0 91"
							opacity="0.05"
						/></g
					></svg>
			</div>
			<div
				class="z-[1] w-full h-full flex items-center justify-center flex-col sm:pt-36 pt-28 md:pt-48"
			>
				<h1
					class="mb-4 text-center  md:text-4xl break-words sm:text-3xl text-4xl max-[450px]:text-2xl lg:text-5xl font-light tracking-tight leading-none text-gray-900 dark:text-white"
				>
        {homeMain[$lang.current].title1} <span
						class="bg-gradient-to-br from-purple-500 to-cyan-600 bg-clip-text text-transparent box-decoration-clone"
						>{homeMain[$lang.current].title2}</span
          > {homeMain[$lang.current].title3}				
        </h1>
			</div>
			<a
				href="/pricing"
				class="inline-flex z-10 mt-8 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
			>
				{homeMain[$lang.current].pricingBtn}
				<svg
					class="w-3.5 h-3.5 ml-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</a>
		</div>
		<div
			class={`md:flex flex-col items-center justify-center h-full hidden ${
				!animate ? 'w-[7rem]' : ''
			}`}
		>
			{#if animate}
				<div in:fly={{ x: -100 }} class="flex gap-8 p-8 mt-28 flex-col">
					<p class="lg:text-4xl text-2xl flex flex-col font-bold text-center">
						{cardContent[2].title}
						<span class="text-xl">{cardContent[2].subtitle}</span>
					</p>
					<div class="h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-600" />
					<p class="lg:text-4xl text-2xl flex flex-col font-bold text-center">
						{cardContent[3].title}
						<span class="text-xl">{cardContent[3].subtitle}</span>
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>
