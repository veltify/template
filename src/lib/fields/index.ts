import { fields } from "veltify/cms";

export default {
    ...fields,
    custom: {
        form: await import('./FormCustom.svelte'),
        table: await import('./TableCustom.svelte'),
    }
}