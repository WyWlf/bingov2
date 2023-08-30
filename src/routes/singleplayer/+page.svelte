<script lang="ts">
	import Cookies from 'js-cookie';
    import audio from '../assets/music/mixkit-arcade-game-jump-coin-216.wav';
    import audio2 from '../assets/music/mixkit-game-click-1114.wav';
    import '../style.css'
	import { onMount } from 'svelte';
    let user: any = Cookies.get('username')
    function audioEff(){
        let sf = new Audio(audio);
        sf.volume = 0.3
        sf.play()
    }
    function clickEff(){
        let sf = new Audio(audio2);
        sf.volume = 0.3
        sf.play()
    }
    if (localStorage['token'] == null || localStorage['token'] == 0){
        window.location.reload()
        localStorage['token'] = 1
    }
</script>
<html lang="ts">
    <div class="title">
        <h1>MATH</h1>
        <h2>BINGO</h2>
    </div>
    <hr>
    <div id="btn-div">
        <p>Single Player Mode</p>
        <a href="/game" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}><button>Operations</button></a>
        <a href="/" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}><button>Geometry</button></a>
        <a href="/" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}><button>Fractions</button></a>
        <br><br>
        <a href="/main" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}><button>Back</button></a>
    </div>
</html>

<style>
    #btn-div{
        display: grid;
        justify-content: center;
        row-gap: 2em;
        padding: 5em;
        color: white;
    }

    button {
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(to right,#4981ec,#8ca1c2);;
        border: 3px solid white;
        border-radius: 15px;
        height: 10vh;
        width: 25vw;
        font-size: 2em;
    }

    p {
        justify-self: center;
        font-size: 1.5em;
    }
</style>