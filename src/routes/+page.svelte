<script lang="ts">
	import AboutMe from '$lib/components/AboutMe.svelte';
	import AboutThisSite from '$lib/components/AboutThisSite.svelte';
	import CoverSlide from '$lib/components/CoverSlide.svelte';
	import Publications from '$lib/components/Publications.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<CoverSlide />

<section id="home">
	<AboutThisSite />
	<Publications />
	<AboutMe />
</section>

<style>

</style>
