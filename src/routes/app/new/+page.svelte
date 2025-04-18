<script lang="ts">
	import SuggestedPlace from '$lib/components/trips/SuggestedPlace.svelte';
	import ArrowLeft from '~icons/mdi/arrow-left';
	import Send from '~icons/mdi/send';

	import { twMerge } from 'tailwind-merge';
	import { onMount } from 'svelte';
	import { Conversation as LlmConversation } from '$lib/net/api';
	import { writable } from 'svelte/store';
	import ChatFilter from '$lib/components/chat/ChatFilter.svelte';
	import { Message } from '$lib/components/chat';

	onMount(() => {
		(window as any).Conversation = LlmConversation;
	});

	let messages: { text: string; user: boolean }[] = $state([]);
	let main: HTMLElement;
	let isScrolledToBottom = $state(false);
	let conversation: LlmConversation | null = $state(null);
	$effect.pre(() => {});

	$effect(() => {
		if (isScrolledToBottom) {
			main.scrollTop = main.scrollHeight - main.clientHeight;
		}

		LlmConversation.new(Math.floor(Math.random() * 1000).toString()).then(
			(convo) => (conversation = convo)
		);
	});

	let currentMessage: string = $state('');
	const sendMessage = (e: MouseEvent) => {
		e.preventDefault();
		isScrolledToBottom = main?.scrollHeight - main?.clientHeight <= main?.scrollTop + 10;

		if (currentMessage.trim() == '') {
			return;
		}
		messages.push({ text: currentMessage, user: true });

		let obj = { text: '', user: false };
		messages.push(obj);

		conversation?.send({ prompt: currentMessage }, (response) => {
			console.log(response);
			if (response.message) {
				obj.text += response.message;
			}
			messages[messages.length - 1] = obj;
		});

		currentMessage = '';
	};
</script>

<div class="grid h-[100dvh] w-screen grid-flow-row grid-rows-[auto_1fr_auto] transition-all">
	<!-- Back button -->
	<div class="bg-konsu-dark-01 grid min-h-12 items-center px-3">
		<button type="button" onclick={() => history.back()}>
			<!-- TODO: Back button doesn't have an animation, because apparently,
             my hacky code doesn't listen for onpopstate or something... -->
			<ArrowLeft width="2rem" height="2rem" />
		</button>
	</div>

	<!-- Main content -->
	<!-- BUG: On mobile browsers, you lose your position when the keyboard UI opens.
      Too bad! -->
	<main class="grid w-screen auto-rows-max gap-0.5 overflow-y-auto px-6 py-4" bind:this={main}>
		{#if messages.length == 0}
			<h3 class="text-center text-3xl font-bold">Welcome back, traveler.</h3>
			<h3 class="text-konsu-light-00 text-xl">Some popular packages to get you started:</h3>
			<div class="grid w-full auto-cols-max grid-flow-col gap-4 overflow-x-auto">
				<SuggestedPlace
					title="Amalfi Coast"
					imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg/1920px-Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg"
					meta="5 Nights · £200/pp"
				/>
				<SuggestedPlace
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
			<h3 class="text-konsu-light-00 text-xl">Otherwise, start typing.</h3>
		{/if}
		{#each messages as { text: markdown, user }, i (i)}
			<Message {user} {markdown} />
		{/each}
	</main>

	<!-- AI Text box -->
	<div
		class="bg-konsu-light-01 border-konsu-light-02 focus-within:border-konsu-ui-primary
        grid w-screen
        max-w-full grid-flow-col grid-cols-[1fr_max-content] grid-rows-[1fr_max-content]
        gap-2 border-t-2 p-4 px-3"
	>
		<textarea
			class="placeholder:text-konsu-light-00 col-start-1 box-border field-sizing-content h-max max-h-75 w-full max-w-full resize-none px-1 leading-[1.1] outline-0 outline-none placeholder:italic"
			placeholder="Where can I take you?"
			disabled={conversation == null}
			bind:value={currentMessage}
		></textarea>
		<button
			class="bg-konsu-ui-primary shadow-md-3 col-start-2 aspect-square h-max w-max cursor-pointer rounded-xl p-[10px]"
			type="button"
			aria-label="Send message."
			onmousedown={(e) => sendMessage(e)}
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
	</div>
</div>

<style>
	:global(konsu-insert) {
		display: contents;
	}
</style>
