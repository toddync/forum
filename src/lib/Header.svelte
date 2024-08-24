<script>
	import Account from "./Account.svelte";
	import NavContainer from "./navContainer.svelte";
	import SearchBar from "./SearchBar.svelte";
</script>

<header class="w-svw bg-dark-3 flex gap-5 py-5 text-7xl text-tomato font-regular-10">
		<div class="flex gap-1 pl-5 size-fit my-auto">
			<div class="rounded-md bg-secondary-color-background-2 p-1 hidden -flex">
				<img
					class="size-5"
					src="/public/icon.svg"
					alt=""
				/>
			</div>
			<p class="font-bold">ForumTERJ</p>
		</div>
		
		<div class="w-full flex text-sm text-secondary-color-secondary-4">
			<div class="hidden lg:block">
				<NavContainer />
			</div>
			<div class="flex justify-end gap-3 w-full">
				<SearchBar />
				<Account />
			</div>
		</div>
</header>
