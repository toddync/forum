<script>
	import { MessageCirclePlus } from "lucide-svelte";
</script>

<div class="rounded-2xl bg-dark-3 p-3 mx-auto max-w-[98svw] w-full">
	<div class="gap-2 max-w-full grid grid-cols-[2.25rem_1fr_2.5rem]">
		<img
			class="size-9 my-auto object-contain"
			alt=""
			src="/public/abatars@2x.png"
		/>

		<input
			class="w-full [border:none] [outline:none] bg-dark-4 h-11 rounded-md p-4 font-regular-10
            placeholder:text-sm placeholder:text-secondary-color-secondary-4"
			placeholder="Let's share whats on your mind..."
			type="text"
		/>

		<button
			class="cursor-pointer [border:none] my-auto bg-red-red-80 rounded-md hover:bg-tomato text-secondary-color-background"
		>
			<MessageCirclePlus class="size-6 mx-2 mb-2.5 mt-1.5" />
		</button>
	</div>
</div>
