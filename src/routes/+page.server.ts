import { supabase } from '$lib/supabase/db';

export async function load() {
	const { data } = await supabase.from('restaurants').select();
	return {
		restaurants: data ?? []
	};
}
