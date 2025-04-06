import jwt from "jsonwebtoken";
import type { LayoutServerLoad } from "./$types";
import { db } from "$lib/server/db";

export const prerender = false;

export const load: LayoutServerLoad = async ({cookies}) => {

    const token = cookies.get('TOKEN') ?? ''
    const settings = await db('settings').query().first() ?? {}

    if(!token) {
        return {
            user: null
        }
    }
    
    const user = jwt.verify(token, process.env.JWT_SECRET ?? 'jwt_secret')

    return {
        user,
        settings
    }
}