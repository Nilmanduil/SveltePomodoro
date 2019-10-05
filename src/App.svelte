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
		color: purple;
		text-align: center;
	}
</style>

<h1>{name}</h1>
<Timer on:sessionEnd={handleSessionEnd} />
<ParametersForm />