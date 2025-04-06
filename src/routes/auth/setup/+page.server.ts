import { db } from "$lib/server";
import { hashSync } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { redirect } from "@sveltejs/kit";
import type { ActionsExport } from "./$types";

export const load = async () => { 
    const hasUser = await db('users').query().first();

    if(hasUser) {
        redirect(307, '/auth/login')
    }

    return {}
}

export const actions: ActionsExport = {
    async default({cookies, request}) {
        const data = await request.formData();
        const body = JSON.parse(data.get('value')?.toString() ?? '{}')

        const errors: any = {}
        
        const { name, username, password } = body

        const hasUser = await db('users').query().first()

        if(hasUser) {
            redirect(304, '/auth/login')
        }

        if(username == 'johndoe') {
            errors['username'] = 'This username is not available'
        }

        if(!name) {
            errors['name'] = 'Name is required'
        }

        if(!username) {
            errors['username'] = 'Username is required'
        }

        if(!password) {
            errors['password'] = 'Password is required'
        }

        if (Object.keys(errors).length > 0) {
			return { errors, body };
		} else {

            const hashedPassword = hashSync(password, 10)
            const user = await db('users').insert({
                name,
                username,
                password: hashedPassword
            })

            const token = jwt.sign({id: user.id, name: user.name, username: user.username}, process.env.JWT_SECRET ?? 'jwt_secret')
            
            cookies.set('TOKEN', token, {
                path: '/',
            })
            
            redirect(307, '/admin')

            return { success: true }
        }

    }
}