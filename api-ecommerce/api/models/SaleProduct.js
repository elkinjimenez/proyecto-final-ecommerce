/**
 * SaleProduct.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    sale: { type: 'number', required: true },
    inventory: { type: 'number', required: true },
    amount: { type: 'number', required: true },

  },

};

