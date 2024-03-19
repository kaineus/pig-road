import { writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';

const user = writable<User | null>(null);

user.subscribe((value) => {
			console.log('user', value);
});

export { user };