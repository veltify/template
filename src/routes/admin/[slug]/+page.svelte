<script lang="ts">
    import { CollectionManager } from 'veltify/cms';
    import fields from '$lib/fields'
	import { page } from '$app/state';

    let {data, form}: any = $props()
</script>

{#key page.params.slug}
    <CollectionManager {fields} {data} {form} />
{/key}