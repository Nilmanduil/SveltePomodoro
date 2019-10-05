<script>
    const SECONDS_IN_MINUTES = 60;
    export let workDuration = 25 * SECONDS_IN_MINUTES; // Duration of a work session in seconds
    export let breakDuration = 5 * SECONDS_IN_MINUTES; // Duration of a break session in seconds

    let isTimerPaused = true;

    let currentPhase = "work";
    let currentPhaseDuration;
    let startTime;
    let timer;

    let remainingTime = workDuration;

    function resetTimer() {
        isTimerPaused = true;
        currentPhase = "work";
        currentPhaseDuration = undefined;
        clearInterval(timer);
        remainingTime = workDuration;
    }

    function pauseTimer() {
        isTimerPaused = true;
        clearInterval(timer);
    }

    function resumeTimer() {
        isTimerPaused = false;
        refreshTimer();
    }

    function refreshTimer() {
        timer = setInterval(() => {
            remainingTime -= 1;
            if (remainingTime <= 0) {
                changePhase();
            }
        }, 1000);
    }

    function changePhase() {
        if (currentPhase === 'break') {
            currentPhase = 'work';
            remainingTime = workDuration;
            // TODO Send event
        } else {
            currentPhase = 'break';
            remainingTime = breakDuration;
        }
    }
</script>

<h2>Remaining :<br/>{Math.floor(remainingTime / SECONDS_IN_MINUTES)} minutes {remainingTime % SECONDS_IN_MINUTES} seconds</h2>
<h3>
    {#if currentPhase === 'work'}
        Work session
    {:else}
        Break session
    {/if}
</h3>
<div>
    <button on:click={resetTimer}>Stop</button>
    {#if isTimerPaused}
        <button on:click={resumeTimer}>Start</button>
    {:else}
        <button on:click={pauseTimer}>Pause</button>
    {/if}
</div>