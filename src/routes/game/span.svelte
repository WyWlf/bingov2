<script lang="ts">
	import { writable } from "svelte/store";

    export let a: any
    export let user_answer: any
    function getValue(this: any){
        user_answer = writable(parseInt(this.innerText))
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span on:click={getValue} role="button" tabindex="0">{a['answer']}</span>

<style>
    span {
        color: skyblue;
        font-size: 2em;
        display: flex;
        border: 3px solid white;
        width: 250px;
        align-items: center;
        justify-content: center;
        height: 140px;
        font-family: 'Lilita One', cursive;
    }

    span:hover{
        box-shadow: 0px 0px 15px 5px white;
    }
</style>