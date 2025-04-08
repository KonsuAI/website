<script lang="ts">
	import SuggestedPlace from '$lib/components/trips/SuggestedPlace.svelte';
	import Page from '$lib/components/Page.svelte';

	import Send from 'svelte-google-materialdesign-icons/Send.svelte';
</script>

<Page
	class="grid h-screen max-h-screen grid-rows-[max-content_1fr_max-content]"
	title="Welcome back, traveller"
>
	<div class="box-border flex flex-col items-center">
		<div>Popular right now.</div>
		<div class="box-border grid w-full max-w-200 grid-cols-1 gap-4 md:grid-cols-2">
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
		<div class="my-4 h-0 w-full"></div>
	</div>

	<div
		class="bg-konsu-light-01 border-konsu-light-02 ui-glow relative mb-5 h-fit w-full rounded-3xl border-2 p-4 focus-within:border-[#ffffff]"
	>
		<form
			onsubmit={function (e) {
				e.preventDefault();
				console.log(this);
			}}
			class="grid grid-cols-[1fr_max-content]"
		>
			<textarea
				placeholder="Where can I take you?"
				name="prompt"
				class="box-border field-sizing-content h-max max-h-75 w-full max-w-full resize-none outline-none"
			></textarea>

			<div class="flex h-full flex-col place-content-end">
				<button
					class="bg-konsu-ui-primary shadow-md-3 aspect-square h-max w-max cursor-pointer rounded-xl p-2"
					type="submit"
					aria-label="Send message."
				>
					<Send size="1.5em" color="rgb(76, 91, 113)" />
				</button>
			</div>
		</form>
	</div>
</Page>
