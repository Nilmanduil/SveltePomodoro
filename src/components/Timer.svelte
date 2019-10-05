<script>
    import { createEventDispatcher } from 'svelte';
    import { params } from '../shared/parametersStore';

    const SECONDS_IN_MINUTES = 60;
    let workDuration = 25 * SECONDS_IN_MINUTES; // Duration of a work session in seconds
    let breakDuration = 5 * SECONDS_IN_MINUTES; // Duration of a break session in seconds
    let longBreak = true;
    let longBreakDuration = 10 * SECONDS_IN_MINUTES; // Duration of a long break session in seconds
    let longBreakEveryNthBreak = 4; // Frequency of a long break

    let isTimerPaused = true;

    let currentPhase = "work";
    let currentPhaseDuration;
    let startTime;
    let timer;

    let remainingTime = workDuration;

    let dispatch = createEventDispatcher();

    params.subscribe((paramsValues) => {
        workDuration = paramsValues.workDuration * SECONDS_IN_MINUTES;
        breakDuration = paramsValues.breakDuration * SECONDS_IN_MINUTES;
        longBreak = paramsValues.longBreak;
        longBreakDuration = paramsValues.longBreakDuration * SECONDS_IN_MINUTES;
        longBreakEveryNthBreak = paramsValues.longBreakEveryNthBreak;
        resetTimer();
    });

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
                changeSession();
            }
        }, 1000);
    }

    function changeSession() {
        if (currentPhase === 'break') {
            currentPhase = 'work';
            remainingTime = workDuration;
        } else {
            currentPhase = 'break';
            remainingTime = breakDuration;
        }
        dispatch('sessionEnd', { session: currentPhase });
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