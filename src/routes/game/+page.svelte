<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { win_status, comboCounter, correct_count, wrong_count, hp } from './config';
	import bg_msc from '../assets/music/bg_music.mp3';
	import Cookies from 'js-cookie';
	import Card from './card.svelte';
	import Span from './span.svelte';
	import { Modal } from '@svelteuidev/core';
	import { get } from 'svelte/store';
	import { PUBLIC_APIPATH } from '$env/static/public';
	import Flashlight from './flashlight.svelte';
	let opened = false;
	let count = 0;

	let time = setInterval(() => {
		count += 1;
	}, 1000);

	let url = '';
	let game_config: any = {};
	let answers: Array<any> = [];
	let questionString: Array<any> = [];
	let bgMsc = new Audio(bg_msc);
	bgMsc.volume = 0.1;
	setTimeout(() => {
		bgMsc.play();
	}, 1500);

	let rush: string | undefined;
	let hardcore: string | undefined;
	let fl: string | undefined;
	onMount(() => {
		rush = Cookies.get('rush_mode');
		hardcore = Cookies.get('hardcore_mode');
		fl = Cookies.get('fl_mode');

		if (hardcore != null && hardcore == 'on') {
			hp.set(1);
		}
	});
	let facts = [
		['There is no Roman numeral for zero.'],
		[
			'If 23 people are in the same room, there is a 50% chance that two people will have the same birthday.'
		],
		['Take any shape with the same perimeter, and a circle still possesses the largest area.'],
		['Every odd number has an ‘e’.'],
		[
			'The mathematical word “hundred” coins from “hundrath” which is an old Norse term that actually referred to a quantity of 120.'
		],
		[
			'William Shanks, a renowned Mathematician, spent a large part of his life calculating Mathematical constants and didn’t make a mistake until he reached the 528th digit.'
		],
		[
			'If you started with a penny and doubled its value every day for just 30 days, you would have over $5,000,000 Million in the first month.'
		],
		[
			'A standard piece of paper can only be folded seven times, however, according to mathematical theory, if you could fold a piece of paper in half 103 times its thickness would equal that of the observable universe.'
		],
		['Pi is the most studied number in mathematics.'],
		[
			'In the entire Hindu Arabic number system, there is only one number which can be spelled with the same number of letters as itself. That number is FOUR.'
		],
		[
			'In the decimal number system, there are 10 digits from 0 to 9. It is also known as the Hindu Arabic numeral system, invented more than 1000 years ago.'
		],
		['Forty is the only number that is spelt with letters arranged in alphabetical order'],
		[
			'The majority of the months have 31 days in a calendar. Only four months have 30 days i.e., April, June, September and November. February typically only has 28 days, with the exception of leap years (there 29 days).'
		],
		[
			'The opposite sides of a die always add up to 7. For example, 6 and 1 will always be on opposite sides which add up to 7.'
		],
		['The number 2 is the smallest even prime number.'],
		[
			'In the Indian number system, when we write numbers from 0 to 1000, the letter A only appears first in 1000 (one thousand).'
		],
		[
			'The idea of zero was invented by an Indian mathematician and astronomer Brahmagupta in around 600 A. D. He contributed a lot to mathematics and astronomy, and is known for explaining how to find the cube and cube-root of an integer.'
		],
		['The hour and minute hand of a clock coincide 22 times in a day.'],
		[
			'A perfect number refers to a positive integer which is equal to the sum of its positive divisors. Following this rule, 6 is the smallest perfect number. The next perfect number is 28.'
		],
		[
			'Googol means 1 followed by 100 zeroes. A googolplex equivalent to ten raised to the power of a googol. A googolplexian equivalent to ten raised to the power of a googolplex.'
		],
		[
			'Seven is the most significant number across religions and cultures. For example, seven colours in a rainbow, seven days in a week, seven notes on the musical skill, etc.'
		]
	];

	function randomTrivias() {
		let num = Math.floor(Math.random() * 20);
		return facts[num];
	}
	let currentTrivia: any = randomTrivias();
	setInterval(() => {
		currentTrivia = randomTrivias();
	}, 60000);
	let level = Cookies.get('sp_mode');
	if (Cookies.get('game_session') == null) {
		let game = Math.floor(Math.random() * 999999 + 1);
		Cookies.set('game_session', game.toString());
		url = '../php/game_configs/' + game.toString() + '.json';
		let path = '' + game + '.json';
		let x: number = 0;
		game_config = {
			path: path
		};
		let max_int = 25;
		let min_int = 1;
		switch (level) {
			case 'Easy':
				max_int = 25;
				min_int = 1;
				break;
			case 'Medium':
				max_int = 50;
				min_int = 1;
				break;
			case 'Hard':
				max_int = 100;
				min_int = 25;
				break;
			case 'Very Hard':
				max_int = 250;
				min_int = 50;
				break;
			default:
				max_int = 25;
				min_int = 1;
				break;
		}

		for (x = 0; x < 25; x++) {
			let fVal = Math.floor(min_int + Math.random() * max_int);
			let lVal = Math.floor(min_int + Math.random() * max_int);
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

	async function gamesave(condition: number) {
		let day = new Date();
		const today = day.toLocaleDateString();
		let r = 0
		let f = 0
		let h = 0

		if (rush != null && rush == 'on'){
			r = 1
		}
		if (fl != null && fl == 'on'){
			f = 1
		}
		if (hardcore != null && hardcore == 'on'){
			h = 1
		}
		let match_record = {
			game: Cookies.get('game_session'),
			username: Cookies.get('username'),
			time: time_finished,
			streak: highest,
			correct: get(correct_count),
			wrong: get(wrong_count),
			status: condition,
			date: today,
			r: r,
			f: f,
			h: h,
			level: level
		};
		const sql = await fetch(PUBLIC_APIPATH + 'match_save.php', {
			method: 'POST',
			body: JSON.stringify(match_record)
		});
		let echo_code: string = await sql.text();
		console.log(echo_code);
	}

	hp.subscribe((val) => {
		if (val == 0) {
			gameEnd = true;
			opened = true;
			clearInterval(time);
			gamesave(0);
		}
	});

	win_status.subscribe((value) => {
		if (value > 0) {
			opened = true;
			clearInterval(time);
			gamesave(1);
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
	onDestroy(() => {
		window.location.href = '/singleplayer';
	});
	function returnMenu() {
		Cookies.remove('game_session');
		window.location.href = '/singleplayer';
	}
</script>

<html lang="en">
	<div id="header">
		<div
			style="display: flex; padding: 0.5rem; font-size: 1.5rem; flex-direction: column; align-items:center"
		>
			<span>Difficulty: <span style="font-weight: bold;">{level}</span></span>
			<br />
			<span>Math Trivia:</span>
			<div style="border: 1px solid black; width: 80%; display: flex; justify-content: center">
				<span style="font-size: 1.25rem; text-align:center">{currentTrivia}</span>
			</div>
		</div>
	</div>

	<hr />
	<body>
		<div>
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
						<div class="game-stat button-group" style="justify-content: center;">
							<button
								on:click={() => {
									Cookies.remove('game_session');
									location.reload();
								}}>Start a new match</button
							>
							<button
								on:click={() => {
									window.location.href = '/singleplayer';
									Cookies.remove('game_session');
								}}>Return</button
							>
						</div>
					</div>
				{/if}
			</Modal>
		</div>
	</body>
</html>
{#key gameEnd}
	{#if fl != null && fl == 'on' && gameEnd == false}
		<Flashlight />
	{/if}
{/key}

<style>
	html {
		height: 100% !important;
	}
	#header {
		height: 20svh;
		height: 20vh;
		background-color: white;
	}
	.modal-container {
		border: 1px solid black;
		padding: 0.5rem;
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
