<script>
    const SECONDS_IN_MINUTES = 60;
    export let workDuration = 25 * SECONDS_IN_MINUTES; // Duration of a work session in seconds
    export let breakDuration = 5 * SECONDS_IN_MINUTES; // Duration of a break session in seconds

    let isTimerPaused = false;

    let currentPhase = "waiting";
    let currentPhaseDuration;
    let startTime;
    let timer;

    let remainingTime = workDuration;

    function resetTimer() {
        isTimerPaused = false;
        currentPhase = "waiting";
        currentPhaseDuration = undefined;
        clearInterval(timer);
        remainingTime = workDuration;
    }

    function pauseTimer() {
        isTimerPaused = true;
        clearInterval(timer);
    }

    function resumeTimer() {
        // TODO
        isTimerPaused = false;
        refreshTimer();
    }

    function refreshTimer() {
        timer = setInterval(() => {
            remainingTime -= 1;
        }, 1000);
    }
</script>

<h2>{remainingTime}</h2>
<button on:click={resetTimer}>Stop</button>
{#if isTimerPaused}
    <button on:click={resumeTimer}>Start</button>
{:else}
    <button on:click={pauseTimer}>Pause</button>
{/if}