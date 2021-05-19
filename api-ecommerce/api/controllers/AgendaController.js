/**
 * AgendaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  // get: (req, res) => {
  //   Contacto.find()
  //     .then((contactos) => {
  //       if (!contactos || contactos.lenght === 0) {
  //         return res.send({
  //           'success': false,
  //           'message': 'Sin registros.',
  //         })
  //       }
  //       return res.send({
  //         'success': true,
  //         'message': 'Solicitud exitosa.',
  //         'data': contactos,
  //       })
  //     })
  //     .catch((error) => {
  //       return res.send({
  //         'success': false,
  //         'message': 'Error en la solicitud:' + error,
  //       })
  //     })
  // },

  // create: (req, res) => {
  //   // sails.log.debug(req.allParams())
  //   Contacto.create(req.allParams())
  //     .then((contacto) => {
  //       return res.send({
  //         'success': true,
  //         'message': 'Contacto creado exitosamente.',
  //         'data': contacto,
  //       })
  //     })
  //     .catch((error) => {
  //       return res.send({
  //         'success': false,
  //         'message': 'Error en la solicitud:' + error,
  //       })
  //     })
  // },

  // update: (req, res) => {
  //   Contacto.update(req.param('id'), req.allParams())
  //     .then((contacto) => {
  //       return res.send({
  //         'success': true,
  //         'message': 'Contacto actualizado exitosamente.',
  //         'data': contacto,
  //       })
  //     })
  //     .catch((error) => {
  //       return res.send({
  //         'success': false,
  //         'message': 'Error en la solicitud:' + error,
  //       })
  //     })
  // },

  // delete: (req, res) => {
  //   Contacto.destroy(req.param('id'))
  //     .then((contacto) => {
  //       return res.send({
  //         'success': true,
  //         'message': 'Contacto eliminado exitosamente.',
  //         'data': contacto,
  //       })
  //     })
  //     .catch((error) => {
  //       return res.send({
  //         'success': false,
  //         'message': 'Error en la solicitud:' + error,
  //       })
  //     })
  // }

};

