<script lang="ts">
	import 'ol/ol.css';
	import { Feature, Map, View } from 'ol';
	import { defaults as defaultControls, FullScreen } from 'ol/control';
	import { Tile as TileLayer } from 'ol/layer';
	import { XYZ } from 'ol/source';
	import { fromLonLat, toLonLat } from 'ol/proj';
	import { DragRotateAndZoom, defaults as defaultInteractions } from 'ol/interaction';

	import VectorSource from 'ol/source/Vector';
	import VectorLayer from 'ol/layer/Vector';
	import { Point } from 'ol/geom';
	import { Icon, Style } from 'ol/style';

	import { PUBLIC_VWORLD_API_KEY } from '$env/static/public';

	import { onMount } from 'svelte';
	import db from '$lib/supabase/db';

	export let map: Map;

	const poiSource = new VectorSource();
	const poiLayer = new VectorLayer({
		source: poiSource
	});

	const createPoi = (x: number, y: number): Feature => {
		const poi = new Feature({
			geometry: new Point(fromLonLat([x, y]))
		});

		const style = new Style({
			image: new Icon({
				anchor: [0.5, 1],
				scale: 1,
				src: '/src/lib/images/poi/restaurant.png'
			})
		});

		poi.setStyle(style);

		return poi;
	};

	onMount(async () => {
		map = new Map({
			controls: defaultControls({ zoom: false, rotate: false }).extend([new FullScreen()]),
			interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
			layers: [
				new TileLayer({
					source: new XYZ({
						url: `https://api.vworld.kr/req/wmts/1.0.0/${PUBLIC_VWORLD_API_KEY}/Base/{z}/{y}/{x}.png`
					})
				}),
				poiLayer
			],
			target: `map`,
			view: new View({
				// center: [126.9782038, 37.566585],
				center: fromLonLat([126.9782038, 37.566585]),
				zoom: 14
			})
		});

		map.on('click', function (evt) {
			console.log(toLonLat(evt.coordinate));
		});

		const restaurants = await db.getRestaurants();

		restaurants.forEach((restaurant) => {
			const { coordinate } = restaurant;
			const poi = createPoi(coordinate.x, coordinate.y);

			poiSource.addFeature(poi);
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
