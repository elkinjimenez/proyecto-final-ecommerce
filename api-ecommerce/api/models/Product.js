/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string', required: true },
    state: { type: 'boolean', required: true },
    registerUser: { type: 'string', },
    modifyUser: { type: 'string', },
    image: { type: 'string', },
    description: { type: 'string', required: true },
    brand: { type: 'string', required: true },
    category: { model: 'Category', unique: true },
    stock: { type: 'number', required: true },
    price: { type: 'number', required: true },

  },

};

