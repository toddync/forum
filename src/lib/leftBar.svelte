<script>
</script>

<div
	class="w-full md:w-52 flex flex-col gap-3 pr-1 pl-1 md:pr-0 overflow-hidden"
>
	<div class="rounded-2xl bg-dark-3 p-3 text-xs w-full">
		<div
			class="flex flex-row md:flex-col gap-3 md:grid grid-cols-3 md:grid-cols-1"
		>
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
										<b
											class="absolute top-1/2 left-1/4 -translate-y-1/3 -translate-x-[0.03rem]"
										>
											New
										</b>
									</div>
								</div>
							</div>
						</div>
						<div class="gap-1 my-auto">
							<div
								class="font-semibold text-base pt-1.5 md:hidden"
							>
								Newest
							</div>
							<div
								class="font-semibold text-base hidden md:block"
							>
								Newest and Recent
							</div>
							<div
								class="hidden md:block relative text-[0.563rem] leading-[0.875rem] text-secondary-color-secondary-3 min-w-[5.125rem]"
							>
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
	<div class="hidden md:fle flex-col gap-3">
		<div
			class="self-stretch rounded-2xl bg-dark-3 flex flex-row items-start justify-start py-[1.25rem] pl-[1.25rem] pr-[0.937rem]"
		>
			<div
				class="flex-1 flex flex-col items-start justify-start gap-[1.25rem]"
			>
				<div class="flex flex-row items-end justify-start">
					<h2
						class="m-0 relative text-inherit leading-[1.5rem] font-semibold font-[inherit] inline-block min-w-[5.563rem]"
					>
						Popular Tags
					</h2>
				</div>
				<div
					class="self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-[0.75rem]"
				>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<div
							class="rounded bg-dimgray-200 flex flex-row items-start justify-start p-[0.375rem]"
						>
							<img
								class="h-[1.25rem] w-[1.25rem] relative"
								loading="lazy"
								alt=""
								src="/public/dev.svg"
							/>
						</div>
						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[3.563rem]"
							>
								#javascript
							</div>
							<div
								class="relative text-[0.625rem] leading-[1rem] text-secondary-color-secondary-3 inline-block min-w-[6.438rem]"
							>
								82,645 Posted by this tag
							</div>
						</div>
					</div>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<div
							class="rounded bg-darkslategray-400 flex flex-col items-start justify-start p-[0.375rem]"
						>
							<img
								class="w-[1.25rem] h-[1.25rem] relative"
								loading="lazy"
								alt=""
								src="/public/bitcoin.svg"
							/>
						</div>
						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[2.625rem]"
							>
								#bitcoin
							</div>
							<div
								class="relative text-[0.625rem] leading-[1rem] text-secondary-color-secondary-3 inline-block min-w-[6.438rem]"
							>
								65,523 Posted • Trending
							</div>
						</div>
					</div>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<div
							class="rounded bg-darkslategray-100 flex flex-row items-start justify-start p-[0.375rem]"
						>
							<img
								class="h-[1.25rem] w-[1.25rem] relative"
								loading="lazy"
								alt=""
								src="/public/design.svg"
							/>
						</div>
						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[2.563rem]"
							>
								#design
							</div>
							<div
								class="relative text-[0.625rem] leading-[1rem] text-secondary-color-secondary-3"
							>
								51,354 • Trending in Bangladesh
							</div>
						</div>
					</div>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<div
							class="rounded bg-dimgray-300 flex flex-row items-start justify-start p-[0.375rem]"
						>
							<img
								class="h-[1.25rem] w-[1.25rem] relative"
								loading="lazy"
								alt=""
								src="/public/blogging.svg"
							/>
						</div>
						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[3.875rem]"
							>
								#innovation
							</div>
							<div
								class="relative text-[0.625rem] leading-[1rem] text-secondary-color-secondary-3 inline-block min-w-[6.438rem]"
							>
								48,029 Posted by this tag
							</div>
						</div>
					</div>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<div
							class="rounded bg-darkslategray-300 flex flex-row items-start justify-start p-[0.375rem]"
						>
							<img
								class="h-[1.25rem] w-[1.25rem] relative"
								loading="lazy"
								alt=""
								src="/public/tutorial.svg"
							/>
						</div>
						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[2.813rem]"
							>
								#tutorial
							</div>
							<div
								class="relative text-[0.625rem] leading-[1rem] text-secondary-color-secondary-3"
							>
								51,354 • Trending in Bangladesh
							</div>
						</div>
					</div>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<div
							class="rounded bg-darkslategray-200 flex flex-row items-start justify-start p-[0.375rem]"
						>
							<img
								class="h-[1.25rem] w-[1.25rem] relative"
								alt=""
								src="/public/seo.svg"
							/>
						</div>
						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[3.625rem]"
							>
								#busieness
							</div>
							<div
								class="relative text-[0.625rem] leading-[1rem] text-secondary-color-secondary-3 inline-block min-w-[6.438rem]"
							>
								82,645 Posted by this tag
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="self-stretch rounded-2xl bg-dark-3 flex flex-row items-start justify-start py-[1.25rem] pl-[1.25rem] pr-[1.75rem]"
		>
			<div
				class="flex-1 flex flex-col items-start justify-start gap-[1.25rem]"
			>
				<div class="flex flex-row items-end justify-start">
					<div
						class="flex flex-row items-end justify-start gap-[0.187rem]"
					>
						<h2
							class="m-0 relative text-inherit leading-[1.5rem] font-semibold font-[inherit] inline-block min-w-[5.938rem]"
						>
							Pinned Group
						</h2>
						<img
							class="h-[1.25rem] w-[1.25rem] relative"
							alt=""
							src="/public/vector-17.svg"
						/>
					</div>
				</div>
				<div
					class="self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-[0.75rem]"
				>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<img
							class="h-[2rem] w-[2rem] rounded object-cover min-h-[2rem]"
							loading="lazy"
							alt=""
							src="/public/icon-1@2x.png"
						/>

						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[3.563rem]"
							>
								#javascript
							</div>
							<div
								class="relative text-[0.563rem] leading-[0.875rem] text-secondary-color-secondary-3 inline-block min-w-[5.813rem]"
							>
								82,645 Posted by this tag
							</div>
						</div>
					</div>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<img
							class="h-[2rem] w-[2rem] rounded object-cover min-h-[2rem]"
							loading="lazy"
							alt=""
							src="/public/icon-2@2x.png"
						/>

						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[2.625rem]"
							>
								#bitcoin
							</div>
							<div
								class="relative text-[0.563rem] leading-[0.875rem] text-secondary-color-secondary-3 inline-block min-w-[5.75rem]"
							>
								65,523 Posted • Trending
							</div>
						</div>
					</div>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<div
							class="w-[2rem] rounded flex flex-row items-start justify-start py-[0.25rem] px-[0.312rem] box-border bg-[url('/public/icon1@3x.png')] bg-cover bg-no-repeat bg-[top]"
						>
							<img
								class="h-[1.25rem] w-[1.25rem] relative"
								loading="lazy"
								alt=""
							/>
						</div>
						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[2.563rem]"
							>
								#design
							</div>
							<div
								class="relative text-[0.563rem] leading-[0.875rem] text-secondary-color-secondary-3 inline-block min-w-[7.5rem]"
							>
								51,354 • Trending in Bangladesh
							</div>
						</div>
					</div>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<img
							class="h-[2rem] w-[2rem] rounded object-cover min-h-[2rem]"
							loading="lazy"
							alt=""
							src="/public/icon-3@2x.png"
						/>

						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[3.25rem]"
							>
								#blogging
							</div>
							<div
								class="relative text-[0.563rem] leading-[0.875rem] text-secondary-color-secondary-3 inline-block min-w-[5.813rem]"
							>
								48,029 Posted by this tag
							</div>
						</div>
					</div>
					<div
						class="flex flex-row items-start justify-start gap-[0.625rem]"
					>
						<img
							class="h-[2rem] w-[2rem] rounded object-cover min-h-[2rem]"
							loading="lazy"
							alt=""
							src="/public/icon-4@2x.png"
						/>

						<div class="flex flex-col items-start justify-start">
							<div
								class="relative leading-[1.125rem] font-semibold inline-block min-w-[2.813rem]"
							>
								#tutorial
							</div>
							<div
								class="relative text-[0.563rem] leading-[0.875rem] text-secondary-color-secondary-3 inline-block min-w-[7.5rem]"
							>
								51,354 • Trending in Bangladesh
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
