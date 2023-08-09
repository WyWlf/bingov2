<script lang="ts">
	/** @type {import('./$types').PageData} */
	import Cookies from 'js-cookie';
	import Card from './card.svelte';
	import Span from './span.svelte';
	import { onMount } from 'svelte';
	let url = '../php/game_configs/' + Cookies.get('game_session') + '.json';
	export let data: any;
	let game_config: any = {};
	let answers: Array<any> = [];
	let questionString: Array<any> = [];
	if (data.post.cookie == null) {
		let game = Math.floor(Math.random() * 999999 + 1);
		Cookies.set('game_session', game.toString());
		let path = '' + game + '.json';
		let x: number = 0;
		game_config = {
			path: path
		};

		for (x = 0; x < 25; x++) {
			let fVal = Math.floor(Math.random() * 50);
			let lVal = Math.floor(Math.random() * 50);
			let rand = Math.floor(Math.random() * 4);

			switch (rand) {
				case 0:
					let addition = fVal + lVal;
					game_config[x] = {
						firstVal: fVal,
						secondVal: lVal,
						operator: 'addition',
						answer: addition
					};
					break;
				case 1:
					let subtraction = fVal - lVal;
					game_config[x] = {
						firstVal: fVal,
						secondVal: lVal,
						operator: 'subtraction',
						answer: subtraction
					};
					break;
				case 2:
					let multiplication = fVal * lVal;
					game_config[x] = {
						firstVal: fVal,
						secondVal: lVal,
						operator: 'multiplication',
						answer: multiplication
					};
					break;
				case 3:
					let division = fVal / lVal;
					game_config[x] = {
						firstVal: fVal,
						secondVal: lVal,
						operator: 'division',
						answer: division
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

<html lang="ts">
	<div id="header">
		<img src="/src/routes/assets/images/cat_tp.gif" alt="" />
	</div>
	<hr />
	<div>
		<Card {questionString}>
			{#each answers as a}
				<Span {a} />
			{/each}
		</Card>
	</div>
</html>

<style>
	#header {
		display: flex;
		background-image: url('/src/routes/assets/images/game_bg.png');
		background-position: center;
		height: 20vh;
		align-items: end;
	}
	#header img {
		box-shadow: 0px 0px 15px 5px black;
		box-sizing: border-box;
		height: 100px;
		width: 100px;
	}
</style>
