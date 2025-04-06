import { createFileDb } from "veltify/db/server";

export const db = await createFileDb({path: 'data.json'})
// const db = await createMongoDb({...})
