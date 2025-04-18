<script lang="ts" module>
	import FilterIcon from '~icons/mdi/filter';
	import GroupIcon from '~icons/mdi/account-group';
	import MoneyIcon from '~icons/mdi/money';
	import type { MarkedExtension } from 'marked';
	import { twMerge } from 'tailwind-merge';

	const FILTER_TYPES = {
		FILTER: [FilterIcon, ''],
		GROUP: [GroupIcon, 'Group Size'],
		BUDGET: [MoneyIcon, 'Budget']
	} as const;
	type Kind = keyof typeof FILTER_TYPES;

	const tokenizerRule = new RegExp(`^@(${Object.keys(FILTER_TYPES).join('|')})@`);
	export const TAG_NAME = 'konsu-filter';
	export const SYNTAX: MarkedExtension = {
		extensions: [
			{
				name: TAG_NAME,
				level: 'inline',
				start: (src) => src.match(/@/)?.index,
				tokenizer(src) {
					const match = tokenizerRule.exec(src);
					if (match === null) return;

					const kind = match[1];
					return {
						type: TAG_NAME,
						raw: match[0],
						kind
					};
				},
				renderer(token) {
					return `<${TAG_NAME} kind="${token.kind}"></${TAG_NAME}>`;
				}
			}
		]
	};

	export const extract = (el: Element) => {
		const kind = el.getAttribute('kind') as Kind;
		return { kind };
	};
</script>

<script lang="ts">
	let { kind, inline = true }: { kind: Kind; inline?: boolean } = $props();
	let [Icon, text] = $derived(FILTER_TYPES[kind]);
</script>

<button
	type="button"
	class={twMerge(
		'flex w-max cursor-pointer flex-row items-center rounded-full border-2 border-amber-50 px-2 py-[6px] font-bold',
		inline ? 'my-1 inline-flex align-middle' : 'flex'
	)}
>
	<Icon class={kind !== 'FILTER' ? 'mr-0.5' : ''} width="1.2rem" height="1.2rem" />
	{text}
</button>
