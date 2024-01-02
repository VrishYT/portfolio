<script>

	import { Plus } from "@steeze-ui/heroicons";
    import { Icon } from "@steeze-ui/svelte-icon";
    import { Button, Checkbox, Fileupload, Input, Label, Textarea, Toggle } from "flowbite-svelte";

    $: uploadFileShown = false;
    let image;

</script>

<form class="flex flex-col space-y-6" method="POST" action="?/add_new">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Add New Project</h3>
    <div class="grid grid-cols-2 gap-4">
        <Label class="space-y-2">
            <span>Title</span>
            <Input type="text" name="title" placeholder="My project..." required />
        </Label>
        <Label class="space-y-2">
            <span>Timestamp</span>
            <Input type="date" name="timestamp" />
        </Label>
    </div>
    <Label class="space-y-2">
        <span>Subtitle</span>
        <Input type="text" name="subtitle" placeholder="..." required />
    </Label>
    <Label class="space-y-2">
        <span>Description</span>
        <Textarea name="desc" placeholder="Description..." rows="2"/>
    </Label>
    <div class="grid grid-cols-2 gap-4">
        <Label class="space-y-2">
            <span>Links</span>
            <Textarea name="links" />
        </Label>
        <Label class="space-y-2">
            <span>Collaborators</span>
            <Textarea name="collaborators" />
        </Label>
        <Label class="space-y-2">
            <span>Stack</span>
            <Textarea name="stack" />
        </Label>
        <Label class="space-y-2">
            <span>Tags</span>
            <Textarea name="Tags" />
        </Label>
    </div>
    <div class="grid grid-cols-2 gap-4">
        <Toggle checked>Visible</Toggle>
        <Toggle checked on:change={() => uploadFileShown = !uploadFileShown}>Auto-Generate Image</Toggle>
    </div>
    {#if uploadFileShown}
        <div class="outline-1 outline-black w-full grid grid-cols-2 gap-4">
            <Label class="space-y-2">
                <span>Upload image:</span>
                <Fileupload bind:image />
            </Label>
            <Label class="space-y-2">
                <span>Image from URL:</span>
                <Input type="text" name="img_url"/>
            </Label>
        </div>
    {/if}
    <Button type="submit" class="w-full1">
        <Icon src={Plus} size="17px" class="mr-1"/>
        Add
    </Button>
</form>