<script>
    const SECONDS_IN_MINUTES = 60;
    export let workDuration = 25 * SECONDS_IN_MINUTES * 1000; // Duration of a work session in milliseconds
    export let pauseDuration = 5 * SECONDS_IN_MINUTES * 1000; // Duration of a pause session in milliseconds

    let isTimerPaused = false;

    let currentPhase = "waiting";
    let currentPhaseDuration;
    let startTime;

    let remainingTime = workDuration;

    function resetTimer() {
        isTimerPaused = false;
        currentPhase = "waiting";
        currentPhaseDuration = undefined;
        remainingTime = workDuration;
    }

    function pauseTimer() {
        isTimerPaused = true;
    }

    function resumeTimer() {
        // TODO
        isTimerPaused = false;
    }
</script>

<h2>{remainingTime}</h2>
<button on:click={resetTimer}>Stop</button>
{#if isTimerPaused}
    <button on:click={resumeTimer}>Start</button>
{:else}
    <button on:click={pauseTimer}>Pause</button>
{/if}