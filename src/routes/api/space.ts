import {variables} from '$lib/variables'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
    try {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${variables.nasaKey}`);
        const json = await res.json();
        const url = json.hdurl;
        const date = json.date;
        const title = json.title;
        const description = json.explanation;
        return {
            props: {
                url: url,
                date: date,
                title: title,
                description: description
            }
        }
    } catch (err) {
        console.error(err)
        return new Error(err)
    }
    
}
