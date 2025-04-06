import bcrypt from 'bcrypt'

export const hooks = {
    async beforeInsert({value}) {
        value.password = bcrypt.hashSync(value.password, 10)
    },
    async beforeUpdate({value}) {
        if(value.password) {
            value.password = bcrypt.hashSync(value.password, 10)
        }
    },
    async afterLoad({ value }) {
        return value.map(x => {
            delete x['password']
            return x
        })
    }
}

export default {
    singular: 'User',
    plural: 'Users',
    type: 'list',
    fields: {
        name: {
            type: 'input',
            label: 'Name'
        },
        username: {
            type: 'input',
            label: 'Username',
            required: true,
        },
        password: {
            type: 'password',
            label: 'Password',
            required: true
        },
        createdAt: {
            type: 'date',
            label: 'Created At'
        }
    },
    form: {
        fields: ['name', 'username', 'password']
    },
    table: {
        columns: ['name', 'username', 'createdAt']
    }
}