<script>
	//@ts-nocheck
    import { account } from "$lib/appwrite";
    import { Button } from "$lib/components/ui/button";
    import { writable } from "svelte/store";

	let data = writable({
		email: "",
		password: ""
	})

	async function log(e){
		e.preventDefault()
		try { await account.createEmailPasswordSession($data.email, $data.password); location.href = "/" }
		catch(e) { return alert(e.message) }
	}
</script>

<svelte:head>
	<title>ForumTerj - Login</title>
</svelte:head>

<main class="bg-dark-2 flex absolute w-svw h-svh text-secondary-color-background-2">
	<form on:submit={log} class="w-2/6 min-w-[400px] bg-dark-3 my-auto mx-auto rounded-3xl p-4 flex flex-col gap-5">
		<p class="font-regular-10 font-semibold text-tomato">LOGIN</p>
		<label class="flex gap-1 w-full bg-dark-2 p-3 rounded-lg font-regular-10">
			<p>Email:</p>
			<input required type="email" placeholder="michael@cohen.com" bind:value={$data.email}
				class="w-full [border:none] [outline:none] text-secondary-color-background-2 text-base placeholder:text-sm placeholder:text-secondary-color-secondary-4 bg-transparent">
		</label>
	
		<label class="flex gap-1 w-full bg-dark-2 p-3 rounded-lg font-regular-10">
			<p>Senha:</p>
			<input required type="password" placeholder="michael123" bind:value={$data.password}
				class="w-full [border:none] [outline:none] text-secondary-color-background-2 text-base placeholder:text-sm placeholder:text-secondary-color-secondary-4 bg-transparent">
		</label>

		<Button type="submit" class="size-fit mx-auto font-regular-10">
			Log In
		</Button>
	</form>
</main>
