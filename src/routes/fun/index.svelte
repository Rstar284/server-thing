<script context="module" lang="ts">
    export const prerender = true;
</script>

<script lang="ts">
	import {browser} from "$app/env";
	let UwU: string;
	browser ? UwU = "UwU ".repeat(screen.height) : UwU = "UwU ".repeat(150);
	export let uwu = UwU;
</script>

<svelte:head>
    <title>Images</title>
	<meta name="description" content="Rstar's Image CDN">
</svelte:head>

<section>
    <h1>{uwu}</h1>
	<img src="https://svelte.dev/tutorial/image.gif" alt="funny man dancing">
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>