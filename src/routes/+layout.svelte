<script>
	import Footer from 'components/Footer.svelte';
	import '../app.css';
	import Header from 'components/Header.svelte';
	import { theme } from 'lib/localStorage';
</script>

<svelte:head>
	<title>InfinitiSights VR</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="InfinitiSights VR" />
	<meta name="color-scheme" content={$theme.current} />
</svelte:head>

<div class:dark={$theme.current === 'dark'}>
	<Header />
	<slot />
	<Footer />
</div>
