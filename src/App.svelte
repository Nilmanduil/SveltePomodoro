<script>
	import Timer from "./components/Timer.svelte";
	import ParametersForm from "./components/ParametersForm.svelte";
	import { onMount } from 'svelte';

	export let name;
	let soundNotification = new Audio("beep-08b.mp3");
	soundNotification.hidden = true;
	soundNotification.autoplay = false;
	onMount(() => {
		soundNotification.volume = 0;
		soundNotification.play()
			.then(() => {
				console.info("Notification done");
				soundNotification.volume = 1;
			})
			.catch((err) => {
				console.error(err);
				soundNotification.volume = 1;
			});
	});

	function handleSessionEnd(event) {
		console.info(event.detail);
		soundNotification.volume = 1;
		soundNotification.play()
			.then(() => {
				console.info("Notification done");
				soundNotification.play();
			})
			.catch((err) => {
				console.error(err);
			});
	}
</script>

<style>
	h1 {
		color: #FFF;
		text-align: center;
	}

	.timer, .parameters, .mention {
		background: #FBB;
		max-width: 800px;
		width: 80%;
		margin: 10px auto;
		border: solid 1px #000;
		padding: 10px;
	}

	.timer {
		text-align: center;
	}

	.mention a {
		color: #400;
	}
</style>

<h1>{name}</h1>
<div class="timer">
	<Timer on:sessionEnd={handleSessionEnd} />
</div>
<div class="parameters">
	<ParametersForm />
</div>

<div class="mention">Favicon made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>