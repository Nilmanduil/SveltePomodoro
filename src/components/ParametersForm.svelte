<script>
    import { params, defaultValues } from "../shared/parametersStore";

    let values = defaultValues;

    function handleInput() {
        params.set(values);
    }
</script>

<style>
    label {
        width: 200px;
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
</style>

<h2>Parameters</h2>
<form>
    <div>
        <label for="longBreak">Long break</label>
        <input type="checkbox"
               id="longBreak"
               name="longBreak"
               bind:checked={values.longBreak}
               on:change={handleInput} />
    </div>
    <div>
        <label for="longBreakDuration">Long break duration</label>
        <input type="number"
               min="0"
               id="longBreakDuration"
               name="longBreakDuration"
               bind:value={values.longBreakDuration}
               on:change={handleInput}/>
    </div>
    <div>
        <label for="longBreakEveryNthBreak">Long break every Nth break</label>
        <input type="number"
               min="0"
               id="longBreakEveryNthBreak"
               name="longBreakEveryNthBreak"
               bind:value={values.longBreakEveryNthBreak}
               on:change={handleInput}/>
    </div>
    <div>
        <label for="workDuration">Work duration</label>
        <input type="number"
               min="0"
               id="workDuration"
               name="workDuration"
               bind:value={values.workDuration}
               on:change={handleInput}/>
    </div>
    <div>
        <label for="breakDuration">Break duration</label>
        <input type="number"
               min="0"
               id="breakDuration"
               name="breakDuration"
               bind:value={values.breakDuration}
               on:change={handleInput}/>
    </div>
</form>