<script lang="ts">
	export let showModal: boolean = false;

	function closeModal() {
		showModal = false;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<div class:d-none={!showModal} on:click={closeModal} aria-modal="true" role="dialog">
	<slot />
</div>

<style lang="scss">
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.3);
		animation: fade 0.3s ease;
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
