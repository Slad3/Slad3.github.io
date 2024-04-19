<script lang="ts">
	function scrollToBody() {
		var elmnt = document.getElementById('home');
		elmnt.scrollIntoView();
	}
</script>

<div id="front">
	<div class="typewriter">
		<h1 id="name">benbarcaskey.com</h1>
	</div>

	<div id="bottomButton">
		<button type="button" class="smoothScrollBtn" on:click={scrollToBody}>
			<p>Continue</p>
			<svg
				version="1.0"
				xmlns="http://www.w3.org/2000/svg"
				width="35px"
				height="35px"
				viewBox="0 0 512.000000 512.000000"
				preserveAspectRatio="xMidYMid meet"
				class="jsx-156389127"
			>
				<g
					transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
					fill="white"
					stroke="none"
					class="jsx-156389127"
				>
					<path
						d="M207 4822 l-207 -207 1278 -1278 1277 -1277 1275 1275 1275 1275 -210 210 -210 210 -1065 -1065 -1065 -1065 -1065 1065 c-586 586 -1067 1065 -1070 1065 -3 0 -98 -93 -213 -208z"
						class="jsx-156389127"
					></path>
					<path
						d="M207 2652 l-207 -207 1223 -1223 1222 -1222 110 0 110 0 1218 1218 c669 669 1217 1222 1217 1227 0 6 -92 102 -205 215 l-205 205 -1068 -1068 -1067 -1067 -1065 1065 c-586 586 -1067 1065 -1070 1065 -3 0 -98 -93 -213 -208z"
						class="jsx-156389127"
					></path>
				</g>
			</svg>
		</button>
	</div>
</div>

<style>
	#front {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: black;
		left: 0;
		/* height: calc(100vh - 40px); */
		height: calc(100vh);
		width: 99vw;
	}

	#bottomButton {
		color: white;
		font-size: 10px;
		font-weight: bolder;

		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 10px;
		outline: 1px dashed whitesmoke;

		float: bottom;
		text-align: center;
		position: absolute;

		left: calc(50% - 54px);
		top: calc(100% - 145px);
	}

	#bottomButton > .smoothScrollBtn {
		color: white;
		position: relative;
		border: none;
		background: none;
		font-size: 3em;
	}

	.typewriter h1 {
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		border-right: 0.15em solid orange; /* The typwriter cursor */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: 0 auto; /* Gives that scrolling effect as the typing happens */
		letter-spacing: 0.15em; /* Adjust as needed */
		animation:
			typing 2.0s steps(40, end),
			blink-caret 0.75s step-end infinite;
	}

	/* The typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: rgb(255, 255, 255);
		}
	}
</style>
