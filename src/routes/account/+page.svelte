<script lang="ts">
	import { Tabs, TabItem, AccordionItem, Accordion, Button } from 'flowbite-svelte';
	import Cookies from 'js-cookie';
	import { onMount } from 'svelte';
    let info: any = []
    onMount(async () => {
        const sql = await fetch(
            'http://192.168.254.104/sv/bingo/src/routes/php/retrieve_matches.php',
            {
                method: 'POST',
                body: JSON.stringify({data: Cookies.get('username')})
            }
        )
        info = await sql.json()
     }
    )
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
            <br>
            <Accordion activeClasses="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800" inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
                {#each info as {game, time_finished, highest_streak, correct_answers, wrong_answers, status, mode, date}, i }
                {#if status == 0 && mode == 0}
                <AccordionItem class="bg-red-200 hover:bg-red-300">
                    <span slot="header">Game {game}
                      <br>
                      <small>{date}</small>
                    </span>
                    <p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400">
                      <b>Game stats</b>
                    </p>
                    <div class="stats">
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
                    <span slot="header">Game {game}
                      <br>
                      <small>{date}</small>
                    </span>
                    <p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400">
                      <b>Game stats</b>
                    </p>
                    <div class="stats">
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
		</TabItem>
		<TabItem class="w-full">
			<span slot="title">Multiplayer</span>
			<p class="flex justify-center text-sm text-gray-500 dark:text-gray-400">
				<b>Match History</b>
			</p>
            <br>
            <Accordion activeClasses="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800" inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
              {#each info as {game, time_finished, highest_streak, correct_answers, wrong_answers, status, mode, host, winner, date}, i }
              {#if status == 0 && mode == 1}
              <AccordionItem class="bg-red-200 hover:bg-red-300">
                  <span slot="header">Game {game}
                    <br>
                    <small>Host: {host}</small>
                    <br>
                    <small>{date}</small>
                  </span>
                  <p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400">
                    <b>Game stats</b>
                  </p>
                  <br><br>
                  <div class="stats">
                    <b>Winner: </b>
                    {#if winner == null || winner == ''}
                      <p style="font-style: italic;">No records</p>
                    {:else}
                    <p>{winner}</p>
                    {/if}
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
                {:else if status == 1 && mode == 1}
                <AccordionItem class="bg-blue-200 hover:bg-blue-300">
                  <span slot="header">Game {game}
                    <br>
                    <small>Host: {host}</small>
                    <br>
                    <small>{date}</small>
                  </span>
                  <p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400">
                    <b>Game stats</b>
                  </p>
                  <div class="stats">
                    <b>Winner: </b>
                    {#if winner == null || winner == ''}
                      <p style="font-style: italic;">No records</p>
                    {:else}
                    <p class="font-medium">{winner}</p>
                    {/if}
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
		</TabItem>
	</Tabs>
    <br>
    <div class="footer-nav">
        <Button color="dark" href="/main">Back</Button>
    </div>
</div>

<svelte:head>
	<style lang="css">
		@tailwind base;
		@tailwind components;
		@tailwind utilities;
	</style>
    <style>
        button {
          border: unset;
          border-radius: unset;
          height: unset;
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
                display: grid;
                grid-template-columns: 65% 35%;
                row-gap: 2rem;
                justify-items: normal;
            }
        }
        .footer-nav {
            position: relative;
            float: right;
            padding: 1rem;
        }
    </style>
</svelte:head>


