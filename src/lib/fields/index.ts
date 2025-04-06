import { fields } from "veltify/cms";

export default {
    ...fields,
    custom: {
        form: await import('./FormCustom.svelte').then(res => res.default),
        table: await import('./TableCustom.svelte').then(res => res.default),
    }
}