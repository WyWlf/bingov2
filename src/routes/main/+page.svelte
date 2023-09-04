<script lang="ts">
	import Cookies from 'js-cookie';
    import audio from '../assets/music/mixkit-arcade-game-jump-coin-216.wav';
    import audio2 from '../assets/music/mixkit-game-click-1114.wav';
    import '../style.css'

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
</script>

<div class="title">
    <h1>MATH</h1>
    <h2>BINGO</h2>
</div>
<hr>
<div id="btn-div">
    <a href="/singleplayer" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}><button>Single Player Mode</button></a>
    <a href="/multiplayer" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}><button>Multiplayer Mode</button></a>
    <a href="/account" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}><button>View Account</button></a>
    <br><br>
    <button on:focus={audioEff} on:mouseover={audioEff}>Log out</button>
</div>

<style>
    #btn-div{
        display: grid;
        justify-content: center;
        row-gap: 2rem;
        padding: 5rem;
        color: white;
    }

    button {
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(to right,#4981ec,#8ca1c2);;
        border: 3px solid white;
        border-radius: 15px;
        height: 10vh;
        width: 50vw;
        font-size: 2rem;
    }

    @media (max-width: 768px) {
       button {
         font-size: 1.5rem;
         width: 70vw;
       }
}
</style>