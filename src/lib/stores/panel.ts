import { writable } from 'svelte/store';
import type { Panel } from '$lib/types/components';

const panel = writable<Panel>('FAVORITE');
const isPanelOpen = writable<boolean>(false);

export { panel, isPanelOpen };
