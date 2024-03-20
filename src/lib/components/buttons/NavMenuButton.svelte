<script lang="ts">
	export let title: string;
	export let src: string;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const onClick = () => {
		dispatch('click', title);
	};
</script>

<div>
	<button on:click={onClick}>
		<img {src} alt={title} />
		{title}
	</button>
</div>

<style lang="scss">
	button {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		border: none;
		background-color: transparent;
		cursor: pointer;
		transition: all 0.1s ease;
		font-size: 0.75rem;

		&:hover {
			color: rgba(4, 117, 244, 0.8);
			img {
				transform: scale(1.1);
			}
		}

		img {
			width: 2rem;
			height: 2rem;
		}
	}
</style>
