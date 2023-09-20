<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
	</div>
	<button style="float: right;" autofocus on:click={() => dialog.close()}>Close</button>
</dialog>

<style>
	button {
		all:unset;
		pointer-events: all;
		border: 3px solid white;
		padding: 0.5rem;
		border-radius: 0.7rem;
		background: rgb(202, 35, 35);
		margin: 2rem;
		margin-top: 0;
		color: white;
		font-size: 0.8rem;
		width: 9vw;
		height: 2.4vh;
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
	}
	button:hover {
		box-shadow: 0px 0px 15px 5px red;
		transition: 0.5s;
	}
	dialog {
		max-width: max-content;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
