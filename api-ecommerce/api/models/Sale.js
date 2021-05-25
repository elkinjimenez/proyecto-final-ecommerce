/**
 * Sale.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    client: { model: 'Client', unique: true },
    saleDate: { type: 'number', required: true },
    state: { type: 'boolean', required: true },
    saleProduct: {collection: 'SaleProduct', via: 'sale'}

  },

};

