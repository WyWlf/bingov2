<script lang="ts">
	import Cookies from 'js-cookie';
	import audio from '../assets/music/mixkit-arcade-game-jump-coin-216.wav';
	import audio2 from '../assets/music/mixkit-game-click-1114.wav';
	import '../style.css';
	import Device from 'svelte-device-info';
	import { Spinner, Toggle } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	Cookies.remove('sp_mode');
	Cookies.remove('game_session');
	Cookies.remove('fl_mode');
	Cookies.remove('hardcore_mode');
	Cookies.remove('rush_mode');
	let disabled = false;
	onMount(() => {
		if (Device.isMobile == true) {
			disabled = true;
		} else {
			disabled = false;
		}
	});
	let user: any = Cookies.get('username');
	let display = 'none';
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
	let hidden = false;
	function displayDifficulty() {
		if (display == 'none') {
			display = 'grid';
			hidden = true;
		} else {
			hidden = false;
			display = 'none';
		}
	}
	let loaderDiv = 'none';
	let mainDiv = 'block';
	let selected = '';
	let rush_mode = false;
	let hardcore_mode = false;
	let fl_mode = false;
	function load() {
		loaderDiv = 'block';
		mainDiv = 'none';
	}
	function setColor(thisBtn: string) {
		selected = thisBtn;
	}
</script>

<div class="title">
	<h1>MATH</h1>
	<h2>BINGO</h2>
</div>
<hr />
<div class="hide" style="display: {mainDiv};">
	<div id="btn-div">
		<p>Single Player Mode</p>
		<button
			on:focus={audioEff}
			on:mouseover={audioEff}
			on:click={() => {
				clickEff();
				displayDifficulty();
			}}>Operations</button
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<div class="difficulty" style="display: {display};">
			<button
				class={selected == 'easy' ? 'selected' : ''}
				on:click={() => {
					clickEff();
					Cookies.set('sp_mode', 'Easy');
					setColor('easy');
				}}>Easy</button
			>
			<button
				class={selected == 'medium' ? 'selected' : ''}
				on:click={() => {
					clickEff();
					setColor('medium');
					Cookies.set('sp_mode', 'Medium');
				}}>Medium</button
			>
			<button
				class={selected == 'hard' ? 'selected' : ''}
				on:click={() => {
					clickEff();
					Cookies.set('sp_mode', 'Hard');
					setColor('hard');
				}}>Hard</button
			>

			<button
				class={selected == 'very_hard' ? 'selected' : ''}
				on:click={() => {
					clickEff();
					Cookies.set('sp_mode', 'Very Hard');
					setColor('very_hard');
				}}>Very Hard</button
			>
		</div>
		<div class="timer" style="display: {display};">
			<div class="timer inner">
				<Toggle
					class="text-black-600"
					size="large"
					checked={rush_mode}
					on:change={() => {
						if (rush_mode == false) {
							rush_mode = true;
							Cookies.set('rush_mode', 'on');
						} else {
							rush_mode = false;
							Cookies.remove('rush_mode');
						}
					}}>Rush mode &nbsp;<span style="color: black;  float: right" /></Toggle
				>
				<Toggle
					class="text-black-600"
					size="large"
					checked={hardcore_mode}
					on:change={() => {
						if (hardcore_mode == false) {
							hardcore_mode = true;
							Cookies.set('hardcore_mode', 'on');
						} else {
							hardcore_mode = false;
							Cookies.remove('hardcore_mode');
						}
					}}>Hardcore mode &nbsp;<span style="color: black; float: right" /></Toggle
				>
				<Toggle
					class="text-black-600"
					size="large"
					{disabled}
					checked={fl_mode}
					on:change={() => {
						if (fl_mode == false) {
							fl_mode = true;
							Cookies.set('fl_mode', 'on');
						} else {
							fl_mode = false;
							Cookies.remove('fl_mode');
						}
					}}>Flashlight mode &nbsp;<span style="color: black;  float: right" /></Toggle
				>
			</div>
			<br />
			<div class="info" style="display: flex; flex-direction:column; gap: 1rem">
				<span>🚀 Rush mode - Timer is set to 30 seconds.</span>
				<span>💪 Hardcore mode - You start the game with 1 HP.</span>
				<span>🔦 Flashlight mode - Limited view area [Only supported for PC].</span>
			</div>
			{#key selected}
				{#if selected != ''}
					<a
						href="/game"
						style="margin: auto;"
						on:click={() => {
							load();
						}}
					>
						<button class="start" style="width: 15vw; height: 5vh; font-size: 1.5rem;"
							>Start game</button
						>
					</a>
				{/if}
			{/key}
		</div>
		<a
			href="/"
			on:focus={audioEff}
			on:mouseover={audioEff}
			on:click={clickEff}
			class="disabled"
			{hidden}><button>Geometry</button></a
		>
		<a
			href="/"
			on:focus={audioEff}
			on:mouseover={audioEff}
			on:click={clickEff}
			class="disabled"
			{hidden}><button>Fractions</button></a
		>
		<br /><br />
		<a href="/main" on:focus={audioEff} on:mouseover={audioEff} on:click={clickEff}
			><button>Back</button></a
		>
	</div>
</div>
<div style="display: {loaderDiv}; text-align: center; margin-top: 5rem">
	<p>Loading game...</p>
	<br /><br />
	<Spinner class="tw-m-auto" bg="text-gray-100" currentFill="blue" size={20} />
</div>

<svelte:head>
	<style lang="css">
		@tailwind base;
		@tailwind components;
		@tailwind utilities;
	</style>
</svelte:head>

<style>
	.timer {
		display: grid;
		gap: 1rem;
		justify-content: center;
		text-align: center;
	}
	.timer.inner {
		display: flex;
		flex-direction: column;
		margin: auto;
	}
	.selected {
		background-color: rgb(18, 225, 240) !important;
	}
	#btn-div {
		display: grid;
		justify-content: center;
		row-gap: 2em;
		padding: 5em;
		color: white;
	}

	.difficulty {
		grid-template-columns: repeat(4, 1fr);
		justify-items: center;
	}

	.difficulty button {
		background: #4981ec;
		width: 10vw;
	}
	.disabled > button {
		color: rgb(194, 28, 28);
		text-decoration: line-through;
	}
	button {
		color: black;
		font-family: 'Roboto', sans-serif;
		background: linear-gradient(to right, #4981ec, #8ca1c2);
		border: 3px solid white;
		border-radius: 15px;
		height: 10vh;
		width: 50vw;
		font-size: 2em;
	}

	p {
		justify-self: center;
		font-size: 1.5em;
	}
	@media (max-width: 768px) {
		button {
			font-size: 1.5rem;
			width: 70vw;
		}
		.start {
			width: 50vw !important;
			font-size: 1rem !important;
		}
	}

	@media (max-width: 1024px) {
		.difficulty button {
			font-size: 1.3rem;
		}
	}

	@media (max-width: 768px) {
		.difficulty {
			grid-template-columns: none;
			grid-template-rows: repeat(4, 1fr);
			gap: 1rem;
		}
		.difficulty button {
			width: 50vw;
		}
	}

	@media (max-width: 468px) {
	}
</style>
