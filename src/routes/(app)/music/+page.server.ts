import { supabase } from '$lib/supabaseClient';

// enum Ordering {
// 	date = 'created_at',
// 	name = 'title',
// 	type = 'type'
// }

const Ordering = {
	date: {
		column: 'created_at',
		ascending: false
	},
	name: {
		column: 'title',
		ascending: true
	},
	type: {
		column: 'type',
		ascending: true
	}
};

type MyError = (typeof Ordering)[keyof typeof Ordering];

export async function load({ url }) {
	const orderBy = url.searchParams.has('orderBy') ? url.searchParams.get('orderBy') : 'date';
	const order = Ordering[orderBy];
	const ascending: boolean = url.searchParams.has('asc')
		? url.searchParams.get('asc') === 'true'
		: order.ascending;
	let { data } = await supabase.from('music').select().order(order.column, { ascending });

	return { projects: data, ascending, orderBy };
}
