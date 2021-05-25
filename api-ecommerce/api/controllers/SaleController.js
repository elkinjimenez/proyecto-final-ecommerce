/**
 * SaleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list: (req, res) => {
    Sale.find().populate('client')
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

    create: (req, res) => {
    // sails.log.debug(req.allParams())
    Product.create(req.allParams())
      .then((objeto) => {
        return res.send({
          'success': true,
          'message': 'Objeto creado exitosamente.',
          'data': objeto,
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
      .then((objet) => {
        return res.send({
          'success': true,
          'message': 'Objeto actualizado exitosamente.',
          'data': objet,
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

