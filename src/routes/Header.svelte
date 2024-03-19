<script lang="ts">
	import logo from '$lib/images/logo.png';
	import login from '$lib/images/icons/login.png';

	import NavMenuButton from '$lib/components/buttons/NavMenuButton.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import { user } from '$lib/store/user';

	let isSignIn: boolean  = false;

	user.subscribe((value) => {
		console.log(value);
		isSignIn = value !== null
	});

</script>

<header>
	<a class="logo" href="/">
		<img src={logo} alt="logo" />
	</a>
	<nav>
			<NavMenuButton
				title="메뉴"
				src={logo}
				/>
	</nav>
	<div class="auth">
		{#if isSignIn}
			<Avatar />
		{:else}
			<a href="/auth/sign-in">
				<img src={login} alt="로그인"/>
			</a>
		{/if}
	</div>
</header>

<style lang="scss">

	header {

		width: 5rem;
		background-color: #ffffff;
		box-shadow: 0 0 0.5rem 0.5rem #0000003b;
		z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

		.logo {
			display: block;
			width: 100%;
			padding: .25rem;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		nav {
			flex: 1;
			border-top: 1px solid #0000003b;
			border-bottom: 1px solid #0000003b;
			padding: 1rem 0;
		}

    .auth {
			height: 4.5rem;

			a {
        display: flex;
        justify-content: center;
        align-items: center;
				height: 100%;
				padding: 1rem;

				img {
					width: 90%;
					height: 90%;
					object-fit: contain;
				}
			}
		}
	}
</style>
