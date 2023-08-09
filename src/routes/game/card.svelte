<script lang="ts">
	import { getContext } from 'svelte';
    import '../style.css'
    export let questionString: Array<any> = []
    setTimeout(() => {
        let question_iterator = 0
        let answer = eval(questionString[0])
       

    }, 100);
</script>
<div class="card-container">
    <div class="question">
        <div class="question-box">
            <span>{questionString[0]}</span>
        </div>
        <div>
            <p>Lives:</p>
            <span><img src="/src/routes/assets/images/heart.png" alt=""></span>
            <span><img src="/src/routes/assets/images/heart.png" alt=""></span>
            <span><img src="/src/routes/assets/images/heart.png" alt=""></span>
            <span><img src="/src/routes/assets/images/heart.png" alt=""></span>
            <span><img src="/src/routes/assets/images/heart.png" alt=""></span>
        </div>
        <div>
            <p>Combo counter:</p>
            <span><img src="/src/routes/assets/images/combo.gif" alt=""></span>
        </div>
        <div>
            <p>Timer:</p>
            <span><img src="/src/routes/assets/images/8bit-hrglass.gif" alt=""> 60s <img src="/src/routes/assets/images/8bit-hrglass.gif" alt=""></span>
        </div>
        <div>
            <p>Game mode: </p> <br>
            <span>Singe Player Mode</span>
        </div>
    </div>
    <div class="card">
        <span class="card-th">B</span>
        <span class="card-th">I</span>
        <span class="card-th">N</span>
        <span class="card-th">G</span>
        <span class="card-th">O</span>
        <slot></slot>
    </div>
</div>
<style>
    .question-box {
        height: 20vh;
        background-color: white;
        font-size: 3em;
        font-family: 'Lilita One', cursive;
        justify-content: center;
    }
    .card-container {
        display: flex;
        height: max-content;
        background-color: rgb(112, 166, 212);
        justify-content: flex-end;
    }
    .card {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        margin: 3em;
        text-align: center;
        border: 3px solid white;
        box-sizing: border-box;
        background: linear-gradient(to right,#b31ace,#39175c);
        box-shadow: 0px 0px 25px 5px white;
    }
    .card span {
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

    .card-th{
        font-size: 5em !important;
        color: #f2a7ff !important;
        box-shadow: 0px 0px 25px 5px white;
    }

    .question {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 3em;
    }

    .question div {
        display: flex;
        align-items: center;
        gap: 1em;
    }
    .question div span {
        display: flex;
        align-items: center;
        font-size: 3em;
        font-family: 'Lilita One', cursive;
    }
    .question p {
        font-family: 'Lilita One', cursive;
        font-size: 3em;
        color: white;
    }
    .question img {
        height: 75px;
        width: 75px;
    }
</style>