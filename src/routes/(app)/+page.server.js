import { redirect } from '@sveltejs/kit';
import { page } from '$app/stores';

/** @type {import('./$types').Actions} */
export const actions = {
	enquiry: async ({ cookies, request }) => {
		const data = await request.formData();
        console.log("enquire: ", data)

        const url = data.get('url');

        const success = false;

        const redirectUrl = `${url}?enquirySuccess=${success}`
        console.log("redirect to: ", redirectUrl)
		// TODO: send enquiry

		if (url) throw redirect(303, redirectUrl);
        else {
            console.log("url is null")
            return { success: true };
        }
	}
};
