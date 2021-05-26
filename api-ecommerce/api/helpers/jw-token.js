const jwt = require('jsonwebtoken'),
    tokenSecret = "1234567890";

module.exports = {


    friendlyName: 'Jw token',


    description: '',


    inputs: {
        id: {
            type: 'ref',
            friendlyName: 'id',
            description: 'Id de usuario y token.',
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
        var id = inputs.id
        return jwt.sign({ id: id },
            tokenSecret, // Token Secret that we sign it with
            {
                expiresIn: "30 days" // Token Expire time
            });

    }


};