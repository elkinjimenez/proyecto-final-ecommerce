/**
 * SaleProduct.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    amount: { type: 'number', required: true },
    product: { model: 'Product', unique: true },
    sale: { model: 'Sale', unique: true },

  },

};

