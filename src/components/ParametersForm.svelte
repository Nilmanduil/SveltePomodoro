<script>
    import { params } from "../shared/parametersStore";

    const defaultValues = {
        longBreak: true,
        longBreakDuration: 10,
        breakDuration: 5,
        workDuration: 25,
        longBreakEveryNthBreak: 4
    };
    let values = defaultValues;

    function handleInput() {
        params.set(values);
    }
</script>

<style>
    .inline {
        display: inline;
    }
</style>

<h3>Parameters</h3>
<form>
    <div>
        <label for="longBreak" class="inline">Long break</label>
        <input type="checkbox"
               id="longBreak"
               name="longBreak"
               bind:checked={values.longBreak}
               on:change={handleInput} />
    </div>
    <div>
        <label for="longBreakDuration" class="inline">Long break duration</label>
        <input type="number"
               min="0"
               id="longBreakDuration"
               name="longBreakDuration"
               bind:value={values.longBreakDuration}
               on:change={handleInput}/>
    </div>
    <div>
        <label for="longBreakEveryNthBreak" class="inline">Long break every Nth break</label>
        <input type="number"
               min="0"
               id="longBreakEveryNthBreak"
               name="longBreakEveryNthBreak"
               bind:value={values.longBreakEveryNthBreak}
               on:change={handleInput}/>
    </div>
    <div>
        <label for="workDuration" class="inline">Work duration</label>
        <input type="number"
               min="0"
               id="workDuration"
               name="workDuration"
               bind:value={values.workDuration}
               on:change={handleInput}/>
    </div>
    <div>
        <label for="breakDuration" class="inline">Break duration</label>
        <input type="number"
               min="0"
               id="breakDuration"
               name="breakDuration"
               bind:value={values.breakDuration}
               on:change={handleInput}/>
    </div>
</form>