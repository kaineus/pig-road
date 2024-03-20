<script lang="ts">
	import logo from '$lib/images/logo.png';
	import login from '$lib/images/icons/login.png';

	import NavMenuButton from '$lib/components/buttons/NavMenuButton.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import { user } from '$lib/stores/user';
	import SideBar from '$lib/components/templates/SideBar.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { panel, isPanelOpen } from '$lib/stores/panel';
	import type { Panel } from '$lib/types/components';

	let isSignIn: boolean = false;

	user.subscribe((value) => {
		isSignIn = value !== null;
	});

	let showModal: boolean = false;

	function onTogglePanel(key: Panel) {
		if (key === $panel) {
			isPanelOpen.update((isOpen) => !isOpen);
		} else {
			isPanelOpen.set(true);
		}

		if ($isPanelOpen) panel.set(key);
	}
</script>

<header>
	<a class="logo" href="/">
		<img src={logo} alt="logo" />
	</a>
	<nav>
		<NavMenuButton
			title="메뉴"
			src={logo}
			on:click={() => {
				showModal = true;
			}}
		/>
		<NavMenuButton
			title="인기 많은"
			src={logo}
			on:click={() => {
				onTogglePanel('BOOKMARK');
			}}
		/>
		<NavMenuButton
			title="저장된"
			src={logo}
			on:click={() => {
				onTogglePanel('FAVORITE');
			}}
		/>
	</nav>
	<div class="auth">
		{#if isSignIn}
			<Avatar />
		{:else}
			<a href="/auth/sign-in">
				<img src={login} alt="로그인" />
			</a>
		{/if}
	</div>

	<Modal bind:showModal>
		<svelte:component this={SideBar} />
	</Modal>
</header>

<style lang="scss">
	header {
		width: 5rem;
		background-color: #ffffff;
		z-index: var(--z-index-header);

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		border-right: 1px solid #0000003b;

		.logo {
			display: block;
			width: 100%;
			padding: 0.75rem;

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
			display: flex;
			flex-direction: column;
			gap: 1rem;
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
