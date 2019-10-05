<script>
	import Timer from "./Timer.svelte";
	export let name;

	function handleSessionEnd(event) {
		// TODO
		console.info(event.detail);
	}
</script>

<style>
	h1 {
		color: purple;
		text-align: center;
	}
</style>

<h1>{name}</h1>
<Timer on:sessionEnd={handleSessionEnd}/>