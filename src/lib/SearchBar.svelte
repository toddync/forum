<script>
    //@ts-nocheck

    import { Button } from "./components/ui/button";

</script>

<div class="flex-1">
    <div class="rounded-lg bg-dark-4 py-2 px-5 flex-1 hidden md:flex">
        <div class="flex gap-5 w-full">
            <input 
                class="w-full [border:none] [outline:none] font-regular-10 text-secondary-color-background-2 text-base
                placeholder:text-sm placeholder:text-secondary-color-secondary-4 bg-transparent"
                placeholder="Type here to search..."
                type="text" 
            >
            <img class="size-5 my-auto" src="/public/search-icon.svg" alt=""/>
        </div>
    </div>

    <Button class="bg-dark-4 md:hidden mr-auto" size="icon" variant="ghost">
        <img class="size-5 my-auto" src="/public/search-icon.svg" alt=""/>
    </Button>
</div>