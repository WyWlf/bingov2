<script lang="ts">
	import { io } from '$lib/webSocketConnection.js';
	import { gameInfo, scores } from './config';
	import { get } from 'svelte/store';
	import { Modal } from '@svelteuidev/core';
	//@ts-ignore
	import FaInfoCircle from 'svelte-icons/fa/FaInfoCircle.svelte';
	import Cookies from 'js-cookie';
	import { onDestroy } from 'svelte';
	let boxes = Array(25);
	let score: any;
	let gameData: any;
	let opened = false;
	let closeOnClickOutside = false;
	let closeOnEscape = false;
	io.emit('correct', {
		player: Cookies.get('username'),
		game: Cookies.get('multiplayer_session')
	});
	io.on('player-scores', (data) => {
		scores.set(data);
	});
	gameInfo.subscribe((val) => {
		gameData = val;
	});
	scores.subscribe((val) => {
		score = val;
	});

	$: if (gameData['ended'] == true) {
		opened = true;
		console.log(gameData['winner']);
	}

	onDestroy(() => {
		if (gameData['players'].length - 1 <= 0) {
			io.emit('closed', {
				room: Cookies.get('multiplayer_session')
			});
		}
	});
</script>

<div class="container">
	{#key gameData}
		{#each gameData['origin_player'] as player}
			{#if player != gameData['host'] && !gameData['lost'].includes(player) && gameData['players'].includes(player)}
				<div class="player-container">
					<div class="dropdown">
						<FaInfoCircle />
					</div>
					<div class="user-header">{player}</div>
					<br /><br />
					<div class="user-card">
						{#each boxes as box, i}
							{#if i < 5}
								{#if score[player] != null && score[player].includes('a' + i)}
									<div class="box" id="a{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="a{i}" style="">x</div>
								{/if}
							{:else if i < 10}
								{#if score[player] != null && score[player].includes('b' + i)}
									<div class="box" id="b{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="b{i}" style="">x</div>
								{/if}
							{:else if i < 15}
								{#if score[player] != null && score[player].includes('c' + i)}
									<div class="box" id="c{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="c{i}" style="">x</div>
								{/if}
							{:else if i < 20}
								{#if score[player] != null && score[player].includes('d' + i)}
									<div class="box" id="d{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="d{i}" style="">x</div>
								{/if}
							{:else if i < 25}
								{#if score[player] != null && score[player].includes('e' + i)}
									<div class="box" id="e{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="e{i}" style="">x</div>
								{/if}
							{/if}
						{/each}
					</div>
				</div>
			{:else if player != gameData['host'] && gameData['lost'].includes(player)}
				<div class="player-container" style="background-color: #FF3333; border: 2px solid blue">
					<div class="dropdown">
						<FaInfoCircle />
					</div>
					<div class="user-header" style="color: black">{player}</div>
					<br /><br />
					<div class="user-card">
						{#each boxes as box, i}
							{#if i < 5}
								{#if score[player] != null && score[player].includes('a' + i)}
									<div class="box" id="a{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="a{i}" style="">x</div>
								{/if}
							{:else if i < 10}
								{#if score[player] != null && score[player].includes('b' + i)}
									<div class="box" id="b{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="b{i}" style="">x</div>
								{/if}
							{:else if i < 15}
								{#if score[player] != null && score[player].includes('c' + i)}
									<div class="box" id="c{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="c{i}" style="">x</div>
								{/if}
							{:else if i < 20}
								{#if score[player] != null && score[player].includes('d' + i)}
									<div class="box" id="d{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="d{i}" style="">x</div>
								{/if}
							{:else if i < 25}
								{#if score[player] != null && score[player].includes('e' + i)}
									<div class="box" id="e{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="e{i}" style="">x</div>
								{/if}
							{/if}
						{/each}
					</div>
				</div>
			{:else if player != gameData['host'] && !gameData['players'].includes(player)}
				<div class="player-container" style="background-color: gray; border: 2px solid blue">
					<div class="dropdown">
						<FaInfoCircle />
					</div>
					<p style="margin: auto; color: white">This player has lost connection...</p>
					<br />
					<div class="user-header" style="color: black">{player}</div>
					<br /><br />
					<div class="user-card">
						{#each boxes as box, i}
							{#if i < 5}
								{#if score[player] != null && score[player].includes('a' + i)}
									<div class="box" id="a{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="a{i}" style="">x</div>
								{/if}
							{:else if i < 10}
								{#if score[player] != null && score[player].includes('b' + i)}
									<div class="box" id="b{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="b{i}" style="">x</div>
								{/if}
							{:else if i < 15}
								{#if score[player] != null && score[player].includes('c' + i)}
									<div class="box" id="c{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="c{i}" style="">x</div>
								{/if}
							{:else if i < 20}
								{#if score[player] != null && score[player].includes('d' + i)}
									<div class="box" id="d{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="d{i}" style="">x</div>
								{/if}
							{:else if i < 25}
								{#if score[player] != null && score[player].includes('e' + i)}
									<div class="box" id="e{i}" style="background-color:green">x</div>
								{:else}
									<div class="box" id="e{i}" style="">x</div>
								{/if}
							{/if}
						{/each}
					</div>
				</div>
			{/if}
		{/each}
	{/key}
</div>
<hr />
{#key gameData}
	{#if gameData['players'].length - 1 <= 0}
		<div
			class="button-footer"
			style="display: flex; flex-direction: column; justify-content: center; align-items:center; background-color: white; padding: 2rem"
		>
			<p>There are no more players left.</p>
			<a href="/multiplayer">
				<button
					on:click={() => {
						io.emit('closed', {
							room: Cookies.get('multiplayer_session')
						});
					}}>Close match.</button
				>
			</a>
		</div>
	{/if}
{/key}
<Modal
	centered
	{opened}
	target="body"
	title="Game ended"
	overflow="inside"
	{closeOnClickOutside}
	{closeOnEscape}
>
	{#key gameData}
		{#if gameData['ended'] == true}
			{#each gameData['origin_player'] as player}
				{#if player == gameData['winner']}
					<hr />
					<div class="modal-class">
						<span>This player have won the game!</span>
					</div>
					<br />
					<div class="player-container">
						<div class="user-header">{player}</div>
						<br /><br />
						<div class="user-card">
							{#each boxes as box, i}
								{#if i < 5}
									{#if score[player] != null && score[player].includes('a' + i)}
										<div class="box" id="a{i}" style="background-color:green">x</div>
									{:else}
										<div class="box" id="a{i}" style="">x</div>
									{/if}
								{:else if i < 10}
									{#if score[player] != null && score[player].includes('b' + i)}
										<div class="box" id="b{i}" style="background-color:green">x</div>
									{:else}
										<div class="box" id="b{i}" style="">x</div>
									{/if}
								{:else if i < 15}
									{#if score[player] != null && score[player].includes('c' + i)}
										<div class="box" id="c{i}" style="background-color:green">x</div>
									{:else}
										<div class="box" id="c{i}" style="">x</div>
									{/if}
								{:else if i < 20}
									{#if score[player] != null && score[player].includes('d' + i)}
										<div class="box" id="d{i}" style="background-color:green">x</div>
									{:else}
										<div class="box" id="d{i}" style="">x</div>
									{/if}
								{:else if i < 25}
									{#if score[player] != null && score[player].includes('e' + i)}
										<div class="box" id="e{i}" style="background-color:green">x</div>
									{:else}
										<div class="box" id="e{i}" style="">x</div>
									{/if}
								{/if}
							{/each}
						</div>
					</div>
					<div class="modal-class-footer">
						<span>Correct answers: </span>
						<span style="color: red">{gameData['correct']}</span>
						<span>Wrong answers: </span>
						<span style="color: red">{gameData['wrong']}</span>
						<span>Highest combo streak: </span>
						<span style="color: red">{gameData['combo']}</span>
					</div>
					<br />
					<div class="button-footer">
						<button
							on:click={() => {
								window.location.href = '/multiplayer';
							}}>Close</button
						>
					</div>
				{/if}
			{/each}
		{/if}
	{/key}
</Modal>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto:wght@900&display=swap');
	.modal-class {
		display: flex;
		text-align: center;
		justify-content: center;
	}
	.button-footer {
		display: flex;
		justify-content: center;
		padding: 0.5rem;
	}
	.button-footer button:hover {
		color: white;
		box-shadow: 0px 0px 15px 5px blue;
	}
	.modal-class-footer {
		margin: 1rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	.modal-class-footer span {
		font-weight: lighter;
	}
	.modal-class span {
		font-size: 1.2rem;
		color: rgb(100, 50, 236);
	}
	.dropdown {
		align-self: flex-end;
		pointer-events: all;
		width: 1.5rem;
		height: 1.5rem;
	}
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(6rem, 20rem));
		background-color: white;
		gap: 2rem;
		height: max-content;
		justify-content: space-around;
		height: max-content;
	}
	.user-card {
		display: grid;
		font-size: 2rem;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
	.user-header {
		font-size: 1.5rem;
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		text-align: center;
	}
	.box {
		border: 1px solid black;
		text-align: center;
		background-color: wheat;
	}
	.button-footer button {
		width: 20vw;
	}
	.player-container {
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		background-color: skyblue;
		border: 3px solid black;
		border-radius: 1rem;
		margin: 0.5rem;
		height: max-content;
		box-sizing: border-box;
	}

	@media (max-width: 768px) {
		.button-footer button {
			width: 40vw;
		}
	}

	@media (max-height: 650px) {
		.button-footer button {
			height: 10vh;
		}
	}
</style>
