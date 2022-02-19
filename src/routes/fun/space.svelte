<script context="module" lang="ts">
    import {variables} from '$lib/variables'
    export async function load({fetch}) {
        try {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${variables.nasaKey}`);
            const json = await res.json();
            const url: string = json.hdurl;
            const date: string = json.date;
            const title: string = json.title;
            const description: string = json.explanation;
            const copyright: string = json.copyright !== null ? json.copyright : null
            return {
                props: {
                    url: url,
                    date: date,
                    title: title,
                    description: description,
                    copyright: copyright
                }
            }
        } catch (err) {
            console.error(err)
            return new Error(err)
        }
    
    }   
</script>

<script lang="ts">
    export let title: string;
    export let date: string;
    export let url: string;
    export let description: string;
    export let copyright: string;
</script>

<svelte:head>
    <title>Space</title>
    <meta name="description" content="Get the space image of the day!">
</svelte:head>

<style>
    * {
        text-align: center;
    }
    img {
        max-width: 50%;
    }
    
    #date {
        font-weight: bolder;
    }
</style>

<main>
    <span>
        <h1>{title}</h1>
        <img src={url} alt={title}>
    </span>
    {#if copyright}
        <h2>&copy; {copyright}</h2>
    {/if}
    <h2 id="date">{date}</h2>
    <h2>{description}</h2>
</main>
