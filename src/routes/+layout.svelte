<script lang="ts">

	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import '../app.css';
	let { children } = $props();

	// let viewTransitionName = $state('none');

	onNavigate((navigation) => {
		if (navigation.type === 'popstate') {
			// viewTransitionName = 'back';
		}

		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
				// viewTransitionName = 'none';
			});
		});
	});
</script>

<main class="bg-konsu-dark-00">
	{@render children()}
</main>

<style>
	@keyframes slide-from-right {
		from {
			transform: translateX(100vw);
		}
	}

	@keyframes slide-left {
		to {
			transform: translateX(-100vw);
		}
	}

	@keyframes slide-from-left {
		from {
			transform: translateX(-100vw);
		}
	}

	@keyframes slide-right {
		to {
			transform: translateX(100vw);
		}
	}

	:root {
		--page-transition-time: 500ms;
	}

	:root::view-transition-old(root) {
		animation: var(--page-transition-time) ease-in-out both slide-left;
	}

	:root::view-transition-new(root) {
		animation: var(--page-transition-time) ease-in-out both slide-from-right;
		animation-delay: 50ms;
	}

	:root::view-transition-old(back) {
		animation: var(--page-transition-time) ease-in-out both slide-right;
	}

	:root::view-transition-new(back) {
		animation: var(--page-transition-time) ease-in-out both slide-from-left;
		animation-delay: 50ms;
	}
</style>
