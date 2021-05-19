/**
 * Client.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    gender: { type: 'string', required: true },
    person: { model: 'Person', unique: true },

  },

};

