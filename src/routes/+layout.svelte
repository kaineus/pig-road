<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>

	<footer>
		<p>copyright &copy; By kaineus All Right</p>
	</footer>
</div>

<style>
		.app {
				display: flex;
				flex-direction: row;
				width: 100vw;
				min-height: 100vh;
		}

		main {
				flex: 1;
		}

		footer {
				position: absolute;
				bottom: 0;
				right: .5rem;
				color: gray;
				font-size: 0.8rem;
				opacity: 0.75;
		}

</style>
