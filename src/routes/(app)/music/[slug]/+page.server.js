import { supabase } from '$lib/supabaseClient';
import { error as err } from '@sveltejs/kit';

export async function load({ params }) {
	const { data, error } = await supabase.from('music').select().ilike('title', params.slug);
	error && console.log(error);
	if (data?.length === 1) {
		const project = data[0];
		// console.log(project);
		return { project };
	}
	throw err(500, {
		message: `Multiple DB entries found for 'music/${params.slug}'`
	});
}
