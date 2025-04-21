<script lang="ts">
	import SuggestedPlace from '$lib/components/trips/SuggestedPlace.svelte';
	import Error from '~icons/mdi/error';
	import Send from '~icons/mdi/send';
	import ArrowDown from '~icons/mdi/arrow-down';
	import CompassRose from '~icons/mdi/compass-rose';
	import Loading from '~icons/mdi/loading';

	import { Chat as LlmConversation } from '$lib/net/api';
	import ChatFilter from '$lib/components/chat/ChatFilter.svelte';
	import Message from '$lib/components/chat/Message.svelte';
	import Back from '$lib/components/Back.svelte';
	import { onMount, setContext } from 'svelte';
	import type { EmbedContext, Embed } from '$lib/components/chat';
	import { writable, type Writable } from 'svelte/store';

	let messages: { text: string; user: boolean }[] = $state([]);
	let main: HTMLElement;
	let isScrolledToBottom = $state(false);
	let promConversation: Promise<LlmConversation> = $state(null as any);

	$effect.pre(() => {
		(window as any).LlmConversation = LlmConversation;
	});

	$effect(() => {
		if (isScrolledToBottom) {
			main.scrollTop = main.scrollHeight - main.clientHeight;
		}

		promConversation = LlmConversation.new();
	});

	let textInput: string = $state('');
	let embeds: EmbedContext = setContext('embed_ctx', { embeds: [], main: undefined as any });

	onMount(() => {
		embeds.main = main;
	});

	// messages.subscribe(() => embeds.update((ctx) => ((ctx.current_index = 0), ctx)));

	const sendMessage = (conversation: LlmConversation) => (e: MouseEvent) => {
		e.preventDefault();
		isScrolledToBottom = main?.scrollHeight - main?.clientHeight <= main?.scrollTop + 10;

		if (textInput.trim() == '') {
			return;
		}
		messages.push({ text: textInput, user: true });

		let obj = { text: '', user: false };
		messages.push(obj);

		conversation?.send(
			{ prompt: textInput },
			(response) => {
				console.log({ response });
				if (response) {
					obj.text += response;
				}

				messages[messages.length - 1] = obj;
			},
			(embed) => {
				console.log({ got_embed: embed });
				embeds.embeds.push(embed);
			}
		);

		textInput = '';
	};
</script>

<div class="grid h-[100dvh] w-screen grid-flow-row grid-rows-[auto_1fr_auto] transition-all">
	<!-- Back button -->
	<div class="bg-konsu-dark-01 grid min-h-12 items-center px-3">
		<Back />
	</div>

	<!-- Main content -->
	<!-- BUG: On mobile browsers, you lose your position when the keyboard UI opens.
      Too bad! -->
	<main class="grid w-screen auto-rows-max gap-0.5 overflow-y-auto px-6 py-4" bind:this={main}>
		{#if messages.length == 0}
			<CompassRose
				width="3.5rem"
				height="3.5rem"
				class="animate-once animate-pulse place-self-center"
			/>
			<h3 class="place-self-center text-center text-3xl font-bold">A New Voyage.</h3>
			<hr class="my-2 border-t-2 border-dotted" />
			<span class="text-konsu-light-00 mb-4 text-xl leading-none">
				Here are some packages we think you'd like.
			</span>
			<div class="grid w-full auto-cols-max grid-flow-col gap-4 overflow-x-auto">
				<SuggestedPlace
					class="h-60"
					title="Amalfi Coast"
					imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg/1920px-Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg"
					meta="5 Nights · £200/pp"
				/>
				<SuggestedPlace
					title="Stockholm"
					imageUrl="https://visitsweden.com/_next/image/?url=https%3A%2F%2Fs3-eu-north-1.amazonaws.com%3A443%2Fpy3.visitsweden.com%2Foriginal_images%2F2018-07-05_041957-146932_IBSweb.jpg&w=1980&q=75"
					meta="2 Nights · £77/pp"
				/>
			</div>
			<hr class="my-2 mt-4 border-t-2 border-dotted" />

			<span class="text-konsu-light-00 text-xl">
				Or, let us plan your perfect holiday by sending a message below.
			</span>
			<ArrowDown
				width="2rem"
				height="2rem"
				class="animate-fade-down animate-delay-[1000ms] place-self-center"
			/>
		{/if}
		{#each messages as { text: markdown, user }, i (i)}
			<Message {user} {markdown} />
		{/each}
	</main>

	<!-- BUG: Temporarily triggers loading for some reason first time you send a message. -->
	<!-- AI Text box -->
	<div
		class="bg-konsu-light-01 border-konsu-light-02 focus-within:border-konsu-ui-primary
        relative grid w-screen
        max-w-full grid-flow-col grid-cols-[1fr_max-content] grid-rows-[1fr_max-content]
        gap-2 border-t-2 p-4 px-3"
	>
		{#await promConversation}
			<div class="flex min-h-24 flex-col items-center place-self-center">
				<Loading width="1.5rem" height="1.5rem" class="animate-spin" />
				<strong class="font-bold">Loading...</strong>
			</div>
		{:then conversation}
			<textarea
				class="placeholder:text-konsu-light-00 col-start-1 box-border field-sizing-content h-max max-h-75 w-full max-w-full resize-none px-1 leading-[1.1] outline-0 outline-none placeholder:italic"
				placeholder="Where can I take you?"
				bind:value={textInput}
			></textarea>
			<button
				class="bg-konsu-ui-primary shadow-md-3 col-start-2 aspect-square h-max w-max cursor-pointer rounded-xl p-[10px]"
				type="button"
				aria-label="Send message."
				onmousedown={sendMessage(conversation)}
			>
				<Send width="1.5rem" height="1.5rem" color="rgb(76, 91, 113)" />
			</button>
			<div
				class="width-full col-start-1 col-end-3 grid auto-cols-max grid-flow-col gap-2 overflow-x-auto pb-2"
			>
				<ChatFilter kind="FILTER" />
				<ChatFilter kind="BUDGET" />
				<ChatFilter kind="GROUP" />
			</div>
		{:catch error}
			<div class="flex min-h-24 flex-col items-center place-self-center">
				<Error width="1.5rem" height="1.5rem" />
				There was an error whilst connecting to the AI. Please try again.
				<button
					class="cursor-pointer rounded-full bg-blue-500 p-2 px-4 font-bold"
					type="button"
					onclick={() => {
						console.error(error);
						promConversation = LlmConversation.new();
					}}>Retry</button
				>
			</div>
		{/await}
	</div>
</div>

<style>
	:global(konsu-insert) {
		display: contents;
	}
</style>
