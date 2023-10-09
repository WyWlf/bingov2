<script lang="ts">
	import { Tabs, TabItem, AccordionItem, Accordion, Button, Modal } from 'flowbite-svelte';
	import { PUBLIC_APIPATH } from '$env/static/public';
	import '@carbon/charts-svelte/styles.css';
	import { BarChartStacked } from '@carbon/charts-svelte';
	export let data;
	let info: any = data.post;
	let modal = false;
	let currGraph: number;
	let graphInfo = new Array();
	let correctMean: number;
	let wrongMean: number;
	let wrongLowest: number;
	let correctLowest: number;
	let wrongHighest: number;
	let correctHighest: number;
	async function getWinner(id: string, game_id: number) {
		const stats = await fetch(PUBLIC_APIPATH + 'getWinner.php', {
			method: 'POST',
			body: JSON.stringify({
				id: id,
				game_id: game_id
			})
		});
		let res = await stats.json();
		return res;
	}

	async function graphData(game_id: number) {
		const stats = await fetch(PUBLIC_APIPATH + 'graphData.php', {
			method: 'POST',
			body: JSON.stringify({
				game_id: game_id
			})
		});
		let arr: any = [];
		let res = await stats.json();
		let correctTotal = 0;
		let wrongTotal = 0;
		let participants = 0;
		let lowestC = 99999;
		let highestC = 0;
		let lowestW = 99999;
		let highestW = 0;
		res.forEach((el: any) => {
			participants += 1;
			correctTotal += el.correct_answers;
			wrongTotal += el.wrong_answers;
			arr.push({
				group: 'Incorrect answers',
				key: el.username,
				value: el.wrong_answers
			});
			arr.push({
				group: 'Correct answers',
				key: el.username,
				value: el.correct_answers
			});
			if (lowestC > el.correct_answers) {
				lowestC = el.correct_answers;
			}
			if (highestC < el.correct_answers) {
				highestC = el.correct_answers;
			}
			if (lowestW > el.wrong_answers) {
				lowestW = el.wrong_answers;
			}
			if (highestW < el.wrong_answers) {
				highestW = el.wrong_answers;
			}
			graphInfo = arr;
		});
		correctLowest = lowestC;
		correctHighest = highestC;
		wrongLowest = lowestW;
		wrongHighest = highestW;
		correctMean = correctTotal / participants;
		wrongMean = wrongTotal / participants;
	}
	const graphOptions = {
		title: "Player's statistic",
		height: '400px',
		theme: 'g100'
	};
</script>

