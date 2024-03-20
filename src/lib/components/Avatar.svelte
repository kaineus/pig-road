<script lang="ts">
	import db from '$lib/supabase/db';
	import { user } from '$lib/stores/user';

	const signOut = async () => {
		await db.signOut();
	};

	let { user_metadata } = $user!;
</script>

<div>
	<button on:click={signOut}>
		<img src={user_metadata.avatar_url} alt={user_metadata.name} />
	</button>
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;

		button {
			img {
				width: 75%;
				height: 75%;
				border-radius: 50%;
			}
		}
	}
</style>
