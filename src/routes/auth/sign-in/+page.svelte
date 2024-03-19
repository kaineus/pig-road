<script lang="ts">
	import { enhance } from '$app/forms';
	import { supabase } from '$lib/supabase/client';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { Provider } from '@supabase/supabase-js';

	const signInWithProvider = async (provider: Provider) => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: provider
		});
	};

	const submitSocialLogin: SubmitFunction = async ({ action, cancel}) => {
		switch (action.searchParams.get('provider')) {
			case 'google':
				await signInWithProvider('google');
				break;
			case 'github':
				await signInWithProvider('github');
				break;
			default:
				break;
		}

		cancel();
	};

</script>

<main>
	<h1>OAuth 로그인</h1>
	<form method="POST" use:enhance={submitSocialLogin}>
		<button formaction="?/login&provider=github" class="btn btn-ghost">Github</button>
		<button formaction="?/login&provider=google" class="btn btn-ghost">Google</button>
	</form>
</main>