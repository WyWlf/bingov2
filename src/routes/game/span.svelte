<script lang="ts">
    import correct from '../assets/music/correct.mp3';
    import incorrect from '../assets/music/wronganswer-37702.mp3';
	import { get } from 'svelte/store';
    export let a: any
    import {count, current_question, hp, comboCounter, time} from './config'
    let prop: any
    function getValue(this: any){
        let answer = parseFloat(this.innerText)
        const curr_question = get(current_question)
        if (answer != null && answer == curr_question){
                console.log('correct')
                time.set(60)
                comboCounter.update((prev) => prev+1)
                this.style.backgroundColor = 'blue'
                prop = 'none'
                let soundeff = new Audio(correct)
                soundeff.play()
            } else if (answer != null && answer != curr_question){
                console.log('wrong')
                time.set(60)
                comboCounter.set(0)
                hp.update((prev) => prev-1)
                let soundeff = new Audio(incorrect)
                soundeff.play()
                this.style.backgroundColor = 'brown'
                this.style.border = '3px solid brown'
                setTimeout(() => {
                    this.style.transition = '0.5s'
                    this.style.backgroundColor = 'transparent'
                    this.style.border = '3px solid white'
                }, 500);
            }
        count.update((prev) => prev + 1)
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span on:click={getValue} role="button" tabindex="0" style="pointer-events: {prop}">{a['answer']}</span>

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