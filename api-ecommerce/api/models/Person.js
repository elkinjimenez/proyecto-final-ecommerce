/**
 * Person.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string', required: true },
    lastname: { type: 'string', required: true },
    user: { type: 'string', required: true },
    password: { type: 'string', required: true },
    email: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    address: { type: 'string', required: true },
    city: { type: 'string', required: true },

  },

};

