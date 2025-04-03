<script lang="ts">
	import SuggestedPlace from '$lib/components/trips/SuggestedPlace.svelte';

	import Send from 'svelte-google-materialdesign-icons/Send.svelte';
</script>

<div class="absolute">
	<div class="m-4 box-border flex flex-col items-center md:m-10">
		<strong class="text-3xl">Welcome back, traveler!</strong>
		<div>Popular right now.</div>
		<div class="box-border grid w-full max-w-200 grid-cols-1 gap-4 md:grid-cols-2">
			<SuggestedPlace
				title="Amalfi Coast"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg/1920px-Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg"
				meta={'5 Nights · £200/pp'}
			/>
			<SuggestedPlace
				title="Stockholm"
				imageUrl="https://visitsweden.com/_next/image/?url=https%3A%2F%2Fs3-eu-north-1.amazonaws.com%3A443%2Fpy3.visitsweden.com%2Foriginal_images%2F2018-07-05_041957-146932_IBSweb.jpg&w=1980&q=75"
				meta={'2 Nights · £77/pp'}
			/>
		</div>
		<div class="my-4 h-0 w-full"></div>
	</div>

	<div class="bottom-0 md:mx-10">
		<div
			class="bg-konsu-light-01 border-konsu-light-02 ui-glow relative flex h-fit min-h-30 w-full max-w-200 flex-col rounded-3xl border-2 p-4 focus-within:border-[#ffffff]"
		>
			<div class="relative h-full w-full flex-grow md:p-2">
				<form
					onsubmit={function (e) {
						e.preventDefault();
						console.log(this);
					}}
				>
					<textarea
						placeholder="Where can I take you?"
						name="prompt"
						class="absolute top-0 box-border flex h-full w-full resize-none outline-none"
					></textarea>
					<button
						class="bg-konsu-ui-primary shadow-md-3 absolute right-0 bottom-0 aspect-square cursor-pointer rounded-xl p-2"
						type="submit"
						aria-label="Send message."
					>
						<Send size="2em" color="rgb(76, 91, 113)" />
					</button>
				</form>
			</div>
		</div>
	</div>
</div>
