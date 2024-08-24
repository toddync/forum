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
									<div class="h-8 flex-1 relative text-xs">
										<img
											class="absolute size-full rounded-sm overflow-hidden"
											src="/public/star-1.svg"
											alt=""
										/>
										<b class="absolute top-1/2 left-1/4 -translate-y-1/3 -translate-x-[0.03rem]">New</b>
									</div>
								</div>
							</div>
						</div>
						<div class="gap-1 my-auto">
							<div class="font-semibold text-base pt-1.5 md:hidden">
								Newest
							</div>
							<div class="font-semibold text-base hidden md:block">
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
				<div
					class="rounded-md bg-dark-4 flex flex-col items-start justify-start py-[0.375rem] pl-[0.312rem] pr-[1.562rem]"
				>
					<div
						class="flex flex-row items-center justify-start gap-[0.375rem]"
					>
						<div
							class="rounded-md bg-dark-4 flex flex-row items-start justify-start p-[0.25rem]"
						>
							<img
								class="h-[1.25rem] w-[1.25rem] relative"
								loading="lazy"
								alt=""
								src="/public/frame-15.svg"
							/>
						</div>
						<div
							class="flex flex-col items-start justify-start gap-[0.125rem]"
						>
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[5.938rem]"
							>
								Popular of the day
							</div>
							<div
								class="relative text-[0.563rem] leading-[0.875rem] text-secondary-color-secondary-3 inline-block min-w-[7.625rem]"
							>
								Shots featured today by curators
							</div>
						</div>
					</div>
				</div>
				<div
					class="rounded-md bg-dark-3 flex flex-col items-start justify-start py-[0.375rem] pl-[0.312rem] pr-[1.312rem]"
				>
					<div
						class="flex flex-row items-center justify-start gap-[0.375rem]"
					>
						<div
							class="rounded-md bg-dark-4 flex flex-row items-start justify-start p-[0.25rem]"
						>
							<img
								class="h-[1.25rem] w-[1.25rem] relative"
								loading="lazy"
								alt=""
								src="/public/follow.svg"
							/>
						</div>
						<div
							class="flex flex-col items-start justify-start gap-[0.125rem]"
						>
							<div
								class="flex flex-row items-start justify-start gap-[0.25rem]"
							>
								<div
									class="relative leading-[1.125rem] font-semibold inline-block min-w-[3.188rem]"
								>
									Following
								</div>
								<div
									class="rounded-sm bg-red-red-80 flex flex-col items-start justify-start py-[0.187rem] px-[0.375rem] text-[0.563rem]"
								>
									<div
										class="relative leading-[0.875rem] font-semibold inline-block min-w-[0.625rem]"
									>
										24
									</div>
								</div>
							</div>
							<div
								class="relative text-[0.563rem] leading-[0.875rem] text-secondary-color-secondary-3 inline-block min-w-[7.875rem]"
							>
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
				<div class="min-h-px"/>
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
				<div class="min-h-px"/>
			</div>
		</div>
	</div>
</div>
