<script>
    import { createEventDispatcher } from 'svelte';
    import { params, defaultValues } from '../shared/parametersStore';

    const SECONDS_IN_MINUTES = 60;
    let workDuration = defaultValues.workDuration * SECONDS_IN_MINUTES; // Duration of a work session in seconds
    let breakDuration = defaultValues.breakDuration * SECONDS_IN_MINUTES; // Duration of a break session in seconds
    let longBreak = defaultValues.longBreak;
    let longBreakDuration = defaultValues.longBreakDuration * SECONDS_IN_MINUTES; // Duration of a long break session in seconds
    let longBreakEveryNthBreak = defaultValues.longBreakEveryNthBreak; // Frequency of a long break
    let breaks = 0;

    let isTimerPaused = true;

    let currentPhase = "work";
    let currentPhaseDuration;
    let startTime;
    let timer;
    $: isLongBreak = (currentPhase === "break" && longBreak && breaks % longBreakEveryNthBreak === 0);
    $: minutes = Math.floor(remainingTime / SECONDS_IN_MINUTES);
    $: seconds = remainingTime % SECONDS_IN_MINUTES;

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
        breaks = 0;
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
        dispatch('sessionEnd', { session: currentPhase });
        if (currentPhase === 'break') {
            currentPhase = 'work';
            remainingTime = workDuration;
        } else {
            currentPhase = 'break';
            breaks += 1;
            remainingTime = (longBreak && breaks % longBreakEveryNthBreak === 0 ? longBreakDuration : breakDuration);
        }
    }
</script>

<style>
    h2 {
        text-align: center;
        margin-top: 0px;
    }

    h2 .time {
        color: #400;
    }

    h3 {
        text-align: center;
        padding: 5px;
        display: inline-block;
        border: dotted 3px #400;
        background: #FDD;
        font-style: italic;
        margin-top: 0;
    }

    .actions {
        text-align: center;
    }

    .actions button {
        border: solid 3px #400;
        background: #800;
        color: #FFDDDD;
        border-radius: 20px;
        margin: 0px 5px;
        font-size: 1.2em;
    }
</style>

<h2>Remaining :<br/><span class="time">{minutes} minute{#if minutes > 1}s{/if} {seconds} second{#if seconds > 1}s{/if}</span></h2>
<h3>
    {#if currentPhase === 'work'}
        Work session
    {:else if isLongBreak}
        Long break session
    {:else}
        Break session
    {/if}
</h3>
<div class="actions">
    <button on:click={resetTimer}>Stop</button>
    {#if isTimerPaused}
        <button on:click={resumeTimer}>Start</button>
    {:else}
        <button on:click={pauseTimer}>Pause</button>
    {/if}
</div>