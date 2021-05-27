/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function (req, res) {
    var creado = await Person.create(req.allParams()).fetch();
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

  update: (req, res) => {
    Person.update(req.param('id'), req.allParams())
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

