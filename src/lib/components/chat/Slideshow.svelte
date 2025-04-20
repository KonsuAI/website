<script lang="ts" module>
	import type { MarkedExtension } from 'marked';
	import { getContext, onMount } from 'svelte';
	import type { EmbedContext } from '.';
	import { get, type Writable } from 'svelte/store';

	export type SlideshowEmbed = {
		slideshow: {
			url: string;
			attributions: { author: string; uri: string; photoUri: string }[];
		}[];
	};

	const tokenizerRule = new RegExp(`^@@@SLIDESHOW@@@`);
	export const TAG_NAME = 'konsu-slideshow';
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
	import { twMerge } from 'tailwind-merge';

	const embed: Writable<EmbedContext> = getContext('embed_ctx');
	let slideshow: SlideshowEmbed | undefined = $state(undefined);
	onMount(() => {
		embed.update((ctx) => {
			console.log({ ctx });
			slideshow = ctx.embeds[ctx.current_index];
			return ctx;
		});
	});

	let container: HTMLDivElement | undefined = undefined;

	let scrollPosition = $state(0);
	let selected = $derived(
		Math.round(scrollPosition / ((container as HTMLDivElement | undefined)?.scrollWidth ?? 0))
	);
</script>

<div
	class="not-prose scrollbar-none relative my-4 grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col gap-4 overflow-x-scroll overscroll-none rounded-3xl border-2"
	onscroll={(e) => (scrollPosition = (e.target as HTMLElement).scrollLeft)}
	dir="ltr"
	bind:this={container}
>
	{#if slideshow !== undefined}
		{#each slideshow.slideshow as photo, i (i)}
			<div class="w-full snap-center">
				<img src={photo.url} alt="" class="margin-0 w-full object-cover" />
			</div>
		{/each}

		<div class="absolute bottom-8 left-4">
			<div
				class="fixed grid h-4 w-[25%] max-w-[25%] gap-4"
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
							scrollPosition = i * ((container as HTMLDivElement | undefined)?.scrollWidth ?? 0);
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
