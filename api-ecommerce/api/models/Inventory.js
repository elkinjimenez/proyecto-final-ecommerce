/**
 * Inventory.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    purchasePrice: { type: 'number', required: true },
    salePrice: { type: 'number', required: true },
    registerUser: { type: 'number', required: true },
    modifyUser: { type: 'string', required: true },
    stock: { type: 'number', required: true },
    product: { model: 'Product', unique: true },
    saleProduct: { collection: 'SaleProduct', via: 'inventory' }

  },

};

