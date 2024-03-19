<script>
	import './styles.css';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase/client';
	import { user } from '$lib/store/user';
	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(async () => {
			const { data } = await supabase.auth.getUser();
			user.set(data.user);
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
				right: .5rem;
				color: gray;
				font-size: 0.8rem;
				opacity: 0.75;
		}

</style>
