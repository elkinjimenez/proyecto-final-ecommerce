/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list: (req, res) => {
    Product.find()
      .then((product) => {
        if (!product || product.lenght == 0) {
          return res.send({
            'success': false,
            'message': 'Sin registros.',
          })
        }
        return res.send({
          'success': true,
          'message': 'Solicitud exitosa.',
          'data': product,
        })
      })
      .catch((error) => {
        return res.send({
          'success': false,
          'message': 'Error en la solicitud:' + error,
        })
      })
  },

  create: (req, res) => {
    // sails.log.debug(req.allParams())
    Product.create(req.allParams())
      .then((product) => {
        return res.send({
          'success': true,
          'message': 'Producto creado exitosamente.',
          'data': product,
        })
      })
      .catch((error) => {
        return res.send({
          'success': false,
          'message': 'Error en la solicitud:' + error,
        })
      })
  },

  update: (req, res) => {
    Product.update(req.param('id'), req.allParams())
      .then((product) => {
        return res.send({
          'success': true,
          'message': 'Producto actualizado exitosamente.',
          'data': product,
        })
      })
      .catch((error) => {
        return res.send({
          'success': false,
          'message': 'Error en la solicitud:' + error,
        })
      })
  },

};

