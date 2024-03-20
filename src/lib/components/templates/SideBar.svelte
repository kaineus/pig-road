<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<section transition:slide={{ delay: 10, duration: 300, easing: quintOut, axis: 'x' }}>
	<div>HEAD</div>
	<div>콘텐츠</div>
</section>

<style lang="scss">
	section {
		width: 25rem;
		height: 100%;
		background: white;
		z-index: var(--z-index-modal-content);
	}
</style>
