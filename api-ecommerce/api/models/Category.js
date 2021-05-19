/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string', required: true },
    state: { type: 'boolean', required: true },
    registerUser: { type: 'string', required: true },
    modifyUser: { type: 'string', required: true },
    product: {collection: 'Product', via: 'category'}

  },

};

