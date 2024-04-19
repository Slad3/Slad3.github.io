<script lang="ts">
	import IconButton, { Icon } from '@smui/icon-button';
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';

	const content = [
		{
			title: 'How Tall are you?',
			content: [
				"Technically 6'4.5\", but 6'4\" just rolls off the tongue better. Also, don't lie about your height; Anyone can literally take a tape measure and get an exact objective numerical value of how tall you are."
			]
		},
		{
			title: 'Non Tech/STEM Related Hobbies?',
			content: [
				"I love digging into music whether it's analyzing the science/acadamia of music theory, digging into the artistic vision and messageing a certain song/album portrays, studying the culural impact a certain piece of music has, discovering the ways music can psychologically impact humans and control not only the way we think but how we feel in a situation, or just finding songs that hit my soul.",
				"I also absolutely love putting in headphones and going for long walks. I don't get why people hate walks, it's cathartic. Plus you can walk to a place and get food and not feel guilty about yourself.",
				"Some other non tech hobbies I enjoy include maps/geography, analyzing literature (movies, music, TV Shows, pretty much everything except for fiction books), psychology, collecting decks of cards from places I've been, driving, and bingeing YouTube. "
			]
		},
		{
			title: 'Tech/STEM Related Interests/Hobbies',
			content: [
				'Tech/STEM related kind hobbies to me include anything related to computers or raw science. ',
				" The biggest one for me by far is computer science, both software and hardware (though I'm more of a software person). I like programming, but I love the possibilities and practical applications of programming more. From everything from data analysis, small scale electronics (raspberry pi/Arduino), to frontend and UI developement. ",
				' I love building computers and everything that goes into building and upgrading computers. ',
				' As you can tell from this site I love everything data science from the ability to pull numerical data from anything, to transforming that data in a way that we can visualize, comprehend, or utilize in a functional manner. This includes data visualization, statistical analysis, machine/deep learning, etc. ',
				' Some other STEM related interets include professional audio production, astronomy, some occasional gaming, '
			]
		}
	];

	let panels = {
		'How Tall are you?': false
	};
</script>

<dev class="block aboutme">
	<h1 class="sectionTitle">About Me</h1>
	{#each content as qa}
		<Accordion>
			<Panel bind:open={panels[qa.title]} style="background-color: transparent">
				<Header
					style="color: whitesmoke;
                 background-color: rgba(28, 28, 28, 0.8);"
				>
					<h1>{qa.title}</h1>
					<IconButton slot="icon" toggle pressed={panels['How Tall are you?']}>
						<Icon class="material-icons" on></Icon>
						<Icon class="material-icons"></Icon>
					</IconButton>
				</Header>

				<Content style="color: whitesmoke;">
					{#each qa.content as cont}
						<p>{cont}</p>
					{/each}
				</Content>
			</Panel>
		</Accordion>
	{/each}
</dev>

<style>
	.aboutme {
		max-width: 1280px;
	}
</style>
