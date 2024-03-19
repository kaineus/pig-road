<script lang="ts">
	import Map from './Map.svelte';
	import Header from './Header.svelte';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Header />
	<Map/>
</section>

<style>
	section {
			display: flex;
			justify-content: center;
			width: 100%;
			height: 100vh;
	}
</style>
