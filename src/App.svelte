<script lang="ts">
	import "./app.css";
	import Header from "./lib/Header.svelte";
	import LeftBar from "./lib/leftBar.svelte";
	import MainArea from "./lib/mainArea.svelte";
	import NavContainer from "./lib/navContainer.svelte";
	import RightBar from "./lib/rightBar.svelte";
</script>

<div
	class="bg-dark-2 overflow-scroll flex flex-col justify-start box-border gap-[1.25rem] absolute w-svw h-svh"
>
	<Header />

	<main
		class="gap-2 text-secondary-color-background-2 font-regular-10 flex flex-col lg:flex-row"
	>
		<LeftBar />
		<MainArea />
		<RightBar />
	</main>
	<footer class="fixed bottom-0 bg-dark-3 h-fit w-full p-2.5 md:hidden">
		<div class="w-fit mx-auto">
			<NavContainer />
		</div>
	</footer>
</div>
