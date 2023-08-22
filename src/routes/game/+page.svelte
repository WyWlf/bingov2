<script lang="ts">
	/** @type {import('./$types').PageData} */
	import bg_msc from '../assets/music/bg_music.mp3';
	import Cookies from 'js-cookie';
	import Card from './card.svelte';
	import Span from './span.svelte';
	import { onMount } from 'svelte';
	let url = '../php/game_configs/' + Cookies.get('game_session') + '.json';
	let game_config: any = {};
	let answers: Array<any> = [];
	let questionString: Array<any> = [];
	let bgMsc = new Audio(bg_msc)
	bgMsc.volume = 0.1
	bgMsc.loop = true
	setTimeout(()=> {
		bgMsc.play()
	}, 1500)
	if (Cookies.get('game_session') == null) {
		let game = Math.floor(Math.random() * 999999 + 1);
		Cookies.set('game_session', game.toString());
		let path = '' + game + '.json';
		let x: number = 0;
		game_config = {
			path: path
		};

		for (x = 0; x < 25; x++) {
			let fVal = Math.floor(Math.random() * 25);
			let lVal = Math.floor(Math.random() * 25);
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
			const res = await fetch('http://localhost/sv/bingo/src/routes/php/game_config_save.php', {
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
		InitializeVariables();
	}

	function PromiseArray() {
		const importPromise = import(url);
		return importPromise;
	}

	async function InitializeVariables() {
		let temp_config: Array<any> = [];
        let questionnaire: Array<any> = [];
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
                questionnaire.push(questionBuilder(item['firstVal'], item['operator'], item['secondVal']))
			})
            questionString = questionnaire
		})
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
</script>

<div id="header">
</div>
<hr />
<div>
	<Card {questionString}>
		{#each answers as a}
			<Span {a} />
		{/each}
	</Card>
</div>

<style>
	#header {
		display: flex;
		background-image: url('/src/routes/assets/images/game_bg.png');
		background-position: center;
		height: 20vh;
		align-items: end;
	}
</style>
