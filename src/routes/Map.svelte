<script lang="ts">

	import 'ol/ol.css'
	import {Map, View} from 'ol'
	import { defaults as defaultControls, FullScreen } from 'ol/control'
	import { Tile as TileLayer } from 'ol/layer'
	import { XYZ } from 'ol/source'
	import { fromLonLat } from "ol/proj";
	import {
		DragRotateAndZoom,
		defaults as defaultInteractions,
	} from 'ol/interaction'

	import { PUBLIC_VWORLD_API_KEY } from '$env/static/public';

	import { onMount } from 'svelte';

	onMount(() => {
		const map = new Map({
			controls: defaultControls({zoom: false, rotate: false}).extend([
				new FullScreen(),
			]),
			interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
			layers: [
				new TileLayer({
					source: new XYZ({
						url: `https://api.vworld.kr/req/wmts/1.0.0/${PUBLIC_VWORLD_API_KEY}/Base/{z}/{y}/{x}.png`,
					}),
				}),
			],
			target: `map`,
			view: new View({
				center: fromLonLat([126.9782038, 37.566585]),
				zoom: 14,
			}),
		});
	});
</script>

<div id="map"></div>

<style>
	#map {
		width: 100%;
		height: 100%;
	}
</style>
