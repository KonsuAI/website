<script lang="ts">
	import Send from '~icons/mdi/send';
	import type { EventHandler } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		onsubmit?: EventHandler<SubmitEvent, HTMLFormElement>;
		class?: string;
		placeholder: string;
	}

	const { onsubmit, placeholder, class: classList }: Props = $props();

	// TODO: Hover animation here for the send button.
	// TODO: Press enter to send a new chat on desktop, shift-enter for a new line.
</script>

<div
	class={twMerge(
		'bg-konsu-light-01 border-konsu-light-02 ui-glow my-5 h-fit w-full rounded-3xl border-2 p-4 focus-within:border-[#ffffff]',
		classList
	)}
>
	<form {onsubmit} class="grid grid-cols-[1fr_max-content]">
		<textarea
			{placeholder}
			name="prompt"
			class="box-border field-sizing-content h-max max-h-75 w-full max-w-full resize-none outline-none"
		></textarea>

		<div class="flex h-full flex-col place-content-end">
			<button
				class="bg-konsu-ui-primary shadow-md-3 aspect-square h-max w-max cursor-pointer rounded-xl p-2"
				type="submit"
				aria-label="Send message."
			>
				<Send width="1.3rem" height="1.3rem" color="rgb(76, 91, 113)" />
			</button>
		</div>
	</form>
</div>
