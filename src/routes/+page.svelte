<script lang="ts">
  import AboutMe from "$lib/components/AboutMe.svelte";
  import AboutThisSite from "$lib/components/AboutThisSite.svelte";
  import CoverSlide from "$lib/components/CoverSlide.svelte";
  import Projects from "$lib/components/Projects.svelte";
</script>

<svelte:head>
  <title>benbarcaskey.com</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<CoverSlide />

<section id="home">
  <AboutThisSite />
  <Projects />
  <AboutMe />
</section>

<style>
</style>