<div class="main-body">
	<Tabs
		style="full"
		defaultClass="flex rounded-lg divide-x divide-dark-200 shadow dark:divide-gray-700"
	>
		<TabItem class="w-full" open>
			<span slot="title">Single Player</span>
			<p class="flex justify-center text-sm text-gray-500 dark:text-gray-400">
				<b>Match History</b>
			</p>
			<br />
			<div class="accordion-container">
				<Accordion>
					{#each info as { game, time_finished, highest_streak, correct_answers, wrong_answers, status, mode, date, rush, flashlight, hardcore, level }, i}
						{#if status == 0 && mode == 0}
							<AccordionItem class="bg-red-200 hover:bg-red-300">
								<span slot="header"
									>Game {game}
									<br />
									<small>{date}</small>
								</span>
								<p class="flex justify-center">
									<b
										>Modes:
										{#if rush > 0}
											<span class="text-blue-500">[Rush]</span>
										{/if}
										{#if flashlight > 0}
											<span class="text-blue-500">[Flashlight]</span>
										{/if}
										{#if hardcore > 0}
											<span class="text-blue-500">[Hardcore]</span>
										{/if}
									</b>
								</p>
								<br />
								<hr />
								<p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400">
									<b>Game stats</b>
								</p>
								<br />
								<div class="stats">
									<b>Difficulty</b>
									<p>{level}</p>
									<b>Time finished: </b>
									<p>{time_finished}</p>
									<b>Highest answer streak: </b>
									<p>{highest_streak}</p>
									<b>Correct answers: </b>
									<p>{correct_answers}</p>
									<b>Wrong answers: </b>
									<p>{wrong_answers}</p>
								</div>
							</AccordionItem>
						{:else if status == 1 && mode == 0}
							<AccordionItem class="bg-blue-200 hover:bg-blue-300">
								<span slot="header"
									>Game {game}
									<br />
									<small>{date}</small>
								</span>
								<p class="flex justify-center">
									<b
										>Modes:
										{#if rush > 0}
											<span class="text-blue-500">[Rush]</span>
										{/if}
										{#if flashlight > 0}
											<span class="text-blue-500">[Flashlight]</span>
										{/if}
										{#if hardcore > 0}
											<span class="text-blue-500">[Hardcore]</span>
										{/if}
									</b>
								</p>
								<br />
								<hr />
								<p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400">
									<b>Game stats</b>
								</p>
								<br />
								<div class="stats">
									<b>Difficulty</b>
									<p>{level}</p>
									<b>Time finished: </b>
									<p>{time_finished}</p>
									<b>Highest answer streak: </b>
									<p>{highest_streak}</p>
									<b>Correct answers: </b>
									<p>{correct_answers}</p>
									<b>Wrong answers: </b>
									<p>{wrong_answers}</p>
								</div>
							</AccordionItem>
						{/if}
					{/each}
				</Accordion>
			</div>
		</TabItem>
		<TabItem class="w-full">
			<span slot="title">Multiplayer</span>
			<p class="flex justify-center text-sm text-gray-500 dark:text-gray-400">
				<b>Match History</b>
			</p>
			<br />
			<div class="accordion-container">
				<Accordion>
					{#each info as { game, time_finished, highest_streak, correct_answers, wrong_answers, status, mode, host, winner, date }, i}
						{#if status == 0 && mode == 1}
							<AccordionItem class="bg-red-200 hover:bg-red-300">
								<span slot="header"
									>Game {game}
									<br />
									<small>Host: {host}</small>
									<br />
									<small>{date}</small>
								</span>
								<div class="text-center">
									<b>Time finished: </b>
									<p>{time_finished}</p>
								</div>
								<br /><br />
								<div class="stats">
									{#if winner == null || winner == ''}
										<b>Winner: </b>
										<p style="font-style: italic;">No winner recorded</p>
									{:else}
										<Accordion class="col-span-2 w-full">
											<AccordionItem class="bg-green-200 hover:bg-green-300">
												<span slot="header" class="flex justify-center flex gap-2">
													<b>Winner: </b>
													<p>{winner}</p>
												</span>
												<br />
												<div class="stats">
													{#await getWinner(winner, game) then data}
														<b>Highest answer streak: </b>
														<p>{data[0].highest_streak}</p>
														<b>Correct answers: </b>
														<p>{data[0].correct_answers}</p>
														<b>Wrong answers: </b>
														<p>{data[0].wrong_answers}</p>
													{/await}
												</div>
											</AccordionItem>
										</Accordion>
										<hr class="w-full col-span-2 bg-slate-950 h-1" />
									{/if}
									<b class="col-span-2 text-center">Your stats</b>
									<b>Highest answer streak: </b>
									<p>{highest_streak}</p>
									<b>Correct answers: </b>
									<p>{correct_answers}</p>
									<b>Wrong answers: </b>
									<p>{wrong_answers}</p>
									<button
										class="graph"
										on:click={() => {
											(modal = !modal), (currGraph = game);
										}}>View graph</button
									>
								</div>
							</AccordionItem>
						{:else if status == 1 && mode == 1}
							<AccordionItem class="bg-blue-200 hover:bg-blue-300">
								<span slot="header"
									>Game {game}
									<br />
									<small>Host: {host}</small>
									<br />
									<small>{date}</small>
								</span>
								<p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400">
									<b>Game stats</b>
								</p>
								<div class="stats">
									<b>Winner: </b>
									<p class="font-medium">You</p>
									<b>Time finished: </b>
									<p>{time_finished}</p>
									<b>Highest answer streak: </b>
									<p>{highest_streak}</p>
									<b>Correct answers: </b>
									<p>{correct_answers}</p>
									<b>Wrong answers: </b>
									<p>{wrong_answers}</p>
									<button
										class="graph"
										on:click={() => {
											(modal = !modal), (currGraph = game);
										}}>View graph</button
									>
								</div>
							</AccordionItem>
						{/if}
					{/each}
				</Accordion>
			</div>
		</TabItem>
	</Tabs>
	<br />
	<div class="footer-nav" data-sveltekit-preload-data="off">
		<Button color="dark" href="/main" size="xl">Back</Button>
	</div>
</div>

<Modal title="Graph" bind:open={modal} autoclose>
	{#await graphData(currGraph)}
		<p class="text-center">Loading...</p>
	{:then data}
		<BarChartStacked
			data={graphInfo}
			options={{
				title: 'Match statistics',
				axes: {
					left: {
						mapsTo: 'value',
						stacked: true
					},
					bottom: {
						mapsTo: 'key',
						scaleType: 'labels'
					}
				},
				height: '400px'
			}}
		/>
		<div class="grid grid-col-2 gap-2">
			<p class="text-center col-span-2 font-bold">Other information:</p>
			<p class="">Highest correct answers:</p>
			<span class="text-center">{correctHighest}</span>
			<p class="">Lowest correct answers:</p>
			<span class="text-center">{correctLowest}</span>
			<p class="">Highest wrong answers:</p>
			<span class="text-center">{wrongHighest}</span>
			<p class="">Lowest wrong answers:</p>
			<span class="text-center">{wrongLowest}</span>
			<p class="">Mean for wrong answers:</p>
			<span class="text-center">{wrongMean}</span>
			<p class="">Mean for correct answers:</p>
			<span class="text-center">{correctMean}</span>
		</div>
	{/await}
</Modal>

<svelte:head>
	<style lang="css">
		@tailwind base;
		@tailwind components;
		@tailwind utilities;
		html {
			background: rgb(2, 0, 36);
			background: linear-gradient(
				90deg,
				rgba(2, 0, 36, 1) 0%,
				rgba(27, 54, 157, 1) 0%,
				rgba(0, 215, 255, 1) 100%
			);
			height: 100%;
		}
		.graph {
			background-color: whitesmoke;
			outline: 1px solid black;
			text-align: center;
			padding: 0.5rem;
			grid-column: span 2;
		}
		button {
			border: unset;
			border-radius: unset;
			height: unset;
			width: unset
		}
		.main-body {
			width: 70%;
			margin: auto;
			background-color: rgb(228, 228, 228);
			padding: 1rem;
			margin-top: 1rem;
			height: 96svh;
			height: 96vh;
			overflow-y: auto;
			border-radius: 1rem;
		}
		.stats {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			row-gap: 2rem;
			width: 100%;
			justify-content: center;
			justify-items: center;
		}
		@media (max-width: 768px) {
			.main-body {
				width: 90%;
			}
			.stats {
				grid-template-columns: 65% 35%;
				justify-items: normal;
			}
			.graph {
				justify-self: center;
				width: max-content;
			}
		}
		.footer-nav {
			position: absolute;
			bottom: 0;
			right: 0;
			padding: 2rem;
		}
	</style>
</svelte:head>
