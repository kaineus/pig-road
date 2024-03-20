import { createClient, type Provider } from '@supabase/supabase-js';

import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

const supabaseUrl: string = PUBLIC_SUPABASE_URL;
const supabaseAnonKey: string = PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default {
	async signInWithOAuth(provider: Provider) {
		return supabase.auth.signInWithOAuth({ provider });
	},

	async signOut() {
		return supabase.auth.signOut();
	},

	onAuthStateChange(callback: () => void) {
		return supabase.auth.onAuthStateChange(callback);
	},

	async getUser() {
		return supabase.auth.getUser();
	},

	async getRestaurants() {
		const { data, error } = await supabase.from('restaurants').select('*');

		if (error) throw error;
		return data;
	}
};
