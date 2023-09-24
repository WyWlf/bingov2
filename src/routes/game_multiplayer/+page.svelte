<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import {
		win_status,
		comboCounter,
		correct_count,
		wrong_count,
		hp,
		multiplayer,
		game_start,
		gameInfo
	} from './config';
	import Cookies from 'js-cookie';
	import Card from './card.svelte';
	import Span from './span.svelte';
	import Spectator from './spectator.svelte';
	import { Modal } from '@svelteuidev/core';
	import { get } from 'svelte/store';
	import { io } from '$lib/webSocketConnection.js';
	import { PUBLIC_APIPATH } from '$env/static/public';
	import QuestionModal from './QuestionModal.svelte';
	import { formula, beaker } from 'svelte-formula';

	$: spectator = false;
	let showModal = false;
	let host = Cookies.get('host');
	let session: any = '';
	let opened = false;
	let count = 0;
	let time: any;
	let started: boolean = false;
	$: winner = '';

	game_start.subscribe((val) => {
		started = val;
	});
	if (Cookies.get('spectator') == null) {
		Cookies.set('spectator', 'false');
	} else if (Cookies.get('spectator') == 'false') {
		spectator = false;
	} else if (Cookies.get('spectator') == 'true') {
		spectator = true;
	}
	const { form, formValidity } = formula();
	const formGroup = beaker();
	const handleSubmit = async () => {
		const newQuestionForm = formGroup.formValues;
		const patchForm = await fetch(PUBLIC_APIPATH + 'config_update.php', {
			method: 'POST',
			body: JSON.stringify({
				main: get(newQuestionForm),
				game: Cookies.get('multiplayer_session')
			})
		});
	};
	const handleSpectate = () => {
		if (spectator == false) {
			spectator = true;
		} else {
			spectator = false;
		}
		Cookies.set('spectator', spectator);
	};
	let url = '';
	let game_config: any = {};
	let answers: Array<any> = [];
	let questionString: Array<any> = [];

	if (Cookies.get('multiplayer_session') == null) {
		let game = Math.floor(Math.random() * 999999 + 1);
		Cookies.set('multiplayer_session', game.toString());
		session = game.toString();
		url = '../php/game_configs/' + game.toString() + '.json';
		let path = '' + game + '.json';
		let x: number = 0;
		game_config = {
			path: path
		};

		for (x = 0; x < 25; x++) {
			let fVal = Math.floor(1 + Math.random() * 25);
			let lVal = Math.floor(1 + Math.random() * 25);
			let rand = Math.floor(Math.random() * 4);

			switch (rand) {
				case 0:
					let addition = fVal + lVal;
					game_config[x] = {
						firstVal: fVal,
						secondVal: lVal,
						operator: 'addition',
						answer: Math.round(addition * 100) / 100
					};
					break;
				case 1:
					let subtraction = fVal - lVal;
					game_config[x] = {
						firstVal: fVal,
						secondVal: lVal,
						operator: 'subtraction',
						answer: Math.round(subtraction * 100) / 100
					};
					break;
				case 2:
					let multiplication = fVal * lVal;
					game_config[x] = {
						firstVal: fVal,
						secondVal: lVal,
						operator: 'multiplication',
						answer: Math.round(multiplication * 100) / 100
					};
					break;
				case 3:
					let division = fVal / lVal;
					game_config[x] = {
						firstVal: fVal,
						secondVal: lVal,
						operator: 'division',
						answer: Math.round(division * 100) / 100
					};
					break;
			}
		}
		onMount(async function game_config_store() {
			const res = await fetch(PUBLIC_APIPATH + 'game_config_save.php', {
				method: 'POST',
				body: JSON.stringify(game_config)
			});
			let echo_code: string = await res.text();
			if (echo_code == '1') {
				console.log('loaded successfully');
				InitializeVariables();
			} else {
				console.log('config not loaded to the server');
			}
		});
	} else {
		session = Cookies.get('multiplayer_session');
		url = '../php/game_configs/' + Cookies.get('multiplayer_session') + '.json';
		InitializeVariables();
	}

	let gameBody = '';
	let multiplayer_header = 'none';
	multiplayer.subscribe((val) => {
		if (val == true) {
			multiplayer_header = '';
			gameBody = 'none';
		} else {
			multiplayer_header = 'none';
			gameBody = '';
		}
	});

	game_start.subscribe((val) => {
		if (val == true) {
			time = setInterval(() => {
				count += 1;
			}, 1000);
		}
	});
	function removeModal() {
		gameBody = '';
		multiplayer_header = 'none';
		game_start.set(true);
	}
	function gameStart() {
		io.emit('game-start', Cookies.get('multiplayer_session'));
		if (spectator == false) {
			game_start.set(true);
			io.emit('spectateInfo', {
				room: session,
				spectate: spectator
			});
			removeModal();
		} else {
			io.emit('spectateInfo', {
				room: session,
				spectate: spectator
			});
			removeModal();
		}
	}

	let logs: any = [];
	$: joined = 0;
	$: player_lost = 0;
	$: player_count = 0;
	onMount(() => {
		multiplayer.set(true);
		if (Cookies.get('host') == 'true') {
			io.emit('multiplayer-creation', {
				room: session,
				player: Cookies.get('username'),
				spectate: spectator
			});
		}
		io.on('new-player', (data) => {
			if (Cookies.get('multiplayer_session') == data['room']) {
				joined = data['players'].length;
				player_count = data['origin_player'].length;
				player_lost = data['lost'].length;
				logs = data['players'];
				gameInfo.set(data);
			}
		});
		io.emit('reconnect', {
			game: Cookies.get('multiplayer_session'),
			player: Cookies.get('username')
		});
		io.on('active', (data) => {
			if (data['room'] == Cookies.get('multiplayer_session')) {
				removeModal();
				joined = data['players'].length;
				player_count = data['origin_player'].length;
				player_lost = data['lost'].length;
				gameInfo.set(data);
			} else if (data == false) {
				Cookies.remove('multiplayer_session');
				window.location.href = '/multiplayer';
			}
		});
		io.emit('gameInfo', Cookies.get('multiplayer_session'));
		io.on('gameInfoRes', (data) => {
			if (Cookies.get('multiplayer_session') == data['room']) {
				player_count = data['origin_player'].length;
				joined = data['players'].length;
				player_lost = data['lost'].length;
				logs = data['players'];
				Cookies.set('host_name', data['host']);
				gameInfo.set(data);
			}
		});
		io.on('begin', (data) => {
			if (data['room'] == Cookies.get('multiplayer_session') && data['started'] == true) {
				removeModal();
			}
		});
		io.on('chicken-dinner', (data) => {
			if (data['room'] == Cookies.get('multiplayer_session') && data['ended'] == true) {
				winner = data['winner'];
				opened = true;
				gamesave(0);
				clearInterval(time);
				gameInfo.set(data);
			}
		});

		io.on('player-dc', (data) => {
			if (data['new']['room'] == Cookies.get('multiplayer_session')) {
				logs = data['new']['players'];
				logs = logs;
				joined = data['new']['players'].length;
				player_lost = data['new']['lost'].length;
				gameInfo.set(data['new']);
			}
		});
		io.on('player-reduced', (data) => {
			if (data['new']['room'] == Cookies.get('multiplayer_session')) {
				joined = data['new']['players'].length;
				player_lost = data['new']['lost'].length;
				gameInfo.set(data['new']);
			}
		});
	});

	function PromiseArray() {
		const importPromise = import(url);
		return importPromise;
	}

	function UrlExists(url: string) {
		var http = new XMLHttpRequest();
		http.open('GET', url, false);
		http.send();
		return http.status != 404;
	}

	async function InitializeVariables() {
		let temp_config: Array<any> = [];
		let questionnaire: Array<any> = [];
		let fileCheck = UrlExists(
			'src/routes/php/game_configs/' + Cookies.get('multiplayer_session') + '.json'
		);
		if (fileCheck == true) {
			const x = PromiseArray();
			x.then((module) => {
				for (let key in module.default) {
					if (module.default.hasOwnProperty(key) && typeof module.default[key] == 'object') {
						temp_config.push(module.default[key]);
					}
				}
			}).then(() => {
				answers = getList(temp_config);
				let question = getList(answers);
				question.forEach((item) => {
					questionnaire.push(
						questionBuilder(item['firstVal'], item['operator'], item['secondVal'])
					);
				});
				questionString = questionnaire;
			});
		} else {
			Cookies.remove('multiplayer_session');
			window.location.href = '/multiplayer';
		}
	}
	function getList(arr: Array<any>) {
		let unshuffled = arr;
		let shuffled = unshuffled
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		return shuffled;
	}

	function questionBuilder(fval: string, operator: string, lval: string) {
		let operations: Record<string, string> = {
			addition: '+',
			subtraction: '-',
			multiplication: '*',
			division: '/'
		};
		return '' + fval + '' + operations[operator] + '' + lval + '';
	}

	function gamesave(condition: number) {
		let day = new Date();
		const today = day.toLocaleDateString();

		let match_record = {
			game: Cookies.get('multiplayer_session'),
			username: Cookies.get('username'),
			time: time_finished,
			streak: highest,
			correct: get(correct_count),
			wrong: get(wrong_count),
			status: condition,
			mode: 1,
			host: Cookies.get('host_name'),
			winner: winner,
			date: today
		};
		const sql = fetch(PUBLIC_APIPATH + 'match_save.php', {
			method: 'POST',
			body: JSON.stringify(match_record)
		});
	}

	function winSave() {
		let match_record = {
			game: Cookies.get('multiplayer_session'),
			winner: winner
		};
		const sql = fetch(PUBLIC_APIPATH + 'winner_save.php', {
			method: 'POST',
			body: JSON.stringify(match_record)
		});
	}

	hp.subscribe((val) => {
		if (val == 0) {
			gameEnd = true;
			opened = true;
			clearInterval(time);
			gamesave(0);
			io.emit('player-kick', {
				game: Cookies.get('multiplayer_session'),
				player: Cookies.get('username')
			});
			Cookies.remove('multiplayer_session');
		}
	});
	let highest = 0;
	win_status.subscribe((value) => {
		if (value > 0) {
			opened = true;
			clearInterval(time);
			gamesave(1);
			io.emit('winner', {
				game: Cookies.get('multiplayer_session'),
				winner: Cookies.get('username')
			});
			io.emit('winner-info', {
				game: Cookies.get('multiplayer_session'),
				player: Cookies.get('username'),
				correct: get(correct_count),
				wrong: get(wrong_count),
				streak: highest
			});
			//@ts-ignore
			winner = Cookies.get('username');
			winSave();
		}
	});

	let closeOnClickOutside = false;
	let closeOnEscape = false;
	let gameEnd = false;

	$: minutes = Math.floor(count / 60);
	$: seconds = count % 60;

	$: time_finished = '' + minutes + ' minute(s) & ' + seconds + ' second(s)';

	comboCounter.subscribe((value) => {
		let curr_val = value;
		if (curr_val > highest) {
			highest = curr_val;
		}
	});
	addEventListener('beforeunload', () => {
		io.emit('disconnected', {
			game: Cookies.get('multiplayer_session'),
			player: Cookies.get('username')
		});

		if (get(win_status) == 0) {
			io.emit('reset', {
				game: Cookies.get('multiplayer_session'),
				player: Cookies.get('username')
			});
		}
	});

	onDestroy(() => {
		window.location.href = '/multiplayer_room';
	});

	function returnMenu() {
		Cookies.remove('multiplayer_session');
		window.location.href = '/multiplayer';
	}
	let question_form: any = [];
	async function getConfig() {
		const res = await fetch(PUBLIC_APIPATH + 'get_config.php', {
			method: 'POST',
			body: JSON.stringify({ game: Cookies.get('multiplayer_session') })
		});
		let response = await res.json();
		let iterations = JSON.parse(response);
		for (let x = 0; x < 25; x++) {
			question_form = [...question_form, iterations[x]];
		}
	}
	$: if (showModal == false) {
		question_form = [];
	}
	let info: any;
	gameInfo.subscribe((val) => {
		info = val;
	});
	$: console.log(info);
