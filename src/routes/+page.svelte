<script lang="ts">
	import Map from './Map.svelte';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Map/>
</section>

<style>
	section {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100vh;
	}
</style>
