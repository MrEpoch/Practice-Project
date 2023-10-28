<script>
	import Footer from 'components/Footer.svelte';
  import '../app.css';
	import Header from 'components/Header.svelte';
	import { theme } from 'lib/localStorage';
</script>

<svelte:head>
  <title>InfinitiSights VR</title>
</svelte:head>

<div class:dark={$theme.current === "dark"}>
  <Header />
  <slot />
  <Footer />
</div>
