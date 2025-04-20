<script lang="ts" module>
	import DOMPurify from 'dompurify';
	import { Marked } from 'marked';
	import { browser } from '$app/environment';
	import { EMBEDS } from '.';

	console.log({ EMBEDS });

	const purifier = DOMPurify(globalThis?.window);

	// Changing paragraphs to use <div> to not break SvelteKit,
	// because *technically* <div> inside <p> is invalid HTML.
	const marked = new Marked(...EMBEDS.map((embed) => embed.SYNTAX), {
		renderer: {
			paragraph({ tokens }) {
				return `<div>${this.parser.parseInline(tokens)}</div>`;
			}
		}
	});

	const snippet = createRawSnippet((markdown: () => string) => {
		return {
			render: () => {
				let sourceMarkdown = markdown();
				console.log({ sourceMarkdown });
				if (sourceMarkdown.trim() === '') {
					return '<div></div>';
				}

				let a = purifier.sanitize(marked.parse(sourceMarkdown, { async: false }), {
					ADD_TAGS: EMBEDS.map((embed) => embed.TAG_NAME)
				});

				return `<div>${a}</div>`;
			},
			setup: (el) => {
				const components = EMBEDS.flatMap(({ TAG_NAME, extract, default: Component }) => {
					return Array.from(el.querySelectorAll(TAG_NAME)).map((el) => {
						return mount(Component, {
							target: el,
							props: extract(el)
						});
					});
				});
				return () => components.forEach((comp) => unmount(comp));
			}
		};
	});
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { createRawSnippet, mount, unmount } from 'svelte';

	let { user, markdown }: { user: boolean; markdown: string } = $props();
</script>

<div
	class={twMerge(
		'select prose prose-lg md:prose-base word-break-break-word prose-invert max-w-[80%] leading-none',
		user ? 'bg-konsu-dark-01 justify-self-end rounded-3xl px-4 py-2' : 'my-2'
	)}
>
	{#key markdown}
		{@render snippet(markdown)}
	{/key}
</div>
