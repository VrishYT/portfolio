import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('music').select().order('created_at', {ascending: false});
	// console.log(data);
	// console.log(error);
	return { projects: data };
}
