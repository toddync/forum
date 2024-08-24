<script>
	import NavContainer from "./navContainer.svelte";
</script>

<header
	class="w-svw bg-dark-3 flex flex-col items-start justify-start py-[1.25rem] box-border text-left text-[1.625rem] text-red-red-90 font-regular-10"
>
	<div class="flex flex-row items-center box-border gap-5 w-full">
		<div class="flex flex-row items-center gap-1 pl-5">
			<div
				class="rounded-md bg-secondary-color-background-2 flex flex-col items-start justify-start p-[0.25rem] hidden"
			>
				<img
					class="w-[1.375rem] h-[1.375rem] relative"
					loading="lazy"
					alt=""
					src="/public/icon.svg"
				/>
			</div>
			<a class="[text-decoration:none] relative font-bold text-[inherit]">
				ForumTERJ
			</a>
		</div>
		<div
			class="w-full flex flex-row text-sm text-secondary-color-secondary-4"
		>
			<div class="hidden md:block">
				<NavContainer />
			</div>
			<div class="flex items-center justify-end gap-3 w-full">
				<div
					class="flex-1 rounded-lg bg-dark-4 flex flex-col items-start justify-start py-[0.562rem] px-[1.25rem] box-border max-w-full"
				>
					<div
						class="self-stretch flex flex-row items-center justify-between gap-[1.25rem]"
					>
						<a
							class="[text-decoration:none] w-[8.75rem] relative leading-[1.375rem] text-[inherit] inline-block shrink-0 whitespace-nowrap"
							>Type here to search...</a
						>
						<img
							class="h-[1.25rem] w-[1.25rem] relative"
							alt=""
							src="/public/search-icon.svg"
						/>
					</div>
				</div>
				<div
					class="flex flex-row text-secondary-color-background-2 mr-10 gap-2"
				>
					<div
						class="rounded-6xs bg-dark-4 flex flex-row items-start justify-start p-[0.625rem]"
					>
						<img
							class="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
							alt=""
							src="/public/message.svg"
						/>
					</div>
					<div
						class="rounded-6xs bg-dark-4 flex flex-row items-start justify-start p-[0.625rem]"
					>
						<img
							class="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
							alt=""
							src="/public/notification.svg"
						/>
					</div>

					<div class="flex flex-row gap-[0.625rem]">
						<div
							class="flex flex-row items-center justify-start gap-1"
						>
							<img
								class="h-[2.5rem] w-[2.5rem] relative object-cover"
								loading="lazy"
								alt=""
								src="/public/profile-image@2x.png"
							/>

							<a
								class="[text-decoration:none] relative font-bold min-w-[4.438rem]whitespace-nowrap"
								>AR. Jakir</a
							>
						</div>
						<img
							class="h-[1.25rem] w-[1.25rem] relative my-auto"
							alt=""
							src="/public/vector-8.svg"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
