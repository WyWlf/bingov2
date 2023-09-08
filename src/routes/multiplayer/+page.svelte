<script lang="ts">
	import Cookies from 'js-cookie';
    import audio from '../assets/music/mixkit-arcade-game-jump-coin-216.wav';
    import audio2 from '../assets/music/mixkit-game-click-1114.wav';
    import { Modal } from '@svelteuidev/core';
    import { io } from '$lib/webSocketConnection.js';
    import '../style.css'
    Cookies.remove('multiplayer_session')
    Cookies.set('host', 'false')
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
    let opened = false
    let closeOnClickOutside = true
    let closeOnEscape = true
    function openModal(){
        opened = true
        clickEff()
    }
    let code = ''
    function joinGame(){
        io.emit('join', {
            room: code,
            player: Cookies.get('username')
        })
    }
    io.on('no-room', ()=> {
            console.log('Room not found')
        })
    io.on('room-found', data => {
        if (code == data['room'] && data != false){
            Cookies.set('multiplayer_session', data['room'])
            window.location.href = '/game_multiplayer'
            console.log('found')
        } else if (data == false){
            Cookies.remove('mutiplayer_session')
            console.log('cannot rejoin')
        }
    })
</script>
<html lang="ts">
    <div class="title">
        <h1>MATH</h1>
        <h2>BINGO</h2>
    </div>
    <hr>
    <div id="btn-div">
        <p>Multiplayer Mode</p>
        <a href="/multiplayer_room" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}><button>Create room</button></a>
        <button on:focus={audioEff} on:mouseover={audioEff} on:click={openModal}>Join room</button>
        <br><br>
        <a href="/main" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}><button>Back</button></a>
    </div>
</html>
<Modal centered {opened} on:close={()=> {opened = false}} target='body' title="Join room" overflow="inside"  {closeOnClickOutside} {closeOnEscape}>
    <div class="modal-container">
        <input type="text" name="" id="" bind:value={code}>
        <button on:click={joinGame}>Join</button>
        <br>
    </div>
</Modal>
<style>
    .modal-container {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
    }
    .modal-container input {
        width: 50%;
        height: 3vh;
        border-radius: 1rem;
        border: 1px solid rgb(11, 85, 85);
    }
    .modal-container button {
        width: 50%;
        height: 4vh;
        font-size: 1rem;
        border-radius: 1rem;
        border: 1px solid rgb(255, 255, 255);
    }

    .modal-container button:hover {
        box-shadow: 0px 0px 13px 1px blue;
    }
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
</style>