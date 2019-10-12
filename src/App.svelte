<script>
	import Timer from "./components/Timer.svelte";
	import ParametersForm from "./components/ParametersForm.svelte";
    import { params, defaultValues } from './shared/parametersStore';
	import { onMount } from 'svelte';

	export let name;
	let backgroundImage = defaultValues.background;
	let soundNotification = new Audio("tone-beep.wav");
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

		params.subscribe((paramsValues) => {
            backgroundImage = paramsValues.background;
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

    .background {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #B11;
        z-index: -100;
    }

    .bg1 {
        background-image: url("bg1.jpg");
        background-size: cover;
    }

    .bg2 {
        background-image: url("bg2.jpg");
        background-size: cover;
    }

    .bg3 {
        background-image: url("bg3.jpg");
        background-size: cover;
    }

    .bg4 {
        background-image: url("bg4.jpg");
        background-size: cover;
    }

	a {
		color: #400;
	}
</style>

<div class="background"
     class:bg1={backgroundImage === 1}
     class:bg2={backgroundImage === 2}
     class:bg3={backgroundImage === 3}
     class:bg4={backgroundImage === 4}></div>

<h1>{name}</h1>
<div class="timer">
    <Timer on:sessionEnd={handleSessionEnd} />
</div>
<div class="parameters">
    <ParametersForm />
</div>
<div class="mention" style="text-align: center">
    <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" title="Wikipedia definition of Pomodoro">Pomodoro method</a><br />
    <a href="https://github.com/Nilmanduil/SveltePomodoro" target="_blank" title="GitHub repository">GitHub Repository of the application</a>
</div>
<div class="mention">Favicon made by <a href="https://www.flaticon.com/authors/smashicons" target="_blank" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a></div>
