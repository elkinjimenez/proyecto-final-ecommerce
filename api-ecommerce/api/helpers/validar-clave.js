module.exports = {


    friendlyName: 'Validar clave',


    description: '',


    inputs: {
        password: {
            type: 'string',
            friendlyName: 'password',
            description: 'Clave enviada por el usuario.',
            required: true
        },
        hash: {
            type: 'string',
            friendlyName: 'hash',
            description: 'Clave cifrada del usuario.',
            required: true
        }
    },


    exits: {
        success: {
            description: 'All done.',
        },
        invalido: {
            description: 'Usuario o contraseña invalido.',
        },
    },


    fn: async function(inputs, exits) {
        if (inputs.password) {
            await sails.helpers.passwords.checkPassword(inputs.password, inputs.hash)
                .intercept('incorrect', "invalido");
        }

        return exits.success();

    }


};