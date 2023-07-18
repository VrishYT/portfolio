import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('photo').select();
	return { photos: data };
}
