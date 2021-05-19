/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    person: { type: 'number', required: true },
    state: { type: 'boolean', required: true },
    loginDate: { type: 'string', required: true },

  },

};

