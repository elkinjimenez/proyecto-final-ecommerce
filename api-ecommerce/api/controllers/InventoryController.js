/**
 * InventoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list: (req, res) => {
    Inventory.find()
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
    Inventory.create(req.allParams())
      .then((obj) => {
        return res.send({
          'success': true,
          'message': 'Objeto creado exitosamente.',
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

  update: (req, res) => {
    Inventory.update(req.param('id'), req.allParams())
      .then((obj) => {
        return res.send({
          'success': true,
          'message': 'Objeto actualizado exitosamente.',
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

};

