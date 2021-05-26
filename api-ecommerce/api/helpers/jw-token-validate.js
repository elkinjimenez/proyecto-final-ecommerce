const jwt = require('jsonwebtoken'),
    tokenSecret = "1234567890";

module.exports = {


    friendlyName: 'Jw token validate',


    description: '',


    inputs: {
        req: {
            type: 'ref',
            friendlyName: 'Request',
            description: 'Request de la peticion.',
            required: true
        }
    },


    exits: {

        success: {
            description: 'All done.',
        },

    },


    fn: async function(inputs) {
        var req = inputs.req
        var token = req.header('Authorization').split('Bearer ')[1]
        sails.log.debug(token)
        return jwt.verify(
            token,
            tokenSecret
        );
    }


};