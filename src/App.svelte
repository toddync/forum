<script lang="ts">
	import "./app.css";
	import Header from "./lib/Header.svelte";
	import LeftBar from "./lib/leftBar.svelte";
	import MainArea from "./lib/mainArea.svelte";
	import NavContainer from "./lib/navContainer.svelte";
	import RightBar from "./lib/rightBar.svelte";

	document.documentElement.classList.add("dark")
</script>

<svelte:head>
	<title>ForumTERJ</title>
</svelte:head>

<div class="bg-dark-2 overflow-scroll flex flex-col gap-5 absolute w-svw h-svh">
	<Header />

	<main class="text-secondary-color-background-2 font-regular-10 px-2 gap-2 flex flex-wrap flex-col md:flex-row">
		<LeftBar />
		<MainArea />
		<!--
			<RightBar />
		-->
		<div class="h-fit lg:hidden w-full pt-5">
			<NavContainer />
		</div>
	</main>

	<footer class="fixed bottom-0 bg-dark-3 h-fit w-full p-2.5 lg:hidden">
		<div class="w-fit mx-auto">
			<NavContainer />
		</div>
	</footer>
</div>
