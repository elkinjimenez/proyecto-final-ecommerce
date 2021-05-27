/**
 * SaleProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list: (req, res) => {
    SaleProduct.find().populate('product').populate('sale')
      .then((obj) => {
        if (!obj || obj.lenght == 0) {
          return res.send({
            'success': false,
            'message': 'Sin registros.',
          })
        }
        return res.send({
          'success': true,
          'message': 'Solicitud exitosa.',
          'data': obj,
        })
      })
      .catch((error) => {
        return res.send({
          'success': false,
          'message': 'Error en la solicitud:' + error,
        })
      })
  },

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

