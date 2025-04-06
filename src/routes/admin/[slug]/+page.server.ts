import { collectionLoad, collectionInsert, collectionRemove, collectionUpdate } from "veltify/cms";
import type { PageServerLoadEvent } from "./$types";

async function loadConfig(name: string) {
    const module = await import(`../${name}.ts`)
    module.default.name = name
    
    return {
        config: module.default,
        hooks: module.hooks
    }
}

export const load = async (event: PageServerLoadEvent) => {
    const {config, hooks} = await loadConfig(event.params.slug)
    return collectionLoad(config, hooks)(event)
}

export const actions = {
    insert: async (event) => {
        const {config, hooks} = await loadConfig(event.params.slug)
        return collectionInsert(config, hooks)(event)
    },
    update: async (event) => {
        const {config, hooks} = await loadConfig(event.params.slug)
        return collectionUpdate(config, hooks)(event)
    },
    remove: async (event) => {
        const {config, hooks} = await loadConfig(event.params.slug)
        return collectionRemove(config, hooks)(event)
    }
}