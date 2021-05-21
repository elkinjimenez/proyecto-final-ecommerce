/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list: (req, res) => {
    Category.find()
      .then((category) => {
        if (!category || category.lenght == 0) {
          return res.send({
            'success': false,
            'message': 'Sin registros.',
          })
        }
        return res.send({
          'success': true,
          'message': 'Solicitud exitosa.',
          'data': category,
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
    Category.create(req.allParams())
      .then((category) => {
        return res.send({
          'success': true,
          'message': 'Categoría creada exitosamente.',
          'data': category,
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
    Category.update(req.param('id'), req.allParams())
      .then((category) => {
        return res.send({
          'success': true,
          'message': 'Categoría actualizada exitosamente.',
          'data': category,
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

