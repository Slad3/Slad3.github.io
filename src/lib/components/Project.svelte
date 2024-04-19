<script lang="ts">
	import Card from '@smui/card';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import githubLogo from '$lib/images/icons/githubLogo.png';
	import linkIcon from '$lib/images/icons/linkIcon.png';

	export let project = {
		title: '',
		typeOfProject: '',
		date: '',
		description: '',
		tags: [],
		links: {
			github: undefined,
			production: undefined
		}
	};

</script>

<Card>
	<div class="pub">
		<div class="titleBar">
			<h1 class="projectTitle">{project.title}</h1>
			{#if project.links.github}
				<div class="corner">
					<a href={project.links.github} target="_blank" rel="noopener noreferrer">
						<img src={githubLogo} alt="GitHub" class="icon" />
					</a>
				</div>
			{/if}
			{#if project.links.production}
				<div class="corner">
					<a href={project.links.production} target="_blank" rel="noopener noreferrer">
						<img src={linkIcon} alt="GitHub" class="icon" />
					</a>
				</div>
			{/if}
		</div>

		<p>{project.typeOfProject} <span style="float: right;">Last Updated: {project.date}</span></p>

		<p>{project.description}</p>

		<LayoutGrid style="padding: 0px">
			{#each project.tags as tag}
				<Cell span={3}>
					<p
						style="
                    border: dashed whitesmoke 1px;
                    height: 70%;
                    padding: 3px;
                    border-radius: 5px;
                    "
					>
						{tag}
					</p>
				</Cell>
			{/each}
		</LayoutGrid>
	</div>
</Card>

<style>
	.titleBar {
		display: flex;
		justify-content: space-between;
	}

	.projectTitle {
		width: 100%;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		margin: 10px;
		object-fit: contain;
	}
</style>
