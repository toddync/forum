<script>
	import NewPost from "./newPost.svelte";
	import PostPreview from "./postPreview.svelte";
</script>

<div
	class="flex-1 flex flex-col items-start justify-start gap-2 text-[1.125rem] md:min-w-[32rem]"
>
	<NewPost />
	<PostPreview />
	<PostPreview />
	<PostPreview />
	<PostPreview />
</div>
