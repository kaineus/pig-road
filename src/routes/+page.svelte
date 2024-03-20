<script lang="ts">
	import Map from './Map.svelte';
	import { Map as OlMap } from 'ol';
	import Header from './Header.svelte';
	import Panel from './Panel.svelte';

	let map: OlMap;
</script>

<svelte:head>
	<title>PigRoad</title>
	<meta name="description" content="돼지가 되는길" />
</svelte:head>

<section>
	<Header />
	<div class="wrapper">
		<Panel bind:map />
		<Map bind:map />
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		width: 100%;
		height: 100vh;
		.wrapper {
			position: relative;
			flex: 1;
		}
	}
</style>
