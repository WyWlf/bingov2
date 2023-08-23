<script lang="ts">
    import correct from '../assets/music/correct.mp3';
    import incorrect from '../assets/music/wronganswer-37702.mp3';
	import { get } from 'svelte/store';
    export let a: any
    export let i: any
    import {count, current_question, hp, comboCounter, time, win, answer_matrix, win_status, correct_count, wrong_count} from './config'
	import { onMount } from 'svelte';
    let prop: any
    const winCondition = get(win)

    function checkWin(main: any, answer: any){
        for (let x=0; x < 12; x++){
            let check = main[x].every(i => answer.includes(i))
            if (check == true){
                return true
            }
        }
    }

    function getValue(this: any){
        let answer = parseFloat(this.innerText)
        let matrix = this.id
        const curr_question = get(current_question)
        if (answer != null && answer == curr_question){
                console.log('correct')
                correct_count.update(prev => prev + 1)
                answer_matrix.update(prev => [...prev, matrix])

                    let bool = checkWin(winCondition, get(answer_matrix))
                    if (bool == true){
                        win_status.set(1)
                    }

                time.set(60)
                comboCounter.update((prev) => prev+1)
                this.style.backgroundColor = 'blue'
                prop = 'none'
                let soundeff = new Audio(correct)
                soundeff.play()
            } else if (answer != null && answer != curr_question){
                console.log('wrong')
                wrong_count.update(prev => prev + 1)
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

    let row_key = ''

        if (i < 5){
            row_key = 'a'+i
        } else if (i < 10) {
            row_key = 'b'+i
        } else if (i < 15) {
            row_key = 'c'+i
        } else if (i < 20) {
            row_key = 'd'+i
        } else if (i < 25) {
            row_key = 'e'+i
        }
        
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span on:click={getValue} role="button" tabindex="0" style="pointer-events: {prop}" id={row_key}>{a['answer']}</span>

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