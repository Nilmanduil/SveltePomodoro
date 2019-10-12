<script>
    import { params, defaultValues } from "../shared/parametersStore";
    import { onMount } from 'svelte';

    let values = defaultValues;
    let backgroundSelect;
    let backgroundValue = defaultValues.background;

    function handleInput() {
        values.background = backgroundSelect.selectedIndex;
        backgroundValue = backgroundSelect.selectedIndex;
        params.set(values);
    }

    onMount(() => {
        backgroundSelect = document.getElementById("backgroundSelect");
        backgroundSelect.selectedIndex = backgroundValue;
    });
</script>

<style>
    label {
        width: 250px;
        height: 34px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        line-height: 32px;
    }

    input[type=checkbox] {
        width: 32px;
        height: 32px;
        display: inline;
        position: relative;
        margin-bottom: 0.5em;
    }

    input {
        vertical-align: top;
    }

    input, select {
        width: 220px;
    }
</style>

<h2>Parameters</h2>
<form>
    <div>
        <label for="workDuration">Work duration (minutes)</label>
        <input type="number"
               min="0"
               id="workDuration"
               name="workDuration"
               bind:value={values.workDuration}
               on:change={handleInput}/>
    </div>
    <div>
        <label for="breakDuration">Break duration (minutes)</label>
        <input type="number"
               min="0"
               id="breakDuration"
               name="breakDuration"
               bind:value={values.breakDuration}
               on:change={handleInput}/>
    </div>
    <div>
        <label for="longBreak">Activate long breaks</label>
        <input type="checkbox"
               id="longBreak"
               name="longBreak"
               bind:checked={values.longBreak}
               on:change={handleInput} />
    </div>
    <div>
        <label for="longBreakDuration">Long break duration (minutes)</label>
        <input type="number"
               min="0"
               id="longBreakDuration"
               name="longBreakDuration"
               bind:value={values.longBreakDuration}
               disabled={!values.longBreak}
               on:change={handleInput}/>
    </div>
    <div>
        <label for="longBreakEveryNthBreak">Long break every Nth break</label>
        <input type="number"
               min="0"
               id="longBreakEveryNthBreak"
               name="longBreakEveryNthBreak"
               bind:value={values.longBreakEveryNthBreak}
               disabled={!values.longBreak}
               on:change={handleInput}/>
    </div>
    <div>
        <label for="backgroundSelect">Background</label>
        <select id="backgroundSelect"
                name="backgroundSelect"
                on:change={handleInput}>
            <option value="0">Dark red background</option>
            <option value="1">Cherry tomato and blur</option>
            <option value="2">Cherry tomato in the dark</option>
            <option value="3">Tomato slices</option>
            <option value="4">Big tomato</option>
        </select>
    </div>
</form>