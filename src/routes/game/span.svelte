<script lang="ts">
    export let a: any
    import {user_answer, current_tile} from './config'
    function getValue(this: any){
        user_answer.set(parseFloat(this.innerText))
        current_tile.subscribe(value => {
            if (value != null && value == 1){

            } else if (value != null && value == 1){

            }
        })
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