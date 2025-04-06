export const hooks = {
    async afterLoad({ value }) {
        delete value.password
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
            label: 'Username'
        },
        password: {
            type: 'password',
            label: 'Password'
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