</script>

<div class="wait-container" style="display: {multiplayer_header};">
	<div class="title">
		<h1>MATH</h1>
		<h2>BINGO</h2>
	</div>
	<div class="wait-modal">
		<p style="font-weight: bold;">Players joined: {joined}</p>
		{#if Cookies.get('host') == 'true'}
			<p>Your game code is: <span style="text-decoration: underline;">{session}</span></p>
			<small style="color: brown;">Share this code to invite other players.</small>
			<p>
				Spectator mode: <input
					type="checkbox"
					bind:checked={spectator}
					on:click={handleSpectate}
					name="spectate"
					id="spectate"
				/>
			</p>
			<small style="color: brown;">If spectator mode is activated,</small>
			<br />
			<small style="color: brown;">
				The host would be unable to play and can only spectate the progress of the players.
			</small>
			<p>
				Customize questions: <button
					class="unset"
					on:click={() => {
						showModal = true;
						getConfig();
					}}>Open Questions</button
				>
			</p>
			<small style="color: brown;">
				You can customize your own questions by modifying the auto-generated questions.
			</small>
		{/if}
		<div class="room-logs">
			{#key logs}
				{#each logs as players}
					<span
						>User <span style="font-weight: bolder; color: blue">{players}</span> has joined the game</span
					>
				{/each}
			{/key}
		</div>
		{#if Cookies.get('host') == 'true'}
			<p style="font-weight: bold;">Waiting for other players.</p>
		{:else}
			<p style="font-weight: bold;">Waiting for other players.</p>
			<br />
			<p style="font-weight: bold;">Only the host can start the game.</p>
		{/if}
		<div class="button-group-modal" style="display:flex; gap: 2rem">
			{#if host == 'true'}
				<button
					on:click={() => {
						gameStart();
					}}>Start Game</button
				>
				<button
					on:click={() => {
						window.location.href = '/multiplayer_room';
					}}>Cancel</button
				>
			{:else}
				<div style="display: flex; flex-direction:column; align-items:center; gap: 1rem">
					<img src="src/routes/assets/images/loader.gif" alt="" style="height: 3rem; width: 3rem" />
					<button
						on:click={() => {
							window.location.href = '/multiplayer';
						}}>Leave</button
					>
				</div>
			{/if}
		</div>
	</div>
</div>
<QuestionModal bind:showModal on:close={() => {}}>
	<div class="ModalQ" slot="header">
		<h1>Customize questions:</h1>
	</div>
	<form use:form on:submit|preventDefault={handleSubmit}>
		<div class="question-list" use:formGroup.group>
			{#each question_form as { firstVal, secondVal, operator }, i}
				<div class="modal-container">
					<p>Question {i + 1}:</p>
					<div class="question-flex">
						<p>First value:</p>
						<input type="text" bind:value={firstVal} name="firstVal{i}" required />
						<p>Operation:</p>
						<select name="operation{i}">
							{#if operator == 'addition'}
								<option selected value="addition">Addition</option>
								<option value="subtraction">Subtraction</option>
								<option value="multiplication">Multiplication</option>
								<option value="division">Division</option>
							{:else if operator == 'subtraction'}
								<option value="addition">Addition</option>
								<option selected value="subtraction">Subtraction</option>
								<option value="multiplication">Multiplication</option>
								<option value="division">Division</option>
							{:else if operator == 'multiplication'}
								<option value="addition">Addition</option>
								<option value="subtraction">Subtraction</option>
								<option selected value="multiplication">Multiplication</option>
								<option value="division">Division</option>
							{:else if operator == 'division'}
								<option value="addition">Addition</option>
								<option value="subtraction">Subtraction</option>
								<option value="multiplication">Multiplication</option>
								<option selected value="division">Division</option>
							{/if}
						</select>
						<p>Second value:</p>
						<input type="text" required name="secondVal{i}" bind:value={secondVal} />
					</div>
				</div>
			{/each}
		</div>
		<div class="button-container">
			<button class="save-changes" disabled={!$formValidity}>Save changes</button>
		</div>
	</form>
</QuestionModal>
<div id="header" style="display: {gameBody};">
	{#key info}
		{#if info['spectate'] == true && Cookies.get('host') == 'true'}
			<div style="display: flex;">
				<div style="display: flex; flex-direction:column; margin: auto;">
					<small style="text-align: unset;"> 🟦 = Player is currently active. </small>
					<small style="text-align: unset;"> 🟥 = Player has lost all of their HP. </small>
					<small style="text-align: unset;"> ⬛ = Player has been disconnected. </small>
				</div>
			</div>
		{/if}
		<div class="game-header">
			<div>
				<p>Game code: <span style="font-weight: bold;">{session}</span></p>
				<p>Mode: <span style="font-weight: bold;">Operations</span></p>
				{#if info['spectate'] == true}
					<p>
						Players left: <span style="font-weight: bold;">{joined - 1}/{player_count - 1}</span>
					</p>
				{:else}
					<p>Players left: <span style="font-weight: bold;">{joined}/{player_count}</span></p>
				{/if}
			</div>
			<div />
		</div>
	{/key}
</div>

<hr style="display: {gameBody};" />
{#if info['spectate'] == false && info['ended'] == false || Cookies.get('host') == 'false' && info['ended'] == false}
	<div style="display: {gameBody};">
		<Card {questionString}>
			{#each answers as a, i}
				<Span {a} {i} />
			{/each}
		</Card>
		<Modal
			centered
			{opened}
			target="body"
			on:close={returnMenu}
			title="Game ended"
			overflow="inside"
			{closeOnClickOutside}
			{closeOnEscape}
		>
			{#if gameEnd == false && winner == Cookies.get('username')}
				<div class="modal-container">
					<span>🎉You have won!🎉</span><br /><br />
					<small>Game has been recorded to your match history.</small>
					<br /><br />
					<hr />
					<span>Game Stats</span>
					<br /><br />
					<div class="game-stat">
						<p>Time finished</p>
						<p style="text-align: left;">: {time_finished}</p>
						<p>Highest answer streak</p>
						<p>: {highest}</p>
						<p>Correct answers</p>
						<p>: {get(correct_count)}</p>
						<p>Wrong answers</p>
						<p>: {get(wrong_count)}</p>
					</div>
				</div>
			{:else if gameEnd == true}
				<div class="modal-container">
					<span>You've ran out of HP!</span><br /><br />
					<small>Tip: You can regain HP from answering correctly 5 times consecutively</small>
					<br /><br />
					<hr />
					<div class="button-group" style="justify-content: center;">
						<button
							on:click={() => {
								window.location.href = '/multiplayer';
							}}>Return</button
						>
					</div>
				</div>
			{:else if gameEnd == false && winner != Cookies.get('username')}
				<div class="modal-container">
					<span>You have lost!</span><br /><br />
					<small>Tip: You can regain HP from answering correctly 5 times consecutively</small>
					<br /><br />
					<hr />
					<div class="button-group" style="justify-content: center;">
						<button
							on:click={() => {
								window.location.href = '/multiplayer';
							}}>Return</button
						>
					</div>
				</div>
			{/if}
		</Modal>
	</div>
{:else if info['ended'] == false && info['spectate'] == true && info['host'] == Cookies.get('username') && Cookies.get('host') == 'true'}
	<div id="header2">
		<div style="display: flex;">
			<div style="display: flex; flex-direction:column; margin: auto;">
				<small style="text-align: unset;"> 🟦 = Player is currently active. </small>
				<small style="text-align: unset;"> 🟥 = Player has lost all of their HP. </small>
				<small style="text-align: unset;"> ⬛ = Player has been disconnected. </small>
			</div>
		</div>
		<div class="game-header">
			<div>
				<p>Game code: <span style="font-weight: bold;">{session}</span></p>
				{#key info}
					{#if info['spectate'] == true}
						<p>
							Players left: <span style="font-weight: bold;">{joined - 1}/{player_count - 1}</span>
						</p>
					{:else}
						<p>Players left: <span style="font-weight: bold;">{joined}/{player_count}</span></p>
					{/if}
				{/key}
				<p>Mode: <span style="font-weight: bold;">Operations</span></p>
				<div style="display: flex; justify-content:center">Spectating...</div>
			</div>
			<div />
		</div>
	</div>
	<hr class="hr-mobile" />
	<div style="display: {gameBody}">
		<Spectator />
	</div>
{/if}

<style>
	small {
		text-align: center;
	}
	.button-container {
		display: flex;
		justify-content: flex-end;
		padding: 1rem;
	}
	.save-changes {
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: light;
		justify-self: center;
		width: 10rem;
	}
	.save-changes:hover {
		box-shadow: 0px 0px 10px 5px skyblue;
		color: white;
	}
	.modal-container {
		background-color: skyblue;
		border: 1px solid rgb(0, 0, 0);
		padding: 1rem;
	}
	.question-flex {
		display: grid;
		grid-template-columns: 1fr;
	}
	.question-list {
		display: flex;
		flex-direction: row;
		width: 70vw;
		justify-content: space-around;
		flex-wrap: wrap;
		border: 1px solid black;
		padding: 2rem;
		gap: 2.5rem;
		background-color: rgb(191, 191, 243);
	}
	.ModalQ > h1 {
		font-size: 2rem;
	}
	.unset {
		all: unset;
		border: 1px solid skyblue;
		padding: 0.5rem;
		border-radius: 0.25rem;
		background-color: skyblue;
	}
	.unset:hover {
		box-shadow: 0px 0px 10px skyblue;
	}
	.room-logs {
		display: flex;
		flex-direction: column;
		border: 1px solid black;
		height: 20vh;
		min-width: 20vw;
		width: max-content;
		align-items: center;
		margin: 2rem;
		gap: 1rem;
		padding: 0.5rem;
		border-radius: 1rem;
		overflow-y: auto;
	}
	h1,
	h2 {
		font-family: 'Lilita One', cursive;
		-webkit-text-fill-color: rgb(20, 106, 177);
		font-size: 7rem;
		display: inline;
		margin: 0.25em;
	}

	.room-logs span {
		text-align: center;
	}
	#header,
	#header2 {
		height: 20svh;
		height: 20vh;
		background-color: white;
	}
	#header2 {
		padding: 1rem;
	}
	.button-group-modal button:hover {
		color: rgb(34, 255, 255);
		box-shadow: 0px 0px 15px 1px blueviolet;
	}
	.button-group-modal button {
		width: 10vw;
	}
	.wait-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		height: 100svh;
		justify-content: flex-start;
		align-items: center;
		background-color: white;
	}
	.wait-container > .wait-modal {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	#header > .game-header {
		display: flex;
		font-family: Arial, Helvetica, sans-serif;
		flex-direction: column;
		padding: 1rem;
	}
	.wait-modal p {
		font-family: Arial, Helvetica, sans-serif;
	}
	.modal-container {
		font-family: 'Roboto', sans-serif;
		text-align: center;
	}
	.modal-container .game-stat {
		display: grid;
		grid-template-columns: 55% 45%;
		justify-items: start;
	}
	.button-group {
		display: flex;
		justify-self: center;
		align-items: center;
		color: rgb(0, 0, 0);
		padding: 1rem;
	}

	.button-group button:hover {
		box-shadow: 0px 0px 15px 1px blueviolet;
		color: rgb(34, 255, 255);
	}
	@media (min-width: 769px) {
		#header2,
		.hr-mobile {
			display: none;
		}
	}
	@media (max-width: 768px) {
		#header,
		hr {
			display: none;
		}
		#header2,
		.hr-mobile {
			display: block;
		}
		.button-group {
			padding: 0.5rem;
		}
		.question-list {
			width: 70vw;
		}
		.ModalQ > h1 {
			font-size: 1.5rem;
		}
		.save-changes {
			width: 10rem;
		}
	}
	@media (max-width: 468px) {
		.button-group button {
			width: 50vw;
		}
		.button-group-modal button {
			width: 30vw;
		}
		h1,
		h2 {
			font-size: 2rem;
		}
		.room-logs {
			width: 60vw;
		}
	}
</style>
