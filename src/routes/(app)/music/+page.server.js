import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('music').select();
	// console.log(data);
	// console.log(error);
	return { projects: data };
}
