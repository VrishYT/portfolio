import { supabase } from '$lib/supabaseClient';

const Ordering = {
	date: {
		column: 'timestamp',
		ascending: true
	},
	name: {
		column: 'title',
		ascending: true
	}
};

export async function load({ url }) {
	const orderBy = url.searchParams.has('orderBy') ? url.searchParams.get('orderBy') : 'date';
	const order = Ordering[orderBy];
	const ascending: boolean = url.searchParams.has('asc')
		? url.searchParams.get('asc') === 'true'
		: order.ascending;
	const { data } = await supabase.from('coding').select().order(order.column, { ascending });
	// console.log(data);
	// console.log(error);
	return { projects: data, ascending, orderBy };
}
