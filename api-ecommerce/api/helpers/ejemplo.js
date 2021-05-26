module.exports = {


    friendlyName: 'Ejemplo',


    description: 'Ejemplo something.',


    inputs: {
        parametro1: {
            type: 'ref',
            friendlyName: 'MiParametro',
            description: 'Este parametro es necesario para poder hacer ....',
            required: true
        },
        parametro2: {
            type: 'ref',
            friendlyName: 'MiParametro2',
            description: 'Este parametro es necesario para poder hacer ....',
            required: true
        },
    },


    exits: {

        success: {
            description: 'All done.',
        },

    },


    fn: async function(inputs) {
        // TODO
        var datos = inputs.parametro1

    }


};