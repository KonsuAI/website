<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import ArrowLeft from '~icons/mdi/arrow-left';

	const { class: className }: { class?: string } = $props();
</script>

<button
	type="button"
	onclick={() => history.back()}
	class={twMerge('w-max cursor-pointer', className)}
>
	<!-- TODO: Back button doesn't have an animation, because apparently,
          my hacky code doesn't listen for onpopstate or something... -->
	<ArrowLeft width="2rem" height="2rem" />
</button>
