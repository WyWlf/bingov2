<script lang="ts">
	import Cookies from 'js-cookie';
	import audio from '../assets/music/mixkit-arcade-game-jump-coin-216.wav';
	import audio2 from '../assets/music/mixkit-game-click-1114.wav';
	import { Modal } from '@svelteuidev/core';
	import { io } from '$lib/webSocketConnection.js';
	import Loader from '../loader.svelte';
	import '../style.css';
	Cookies.remove('multiplayer_session');
	Cookies.remove('host_name');
	Cookies.set('host', 'false');
	let user: any = Cookies.get('username');
	let type: string | undefined = Cookies.get('type');
	$: show = false;
	$: blurEffect = '';
	$: message = '';
	function audioEff() {
		let sf = new Audio(audio);
		sf.volume = 0.3;
		sf.play();
	}
	function clickEff() {
		let sf = new Audio(audio2);
		sf.volume = 0.3;
		sf.play();
	}
	let opened = false;
	let closeOnClickOutside = true;
	let closeOnEscape = true;
	function openModal() {
		opened = true;
		clickEff();
	}
	let code = '';
	function joinGame() {
		io.emit('join', {
			room: code,
			player: Cookies.get('username')
		});
	}
	io.on('no-room', () => {
		message = 'Room not found';
	});
	io.on('room-found', (data) => {
		if (code == data['room'] && data != false) {
			Cookies.set('multiplayer_session', data['room']);
			window.location.href = '/game_multiplayer';
			message = 'Room found';
		} else if (data == false) {
			Cookies.remove('mutiplayer_session');
			message = 'Cannot reconnect to this match';
		}
	});
</script>

<html lang="ts">
	<div class="title">
		<h1>MATH</h1>
		<h2>BINGO</h2>
	</div>
	<hr />
	{#if show == true}
		<div class="loader-container">
			<Loader />
		</div>
	{/if}
	<div id="btn-div" class={blurEffect}>
		<p>Multiplayer Mode</p>
		<!-- {#if type == 'Teacher'} -->
			<a href="/multiplayer_room" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}
				><button
					on:click={() => {
						show = true;
						blurEffect = 'blurred';
					}}>Create room</button
				></a
			>
		<!-- {:else}
			<small>Creating multiplayer matches is only available for Teacher type accounts.</small>
		{/if} -->
		<button on:focus={audioEff} on:mouseover={audioEff} on:click={openModal}>Join room</button>
		<br /><br />
		<a href="/main" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}
			><button>Back</button></a
		>
	</div>
</html>
<Modal
	centered
	{opened}
	on:close={() => {
		opened = false;
	}}
	target="body"
	title="Join room"
	overflow="inside"
	{closeOnClickOutside}
	{closeOnEscape}
>
	<div class="modal-container">
		<input type="text" name="" id="" bind:value={code} />
		<span style="color: red">{message}</span>
		<button on:click={joinGame}>Join</button>
		<br />
	</div>
</Modal>

<style>
	.blurred {
		opacity: 0.3;
		pointer-events: none;
	}
	.loader-container {
		position: absolute;
		top: 50%;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		text-align: center;
		z-index: 100;
	}
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
	#btn-div {
		display: grid;
		justify-content: center;
		row-gap: 2rem;
		padding: 5rem;
		color: white;
	}

	button {
		font-family: 'Roboto', sans-serif;
		background: linear-gradient(to right, #4981ec, #8ca1c2);
		border: 3px solid white;
		border-radius: 15px;
		height: 10vh;
		width: 50vw;
		font-size: 2rem;
		color: black;
	}

	p {
		justify-self: center;
		font-size: 1.5rem;
	}
	small {
		color: whitesmoke;
		justify-self: center;
		scale: 1.1;
	}
	@media (max-width: 768px) {
		button {
			font-size: 1.5rem;
			width: 70vw;
		}
	}
</style>
