<script lang="ts" module>
	import type { MarkedExtension } from 'marked';
	import { getContext, onMount } from 'svelte';
	import type { EmbedContext } from '.';

	export type SlideshowEmbed = {
		slideshow: {
			url: string;
			attributions: { author: string; uri: string; photoUri: string }[];
		}[];
	};

	const tokenizerRule = new RegExp(`^@@@SLIDESHOW@@@`);
	export const TAG_NAME = 'konsu-slideshow';
	export const HAS_PAYLOAD = true;
	export const SYNTAX: MarkedExtension = {
		extensions: [
			{
				name: TAG_NAME,
				level: 'inline',
				start: (src) => src.match(/@@@/)?.index,
				tokenizer(src) {
					const match = tokenizerRule.exec(src);
					if (match === null) return;

					return {
						type: TAG_NAME,
						raw: match[0]
					};
				},
				renderer(_token) {
					return `<${TAG_NAME}></${TAG_NAME}>`;
				}
			}
		]
	};

	export const extract = (el: Element) => {
		return {};
	};
</script>

<script lang="ts">
	let container: HTMLDivElement | undefined = $state(undefined);

	let { payload: slideshow }: { payload: SlideshowEmbed } = $props();

	let scrollPosition = $state(0);
	let selected = $derived(
		Math.round(
			(scrollPosition / ((container as HTMLDivElement | undefined)?.scrollWidth ?? 0)) *
				slideshow!.slideshow.length
		)
	);
</script>

<div class="embed not-prose relative my-4 aspect-video w-full lg:max-w-[40dvw]">
	{#if slideshow !== undefined}
		<div
			class="absoulte scrollbar-none z-0 grid h-full w-full snap-x snap-mandatory auto-cols-[100%] grid-flow-col auto-rows-[100%] gap-4 overflow-x-scroll overscroll-none rounded-3xl border-2"
			onscroll={(e) => (scrollPosition = (e.target as HTMLElement).scrollLeft)}
			dir="ltr"
			bind:this={container}
		>
			{#each slideshow.slideshow as photo, i (i)}
				<div class="snap-center">
					<img src={photo.url} alt="" class="margin-0 h-full w-full object-cover" />
				</div>
			{/each}
		</div>

		<div class="absolute bottom-4 left-4 z-10 w-1/4 max-w-[25%]">
			<div
				class="grid h-4 gap-4"
				style="grid-template-columns: repeat({slideshow.slideshow.length}, 1fr)"
			>
				{#each slideshow.slideshow as _, i (i)}
					<button
						class="cursor-pointer rounded-full transition-colors duration-300"
						style:background-color={i == selected
							? 'rgba(255, 255, 255, 1.0)'
							: 'rgba(255, 255, 255, 0.25)'}
						type="button"
						aria-label="Photo {i + 1} of {slideshow.slideshow.length}"
						onclick={() => {
							scrollPosition =
								(i / slideshow!.slideshow.length) *
								((container as HTMLDivElement | undefined)?.scrollWidth ?? 0);
							container?.scrollTo({
								left: scrollPosition,
								behavior: 'smooth'
							});
						}}
					></button>
				{/each}
			</div>
		</div>
	{:else}
		<p>Could not load embed</p>
	{/if}
</div>
