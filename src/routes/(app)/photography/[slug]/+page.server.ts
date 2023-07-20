import { supabase } from '$lib/supabaseClient';
import { error as err } from '@sveltejs/kit';

export async function load({ params }) {
	const { data } = await supabase.storage.from('photo').list(params.slug);

	const imgs: { id: number, name: string; imgurl: string; lastUpdated: string }[] = data
		? data.map((file, index) => {
				const name = file.name;
				const { data } = supabase.storage.from('photo').getPublicUrl(`${params.slug}/${name}`);
				return {
					id: index,
					name,
					imgurl: data.publicUrl,
					lastUpdated: file.updated_at
				};
		  })
		: [];

	console.log(imgs);
	return { imgs };
}
