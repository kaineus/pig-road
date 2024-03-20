import { writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';

const user = writable<User | null>(null);

export { user };
