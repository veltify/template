export default {
    singular: 'Settings',
    plural: 'Settings',
    type: 'form',
    fields: {
        name: {
            type: 'input',
            label: 'Name'
        },
        custom: {
            label: 'Custom',
            type: 'textarea'
        }
    },
    form: {
        fields: ['name', 'custom']
    }
}