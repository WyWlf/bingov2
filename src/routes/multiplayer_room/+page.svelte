<script lang="ts">
	import Cookies from 'js-cookie';
    import audio from '../assets/music/mixkit-arcade-game-jump-coin-216.wav';
    import audio2 from '../assets/music/mixkit-game-click-1114.wav';
    import '../style.css'
    Cookies.set('host', 'false')
    Cookies.set('host_name', '')
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
    function host(){
        Cookies.remove('multiplayer_session')
        Cookies.set('host', 'true')
    }
</script>
<html lang="ts">
    <div class="title">
        <h1>MATH</h1>
        <h2>BINGO</h2>
    </div>
    <hr>
    <div id="btn-div">
        <p>Create room for multiplayer</p>
        <a href="/game_multiplayer" on:focus={audioEff} on:mouseover={audioEff} on:click={() => {clickEff(); host()}}><button>Operations</button></a>
        <a href="/#" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff} class="disabled"><button>Geometry</button></a>
        <a href="/#" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff} class="disabled"><button>Fractions</button></a>
        <br><br>
        <a href="/multiplayer" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}><button>Back</button></a>
    </div>
</html>

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

    p {
        justify-self: center;
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
       button {
         font-size: 1.5rem;
         width: 70vw;
       }
    }
    @media (max-width: 468px) {
        p {
            font-size: 1rem;
        }
    }
</style>