<script>
	import './styles.css';
	import { onMount } from 'svelte';
	import db from '$lib/supabase/db';
	import { user } from '$lib/stores/user';
	onMount(() => {
		const {
			data: { subscription }
		} = db.onAuthStateChange(async () => {
			const { data } = await db.getUser();
			user.set(data?.user);
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div class="app">
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
		right: 0.5rem;
		color: gray;
		font-size: 0.8rem;
		opacity: 0.75;
	}
</style>
