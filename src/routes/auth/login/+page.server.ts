import { db } from '$lib/server/db';
import jwt from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const hasUser = await db('users').query().first();

	if (!hasUser) {
		redirect(307, '/auth/setup');
	}

	return {};
};

export const actions: Actions = {
	async default({ cookies, request }) {
		const data = await request.formData();
		const body = JSON.parse(data.get('value')?.toString() ?? '{}');

		const errors: any = {};

		const { username, password } = body;

		console.log({username, password})

		const user = await db('users')
			.query()
			.filter('username', '=', username)
			// .filter('status', '=', 'active')
			.first();

		if (!user) {
			errors['username'] = "User with this username doesn't exist";
		} else {
			if (compareSync(password, user.password)) {
				const token = jwt.sign(
					{ id: user.id, name: user.name, username: user.username },
					process.env.JWT_SECRET ?? 'jwt_secret'
				);

				cookies.set('TOKEN', token, {
					path: '/'
				});
			} else {
				errors['password'] = "username or password is invalid";
			}
		}

		if (Object.keys(errors).length > 0) {
			return { errors, body };
		} else {
			redirect(307, '/admin');
		}
	}
};
