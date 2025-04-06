<script lang="ts">
    import { CollectionManager } from 'veltify/cms';
    import fields from '$lib/fields'

    let {data, form}: any = $props()
</script>
<CollectionManager {fields} {data} {form} />