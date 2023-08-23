<script lang="ts">
	import '../style.css';
	import { hp, count, current_question, comboCounter, time, win_status } from './config';
	import { get } from 'svelte/store';
	import incorrect from '../assets/music/wronganswer-37702.mp3';
	export let questionString: Array<any> = [];
	let counter = 0;
	count.subscribe((value) => {
		counter = value;
	});
	$: question = questionString[counter];
	$: current_question.set(Math.round(eval(question) * 100) / 100);

	let lifeObj = [];
	hp.subscribe((value) => {
		lifeObj = [];
		for (let x = 0; x < value; x++) {
			lifeObj.push('null');
		}
	});
	let comboCount = 0;
	comboCounter.subscribe((value) => {
		comboCount = value;
	});
	$: threshold = 'none';
	$: if (comboCount > 3) {
		threshold = 'block';
	} else {
		threshold = 'none';
	}
	let countdown = 0;

	time.subscribe((value) => {
		countdown = value;
	});
	let interv = setInterval(() => {
		time.update((prev) => prev - 1);
	}, 1000);

	win_status.subscribe(value => {
		if (value > 0){
			clearInterval(interv)
		}
	})

	$: if (countdown == 0) {
		hp.update((prev) => prev - 1);
		time.set(60);
		let soundeff = new Audio(incorrect);
		soundeff.play();
	}
</script>

<div class="card-container">
	<div class="question">
		<div class="question-box">
			<span>{questionString[counter]}</span>
		</div>
		<div>
			<p>Lives:</p>
			{#each lifeObj as { count }, i}
				<span><img src="/src/routes/assets/images/heart.png" alt="" /></span>
			{/each}
		</div>
		<div>
			<p>Combo counter:</p>
			<span>
				<img src="/src/routes/assets/images/combo.gif" alt="" style="display: {threshold}" />
				&nbsp;&nbsp;&nbsp;{comboCount}&nbsp;&nbsp;&nbsp;
				<img src="/src/routes/assets/images/combo.gif" alt="" style="display: {threshold}" />
			</span>
		</div>
		<div>
			<p>Timer:</p>
			<span
				><img src="/src/routes/assets/images/8bit-hrglass.gif" alt="" />
				{countdown}s <img src="/src/routes/assets/images/8bit-hrglass.gif" alt="" /></span
			>
		</div>
		<div>
			<p>Game mode:</p>
			<br />
			<span>Singe Player Mode</span>
		</div>
	</div>
	<div class="card">
		<span class="card-th">B</span>
		<span class="card-th">I</span>
		<span class="card-th">N</span>
		<span class="card-th">G</span>
		<span class="card-th">O</span>
		<slot />
	</div>
</div>

<style>
	.question-box {
		height: 20vh;
		background-color: white;
		font-size: 3em;
		font-family: 'Lilita One', cursive;
		justify-content: center;
	}
	.card-container {
		display: flex;
		height: max-content;
		background-color: rgb(112, 166, 212);
		justify-content: flex-end;
	}
	.card {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		margin: 3em;
		text-align: center;
		border: 3px solid white;
		box-sizing: border-box;
		background: linear-gradient(to right, #b31ace, #39175c);
		box-shadow: 0px 0px 25px 5px white;
	}
	.card span {
		color: skyblue;
		font-size: 2em;
		display: flex;
		border: 3px solid white;
		width: 250px;
		align-items: center;
		justify-content: center;
		height: 140px;
		font-family: 'Lilita One', cursive;
	}

	.card-th {
		font-size: 5em !important;
		color: #f2a7ff !important;
		box-shadow: 0px 0px 25px 5px white;
	}

	.question {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 3em;
	}

	.question div {
		display: flex;
		align-items: center;
		gap: 1em;
	}
	.question div span {
		display: flex;
		align-items: center;
		font-size: 3em;
		font-family: 'Lilita One', cursive;
	}
	.question p {
		font-family: 'Lilita One', cursive;
		font-size: 3em;
		color: white;
	}
	.question img {
		height: 75px;
		width: 75px;
	}
</style>
