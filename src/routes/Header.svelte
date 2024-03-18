<script lang="ts">
	import github from '$lib/images/github.svg';
	import logo from '$lib/images/logo.png';

	import { supabase } from '$lib/supabase/client';
	import { onMount } from 'svelte';

	let user: any = null;

	onMount(async () => {
		user = await currentUser();
	});

	async function currentUser() {
		const { data } = await supabase.auth.getUser();
		return data.user;
	}

	async function signInWithGithub() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github'
		});
	}

	async function signOut() {
		const { error } = await supabase.auth.signOut();
		console.error(error);
		user = null;
	}

</script>

<header>
	<nav>
		<a href="https://kit.svelte.dev">
			<picture>
				<source srcset={logo} type="image/png"/>
				<img src={logo} alt="PigRoad" />
			</picture>
		</a>
	</nav>
	<div class="corner">
		{#if user}
			<button on:click={signOut}>
				<img src={user.user_metadata.avatar_url} alt="avatar" />
			</button>
		{:else}
			<button on:click={signInWithGithub}>
				<img src={github} alt="GitHub 로그인" />
			</button>
		{/if}
	</div>
</header>

<style lang="scss">

	header {
		width: 5rem;
		background-color: #ffffff;
		box-shadow: 0 0 0.5rem 0.5rem #0000003b;
		z-index: 100;

		nav {

		}


    button {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 5rem;
    }

    IMG {
      width: 100%;
      height: 100%;
    }
	}
</style>
