/**
 * Person.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string' },
    lastname: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' },
    address: { type: 'string' },
    city: { type: 'string' },
    user: { collection: 'User', via: 'person' },
    client: { collection: 'Client', via: 'person' }

  },

};

