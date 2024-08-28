<script>
	//@ts-nocheck
    import { account } from "$lib/appwrite";
    import { user } from "$lib/stores/user";
    import { onMount } from "svelte";

    onMount(async () => {
        let res;
        try { res = await account.get() }
        catch(e) { res = false }
        $user = res
    })
</script>

{#if $user != "unconnected"}
    {#if $user}
        <slot  />
    {:else}
        <p class="hidden">
            {location.href = "/login/"}
        </p>
    {/if}
{/if}