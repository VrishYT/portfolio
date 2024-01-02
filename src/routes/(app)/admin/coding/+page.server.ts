import { supabase } from '$lib/supabaseClient';

/** @type {import('./$types').Actions} */
export const actions = {
	add_new: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log(data);
	}
}

export async function load() {
	const { data } = await supabase.from('coding').select();
	// console.log(data);
	// console.log(error);
	return { projects: data };
}
