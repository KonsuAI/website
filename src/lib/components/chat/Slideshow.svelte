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
	const embed: Writable<EmbedContext> = getContext('embed_ctx');
	let slideshow: SlideshowEmbed | undefined = $state(undefined);
	onMount(() => {
		embed.update((ctx) => {
			console.log({ ctx });
			slideshow = ctx.embeds[ctx.current_index];
			return ctx;
		});
	});
</script>

<div
	class="not-prose grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col overflow-x-auto rounded-3xl border-2"
>
	{#if slideshow !== undefined}
		{#each slideshow.slideshow as photo}
			<div class="slide w-full">
				<img src={photo.url} alt="" class="margin-0 object-cover" />
			</div>
		{/each}
	{:else}
		<p>Could not load embed</p>
	{/if}
</div>
