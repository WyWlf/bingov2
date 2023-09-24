<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const light = document.getElementById('light');
		const roomPosition = {
			top: document.getElementById('darkness')?.offsetTop,
			left: document.getElementById('darkness')?.offsetLeft
		};

		const topMargin = roomPosition.top + window.innerHeight * Math.random();
		const position = {
			left: Math.random() * roomPosition.left,
			top: topMargin + 150 < window.innerHeight ? topMargin : topMargin - 350
		};

		function update(e) {
			var x = e.clientX - 150 || e.touches[0].clientX - 150;
			var y = e.clientY - 150 || e.touches[0].clientY - 150;
			light.style.left = x + 'px';
			light.style.top = y + 'px';
		}

		document.addEventListener('mousemove', update);
		document.addEventListener('touchmove', update);
	});
</script>

<div class="darkness" id="darkness">
	<div class="light" id="light">
		<div class="shadow" />
	</div>
</div>

<style>
	.darkness {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: hidden;
		pointer-events: none;
		z-index: 1;
	}

	.light {
		position: absolute;
		width: 300px;
		height: 300px;
		border-radius: 100%;
		-webkit-box-shadow: 400vh 0px 0px 400vw rgba(0, 0, 0, 0.99);
		-moz-box-shadow: 400vh 0px 0px 400vw rgba(0, 0, 0, 0.99);
		box-shadow: 400vh 0px 0px 400vw rgba(0, 0, 0, 0.99);
	}

	.shadow {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 100%;
		-webkit-box-shadow: inset 4px 0 37px 53px rgba(0, 0, 0, 0.9);
		-moz-box-shadow: inset 4px 0 37px 53px rgba(0, 0, 0, 0.9);
		box-shadow: inset 4px 0 37px 53px rgba(0, 0, 0, 0.9);
	}
</style>
