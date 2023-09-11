<script lang="ts">
	// @ts-nocheck comment
	import '../style.css';
	import {bonus_hp, trigger, max, hp, count, current_question, comboCounter, time, win_status} from './config';
	import { get } from 'svelte/store';
	import incorrect from '../assets/music/wronganswer-37702.mp3';
	import heart from '../assets/images/heart.png'
	// import lowTime from '../assets/music/time.wav';
	export let questionString: Array<any> = [];
	let counter = 0;
	trigger.subscribe(val => {
		if (val == true){
			if (counter == 0){
				questionString.splice(0, 1)
				trigger.set(false)
			}else {
				questionString.splice(counter, 1)
				trigger.set(false)
			}
		}
	})
	$: question = questionString[counter]
	$: evaluator = Math.round(eval(questionString[counter]) * 100) / 100
	count.subscribe((value) => {
		counter = value
		max.set(questionString.length-1)
	})
	$: current_question.set(evaluator);
	// $: console.log(evaluator)
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
	hp.subscribe(val => {
		if (val <= 0){
			clearInterval(interv)
		}
	})
	$: if (countdown == 0) {
		bonus_hp.set(0)
		hp.update((prev) => prev - 1);
		comboCounter.set(0)
		count.update((prev) => prev + 1)
		threshold = 'none'
		time.set(60);
		let soundeff = new Audio(incorrect);
		soundeff.play()
	}
	let border_warn = '';
	$: if (countdown < 15) {
		// let soundeff = new Audio(lowTime)
		// soundeff.volume = 0.3
		// soundeff.play()
		border_warn = 'active'
	} else {
		border_warn = ''
	}
</script>

<div class="card-container">
	<div class="question">
		<div class="question-box">
			<span>Question: &nbsp; {question} = ?</span>
		</div>
		<div>
			<p>Timer:</p>
			<span
				><img src="8bit-hrglass.gif" alt="" />
				{countdown}s <img src="8bit-hrglass.gif" alt="" /></span
			>
		</div>
		<div>
			<p>Lives:</p>	
			{#key lifeObj}
				{#each lifeObj as { count }, i}
					<span><img class="heart" src="{heart}" alt="" /></span>
				{/each}
			{/key}
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
			<p>Game mode:</p>
			<br />
			<span>Singe Player Mode</span>
		</div>
	</div>
	<div class="card {border_warn}">
		<slot />
	</div>
</div>
<!----------------------------------------------------------------------------------------->
<div class="mobile-view">	
	<div class="question-box">
		<p style="margin: auto; font-weight:bold">Single Player Mode</p>
		<span style="margin: auto; display: flex">
			<img src="/src/routes/assets/images/8bit-hrglass.gif" alt="" />
			<span id="timer">{countdown}s</span> <img src="/src/routes/assets/images/8bit-hrglass.gif" alt="" />
		</span>
		<div class="player-stat">
			<p style="display: flex; align-items:center">Lives:
				{#key lifeObj}
					{#each lifeObj as { count }, i}
						<span><img class="heart" src="/src/routes/assets/images/heart.png" alt="" /></span>
					{/each}
				{/key}
			</p>
			<p style="display: flex; align-items:center">Combo:&nbsp;<span style="font-size: 2rem; font-weight:bold; font-family: Arial">{comboCount}</span>
				&nbsp;<span><img src="/src/routes/assets/images/combo.gif" alt="" style="display: {threshold}" /></span>
			</p>
		</div>
		<hr>
		<span>Question: &nbsp; {questionString[counter]} = ?</span>
	</div>	
	<div class="card {border_warn}">
		<slot />
	</div>
</div>

<style>
	.heart {
		animation: beat 1s infinite linear;
		animation-timing-function: steps(10);
	}
	@keyframes beat{
		0% {
			scale: 1.1
		}
		85% {
			scale: 1
		}
	}
	.player-stat {
		margin: 2rem;
		margin-bottom: 0;
	}
	.question-box img {
		height: 4rem;
		width: 4rem;
	}
	.player-stat img {
		height: 2rem;
		width: 2rem;
	}
	#timer {
		font-size: 3rem;
	}
	.mobile-view {
		display: none;
	}
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
		margin: 3rem;
		text-align: center;
		border: 3px solid white;
		box-sizing: border-box;
		background: linear-gradient(to right, #b31ace, #39175c);
		box-shadow: 0px 0px 25px 15px rgb(29, 35, 97);
	}
	.card.active {
		animation: timeLow 1s infinite linear;
		animation-timing-function: steps(50);
	}
	@keyframes timeLow{
		0% {
			box-shadow: 0px 0px 25px 15px rgb(29, 35, 97);
		}
		85% {
			box-shadow: 0px 0px 25px 15px rgb(199, 49, 29);
		}
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
		gap: 0.75rem;
	}
	.question div span {
		display: flex;
		align-items: center;
		font-size: 2rem;
		font-family: 'Lilita One', cursive;
	}
	.question p {
		font-family: 'Lilita One', cursive;
		font-size: 2rem;
		color: white;
	}
	.question img {
		height: 3rem;
		width: 3rem;
	}

	@media (min-width: 1024px){
		.question-box {
			height: 10vh;
			font-size: 1em;
		}
	}
	@media (max-width: 768px){
		hr {
			width: 90%;
		}
		.mobile-view {
			display: block;
		}
		.card-container {
			display: none;
		}
		.card {
			display: grid;
			width: 100%;
			margin: auto;
			margin-top: 10%;
			/* grid-template-columns: repeat(5, minmax(1fr, 15vw));
			grid-template-rows: (repeat(5 , minmax(1fr, 10vh))); */
		}
		.mobile-view > .question-box {
			display: flex;
			flex-direction: column;;
			border-radius: 10px;
			height: fit-content;
		}

		.question-box span {
			align-self: center;
			font-size: 2rem;
		}

		/* .card img {
			margin: auto;
			height: 3rem;
			width: 3rem;
		} */
		.question-box p {
			font-size: 1.2rem;
			font-family: light;
		}
		.question-class {
			font-size: 1rem;
		}
    }
</style>
