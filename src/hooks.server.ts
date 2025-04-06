import { db } from "$lib/server/db"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = ({resolve, event}) => {
    event.locals.db = db
    return resolve(event)
}