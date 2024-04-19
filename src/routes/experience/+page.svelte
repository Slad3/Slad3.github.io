<script>
	import AboutExeprience from '$lib/components/AboutExeprience.svelte';
	import Publications from '$lib/components/Publications.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
</script>

<svelte:head>
	<title>Experience</title>
	<meta name="description" content="Professional Experience" />
</svelte:head>

<section>
    <AboutExeprience/>
	<Skills />
    <Projects />
	<Publications />

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
