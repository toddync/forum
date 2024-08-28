<script lang="ts">
    //@ts-nocheck
    import { Button } from "./components/ui/button";
</script>

<div class="flex text-secondary-color-background-2 ml-auto mr-5 gap-2 min-w-fit">
    <Button size="icon" variant="ghost" class="bg-dark-4 min-w-fit min-h-fit">
        <img class="size-5" src="/public/message.svg" alt="">
    </Button>

    <Button size="icon" variant="ghost" class="bg-dark-4 min-w-fit min-h-fit">
        <img class="size-5" src="/public/notification.svg" alt="">
    </Button>

    <Button class="flex bg-transparent text-secondary-color-background-2 p-0 hover:bg-white/10">
        <img class="size-10 object-cover my-auto" src="/public/profile-image@2x.png" alt="">
        <div class="gap-1.5 p-1 hidden md:flex">
            <p class="font-bold size-fit my-auto">AR. Jakir</p>
            <img class="size-5 my-auto" src="/public/vector-8.svg" alt="">
        </div>
    </Button>
</div>