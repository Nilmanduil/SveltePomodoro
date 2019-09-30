<script>
	import Timer from "./Timer.svelte";
	export let name;
</script>

<style>
	h1 {
		color: purple;
		text-align: center;
	}
</style>

<h1>{name}</h1>
<Timer />