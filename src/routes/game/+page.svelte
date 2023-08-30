<script lang="ts">
	import { onMount } from 'svelte';
	import { win_status, comboCounter, correct_count, wrong_count, hp, multiplayer, game_start } from './config';
	import bg_msc from '../assets/music/bg_music.mp3';
	import Cookies from 'js-cookie';
	import Card from './card.svelte';
	import Span from './span.svelte';
	import { Modal } from '@svelteuidev/core';
	import { get } from 'svelte/store';

	let session = '';
	let opened = false;
	let count = 0;
	$: console.log(count);
	let time = setInterval(() => {
		count += 1;
	}, 1000);

	const getHeaders = (function (a) {
		if (a == '') return {};
		var b = {};
		for (var i = 0; i < a.length; ++i) {
			var p = a[i].split('=', 2);
			if (p.length == 1) b[p[0]] = '';
			else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
		}
		return b;
	})(window.location.search.substr(1).split('&'));

	localStorage['token'] = 0;
	let url = '';
	let game_config: any = {};
	let answers: Array<any> = [];
	let questionString: Array<any> = [];
	let bgMsc = new Audio(bg_msc);
	bgMsc.volume = 0.1;
	setTimeout(() => {
		bgMsc.play();
	}, 1500);

	if (getHeaders['mode'] != null && getHeaders['mode'].length > 0) {
		multiplayer.set(true);
		bgMsc.volume = 0;
		clearInterval(time);
	}
	if (Cookies.get('game_session') == null) {
		let game = Math.floor(Math.random() * 999999 + 1);
		Cookies.set('game_session', game.toString());
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
			const res = await fetch(
				'http://192.168.254.104/sv/bingo/src/routes/php/game_config_save.php',
				{
					method: 'POST',
					body: JSON.stringify(game_config)
				}
			);
			let echo_code: string = await res.text();
			if (echo_code == '1') {
				console.log('loaded successfully');
				InitializeVariables();
			} else {
				console.log('config not loaded to the server');
			}
		});
	} else {
		session = Cookies.get('game_session');
		url = '../php/game_configs/' + Cookies.get('game_session') + '.json';
		InitializeVariables();
	}

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
			'src/routes/php/game_configs/' + Cookies.get('game_session') + '.json'
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
			Cookies.remove('game_session');
			window.location.href = '/singleplayer';
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

	hp.subscribe((val) => {
		if (val == 0) {
			gameEnd = true;
			opened = true;
			clearInterval(time);
		}
	});

	win_status.subscribe((value) => {
		if (value > 0) {
			opened = true;
			clearInterval(time);
		}
	});

	let closeOnClickOutside = false;
	let closeOnEscape = false;
	let gameEnd = false;

	$: minutes = Math.floor(count / 60);
	$: seconds = count % 60;

	$: time_finished = '' + minutes + ' minute(s) & ' + seconds + ' second(s)';
	let highest = 0;

	comboCounter.subscribe((value) => {
		let curr_val = value;
		if (curr_val > highest) {
			highest = curr_val;
		}
	});
	addEventListener('beforeunload', () => {
		Cookies.remove('game_session');
	});

	function returnMenu() {
		Cookies.remove('game_session');
		window.location.href = '/singleplayer';
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
	})

	game_start.subscribe(val => {
		if (val == true){
			setInterval(() => {
				count += 1;
			}, 1000);
		}
	})
</script>

<div class="wait-container" style="display: {multiplayer_header};">
	<div class="wait-modal">
		<p>Your game code is: <span>{session}</span></p>
		<p>Players joined: 1</p>
		<p style="font-weight: bold;">Waiting for other players to join...</p>
		<div class="button-group-modal" style="flex">
			<button
				on:click={() => {
					gameBody = '';
					multiplayer_header = 'none';
					game_start.set(true)
				}}>Start Game</button
			>
			<button>Cancel</button>
		</div>
	</div>
</div>

<div id="header" style="display: {gameBody};">
	<div class="wait-modal">
		{#if get(multiplayer) == true}
			<p>Game code: <span style="font-weight: bold;">{session}</span></p>
			<p>Players joined: <span style="font-weight: bold;">1</span></p>
			<p>Mode: <span style="font-weight: bold;">Operations</span></p>
			{:else if get(multiplayer) == false}
			<p>Game code: <span style="font-weight: bold;">{session}</span></p>
		{/if}
	</div>
</div>

<hr />
<body on:beforeunload={()=> {alert('hi')}}>
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
		{#if gameEnd == false}
			<div class="modal-container">
				<span>🎉You have won!🎉</span><br /><br />
				<small>Game has been recorded to your match history.</small>
				<br /><br />
				<hr />
				<span>Game Stats</span>
				<br /><br />
				<div class="game-stat">
					<p>Time finished</p>
					<p>: {time_finished}</p>
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
				<div class="game-stat button-group" style="justify-content: center;">
					<button
						on:click={() => {
							location.reload();
						}}>Start a new match</button
					>
					<button
						on:click={() => {
							window.location.href = '/singleplayer';
						}}>Return</button
					>
				</div>
			</div>
		{/if}
	</Modal>
</div>
</body>
<style>
	#header {
		height: 20svh;
		height: 20vh;
		background-color: white;
	}
	.button-group-modal button:hover {
		color: rgb(34, 255, 255);
		box-shadow: 0px 0px 15px 1px blueviolet;
	}
	.wait-container {
		display: flex;
		height: 50svh;
		height: 50vh;
		justify-content: center;
		align-items: center;
		background-color: white;
	}
	.wait-modal, #header .wait-modal{
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
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
	.game-stat button {
		justify-self: center;
		width: 90%;
		color: rgb(0, 0, 0);
		background: #4981ec;
	}

	.game-stat button:hover {
		box-shadow: 0px 0px 15px 1px blueviolet;
		color: rgb(34, 255, 255);
	}

	.game-stat.button-group {
		padding: 3rem;
	}
	@media (max-width: 768px) {
		#header,
		hr {
			display: none;
		}
		.game-stat.button-group {
			padding: 0;
		}
	}
</style>
