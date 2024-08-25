<script>
    import Badge from "./Badge.svelte";
</script>

<div class="rounded-2xl bg-dark-3 p-3 mx-auto w-full md:min-w-[32rem] max-w-[98svw] flex flex-col md:flex-row gap-4 relative">
	<div class="h-28 md:h-40 overflow-hidden relative flex">
		<img
			class="w-full md:w-40 my-auto relative md:rounded-2xl"
			src="/public/rectangle-24@2x.png"
			alt=""
		/>
		<div class="md:hidden absolute bottom-0 bg-gradient-to-t from-dark-3 h-10 w-full"/>
	</div>
	<div class="flex gap-4 w-full">
		<div class="flex flex-col gap-4 w-full">
			<div class="flex flex-col gap-2">
				<p class="font-semibold break-words mr-9">
					Blockchain developer best practices on innovation
				</p>
				<div class="flex gap-2 text-xs text-secondary-color-secondary-5">
					<Badge>finance</Badge>
					<Badge>bitcon</Badge>
					<Badge>crypto</Badge>
				</div>
			</div>
			<div class="flex text-sm text-secondary-color-secondary-6 mt-auto mb-3 flex-col md:flex-row gap-5">
				<div class="flex">
					<div class="h-10 w-10 relative rounded-full bg-purple-purple-10">
						<img
							class="absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 size-7 object-cover"
							src="/public/memoji-boys-315@2x.png"
							alt=""
						/>
					</div>
					<div class="flex flex-col h-fit my-auto pl-2">
						<p class="font-semibold">Pavel Gvay</p>
						<p class="text-xs text-secondary-color-secondary-5">3 weeks ago</p>
					</div>
				</div>
				<div class="md:absolute right-3 text-secondary-color-secondary-5 flex gap-3 *:text-nowrap">
					<div>651,324 Views</div>
					<div>36,6545 Likes</div>
					<div>56 comments</div>
				</div>
			</div>
		</div>
		<div class="size-8 absolute right-1 rounded-full bg-dark-4 flex">
			<img
				class="size-5 object-cover mx-auto my-auto"
				src="/public/iconlike@2x.png"
				alt=""
			/>
		</div>
	</div>
</div>
