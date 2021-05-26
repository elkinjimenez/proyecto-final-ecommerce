/**
 * SaleProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function (req, res) {
    var creado = await SaleProduct.create(req.allParams()).fetch();
    if (creado) {
      return res.send({
        'success': true,
        'message': 'Objeto creado exitosamente.',
        'data': creado,
      })
    } else {
      return res.send({
        'success': false,
        'message': 'Error en la solicitud.',
      })
    }
  },

};

