<script lang="ts">
	import FavoriteList from '$lib/components/templates/FavoriteList.svelte';
	import BookmarkList from '$lib/components/templates/BookmarkList.svelte';

	import { panel, isPanelOpen } from '$lib/stores/panel';
	import type { Panel } from '$lib/types/components';

	import { Map } from 'ol';

	const componentMap = {
		FAVORITE: FavoriteList,
		BOOKMARK: BookmarkList
	};

	export let map: Map;

	let type: Panel;

	panel.subscribe((value) => {
		type = value;
	});

	const getMapSize = () => {
		return map.getSize();
	};

	$: {
		if (map) {
			console.log(getMapSize());
		}
	}
</script>

<div class:open={$isPanelOpen}>
	<svelte:component this={componentMap[type]} />
</div>

<style lang="scss">
	div {
		position: absolute;
		width: 20rem;
		height: 100%;
		transform: translateX(-100%);
		transition: transform 0.3s;
		background-color: #fff;
		z-index: var(--z-index-panel);
		box-shadow: 0.25rem 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2);
		&.open {
			transform: translateX(0);
		}
	}
</style>
