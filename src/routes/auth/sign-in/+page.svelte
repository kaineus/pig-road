<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	import db from '$lib/supabase/db';

	const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
		switch (action.searchParams.get('provider')) {
			case 'google':
				await db.signInWithOAuth('google');
				break;
			case 'github':
				await db.signInWithOAuth('github');
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
