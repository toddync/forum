<script>
    import Tag from "./Tag.svelte";
</script>

<div class="w-full md:min-w-52 lg:max-w-52 grid md:grid-cols-3 lg:flex lg:flex-col gap-3 overflow-hidden">
	<div class="rounded-2xl bg-dark-3 p-3 text-xs w-full md:max-h-48 overflow-y-scroll">
		<div class="flex flex-row md:flex-col gap-3 md:grid grid-cols-3 md:grid-cols-1">
			{#each [1, 1, 1] as item}
				<div class="rounded-md bg-dark-3 my-auto mx-auto md:mx-0 h-max">
					<div class="flex gap-1.5">
						<div class="w-8 flex flex-col">
							<div class="rounded-md bg-dark-4 flex size-9">
								<div class="flex-1 flex h-fit my-auto">
									<div class="h-8 flex-1 text-xs flex relative">
										<img
											class="size-full absolute"
											src="/public/star-1.svg"
											alt=""
										/>
										<b class="my-auto mx-auto size-fit text-[80%] z-10">New</b>
									</div>
								</div>
							</div>
						</div>
						<div class="gap-1 my-auto">
							<div class="font-semibold text-base pt-1.5 md:hidden">
								Newest
							</div>
							<div class="font-semibold text-xs hidden md:block">
								Newest and Recent
							</div>
							<div class="hidden md:block text-4xs text-secondary-color-secondary-3">
								Find the latest update
							</div>
						</div>
					</div>
				</div>
			{/each}

			<div class="hidden">
				<div class="rounded-md bg-dark-4 flex flex-col items-start justify-start py-[0.375rem] pl-[0.312rem] pr-[1.562rem]">
					<div class="flex flex-row items-center justify-start gap-[0.375rem]">
						<div class="rounded-md bg-dark-4 flex flex-row items-start justify-start p-[0.25rem]">
							<img
								class="h-[1.25rem] w-[1.25rem] relative"
								src="/public/frame-15.svg"
								alt=""
							/>
						</div>
						<div class="flex flex-col items-start justify-start gap-[0.125rem]">
							<p class="font-semibold">Popular of the day</p>
							<p class="text-[0.563rem] text-secondary-color-secondary-3">Shots featured today by curators</p>
						</div>
					</div>
				</div>
				<div class="rounded-md bg-dark-3 flex flex-col items-start justify-start py-[0.375rem] pl-[0.312rem] pr-[1.312rem]">
					<div class="flex flex-row items-center justify-start gap-[0.375rem]">
						<div class="rounded-md bg-dark-4 flex flex-row items-start justify-start p-[0.25rem]">
							<img
								class="h-[1.25rem] w-[1.25rem] relative"
								src="/public/follow.svg"
								alt=""
							/>
						</div>
						<div class="flex flex-col items-start justify-start gap-[0.125rem]">
							<div  class="flex flex-row items-start justify-start gap-[0.25rem]">
								<p class="font-semibold">Following</p>
								<div class="rounded-sm bg-red-red-80 flex flex-col items-start justify-start py-[0.187rem] px-[0.375rem] text-[0.563rem]">
									<p class="font-semibold">24</p>
								</div>
							</div>
							<div class="relative text-[0.563rem] leading-[0.875rem] text-secondary-color-secondary-3 inline-block min-w-[7.875rem]">
								Explore from your favorite person
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hidden md:grid grid-cols-2 lg:flex lg:flex-col gap-3 h-fit md:*:max-h-44 md:*:overflow-y-scroll lg:*:max-h-none md:*:pb-5 col-span-2 w-full">
		<div class="rounded-2xl bg-dark-3 flex py-5 pl-5 pr-4">
			<div class="flex flex-col gap-3">
				<div class="flex gap-1">
					<p class="font-semibold size-fit my-auto">Popular Tags</p>
				</div>

				<Tag />
				<Tag />
				<Tag />
				<Tag />
				<div class="min-h-px lg:hidden"/>
			</div>
		</div>

		<div class="rounded-2xl bg-dark-3 flex py-5 pl-5 pr-7">
			<div class="flex flex-col gap-3">
				<div class="flex gap-1">
					<p class="font-semibold size-fit my-auto">Pinned Group</p>
					<img
						class="size-5 my-auto"
						src="/public/vector-17.svg"
						alt=""
					/>
				</div>

				<Tag />
				<Tag />
				<Tag />
				<Tag />
				<Tag />
				<Tag />
				<div class="min-h-px lg:hidden"/>
			</div>
		</div>
	</div>
</div>
