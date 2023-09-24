<script lang="ts">
	import Cookies from 'js-cookie';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		if (Cookies.get('username') == null && $page.url.pathname != '/') {
			window.location.href = '/'
		}
	});
</script>

<slot />
