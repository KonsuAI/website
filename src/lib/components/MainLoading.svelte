<script lang="ts">
	import { fly } from 'svelte/transition';
	import Logo from './Logo.svelte';
	import { onMount } from 'svelte';
	import { backOut } from 'svelte/easing';
	import { easeOut } from 'just-curves';

	let display = $state(false);
	let arr = $state(Array(8).fill(10));

	onMount(() => {
		document.fonts.ready.then(() => requestAnimationFrame(() => (display = true)));

		let adv = function (max: number, tick: (_: number) => void, step = 1, qty = 5) {
			let t = 0;

			let inner = () => {
				t += step;

				tick((1.5 * t) / max);

				if (t < max * qty) {
					requestAnimationFrame(inner);
				}
			};

			requestAnimationFrame(inner);
		};

		adv(
			43,
			(v) => {
				arr = Array(10)
					.fill(10)
					.map((base, i) => base + easeOut(Math.min(Math.max(0, v - (i * 15) / 20), 1)) * 43);
			},
			0.5,
			7
		);
	});
</script>

<div class="grid h-[100dvh] w-[100dvw]">
	<div class="flex flex-col place-self-center">
		<Logo />
		<div class="h-[96pt] w-full">
			{#if display}
				<h2
					class="font-title text-konsu-light-00 self-center text-[48pt]"
					in:fly={{ y: 50, delay: 200, duration: 800, easing: backOut }}
				>
					Konsu
				</h2>
			{/if}

			<!-- <span class="text-konsu-dark-01">Loading</span> -->
		</div>

		<div class="grid grid-flow-col-dense flex-row gap-x-1 self-center">
			{#each Array(7)
				.fill(0)
				.map((_, i) => i) as i (i)}
				<svg
					width="20"
					height="43"
					viewBox="0 0 20 43"
					xmlns="http://www.w3.org/2000/svg"
					style={i % 2 === 0 ? '' : 'transform: rotate(180deg)'}
				>
					<mask id="drop">
						<path
							d="M16.6667 36.3846L19.7067 12.2914C19.9067 11.5372 20 10.7434 20 9.92308C20 4.44554 15.52 0 10 0C4.48 0 0 4.44554 0 9.92308C0 10.7434 0.093335 11.5372 0.293335 12.2914L3.33333 36.3846C3.33333 40.0363 6.32 43 10 43C13.68 43 16.6667 40.0363 16.6667 36.3846Z"
							fill="white"
						/>
					</mask>

					<rect
						x="0"
						y="0"
						width="20"
						height="43"
						mask="url(#drop)"
						fill="var(--color-konsu-dark-01)"
					/>
					<circle cx="10" cy="53" r={arr[i]} fill="#F0BB5B" mask="url(#drop)" />
				</svg>
			{/each}
		</div>
	</div>
</div>
