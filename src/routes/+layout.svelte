<script>
	import Footer from 'components/Footer.svelte';
  import '../app.css';
	import Header from 'components/Header.svelte';
</script>

<svelte:head>
  <title>InfinitiSights VR</title>
</svelte:head>

<div class="dark">
  <Header />
  <slot />
  <Footer />
</div>
