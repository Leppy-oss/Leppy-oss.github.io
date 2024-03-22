<script>
	import Counter from "./Counter.svelte";
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
	import { onMount, onDestroy } from "svelte";
	import { slide, fly, scale, fade, draw } from "svelte/transition";

	import { backOut } from "svelte/easing";
	import Typewriter from "svelte-typewriter";

	const descriptionWords = [
		"designer.",
		"programmer.",
		"team member.",
		"learner.",
	];

	const descriptionWordColors = ["red", "blue", "green", "yellow"];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>

	<div class="rotating-description-text">
		<p
			transition:scale
			id="rotating-description"
			style="display:inline-block"
		>
			Hi! I'm Leppy-oss. I am a
			<Typewriter mode="loop" interval={[40, 50, 60]}>
				{#each descriptionWords as word, i}
					<span class="rotating-carousel rnbw-text">{word}</span>
				{/each}
			</Typewriter>
		</p>
	</div>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.rotating-description-text {
		display: inline-block;
	}

	#rotating-description {
		font-size: 4rem;
	}

	.rnbw-text {
		font-weight: 600;
		font-size: 70px;
		line-height: 65px;
		letter-spacing: 10px;
		text-align: center;
		text-transform: uppercase;
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		background-size: 400%;
		animation: move 5s ease infinite;
		background-image: linear-gradient(
			68.7deg,
			rgba(29, 173, 235, 1) 13.2%,
			rgba(137, 149, 250, 1) 29.8%,
			rgba(229, 109, 212, 1) 48.9%,
			rgba(255, 68, 128, 1) 68.2%,
			rgba(255, 94, 0, 1) 86.4%
		);
	}

	@keyframes move {
		0%,
		100% {
			background-position: 200% 0%;
		}

		50% {
			background-position: 0% 200%;
		}
	}
</style>
