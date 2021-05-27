/**
 * ClientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: (req, res) => {
    // sails.log.debug(req.allParams())
    let parametros = req.allParams();
    sails.helpers.passwords.hashPassword(parametros.password)
      .then((cifrada) => {
        parametros.password = cifrada
        Client.create(parametros)
          .then((usuario) => {
            return res.send({
              'success': true,
              'message': 'Cliente creado exitosamente.',
              'data': usuario,
            })
          })
          .catch((error) => {
            return res.send({
              'success': false,
              'message': 'Error en la solicitud:' + error,
            })
          })

      })
  },

  auth: (req, res) => {
    Client.findOne({ user: req.param('user') })
      .then((user) => {
        if (!user || user === null) {
          return res.send({
            'success': false,
            'message': 'Cliente o contraseña invalidos.',
          })
        }
        //var respuesta = true
        sails.helpers.validarClave.with({
          password: req.param('password'),
          hash: user.password
        })
          .then(() => {
            sails.helpers.jwToken.with({
              id: user.id
            })
              .then((token) => {
                return res.send({
                  'success': true,
                  token: token,
                  id: user.id,
                  user: user.user
                })
              })
          })
          .catch(() => {
            return res.send({
              'success': false,
              'message': "Usuario o contraseña invalidos.",
            })
          })
      })
      .catch((error) => {
        return res.send({
          'success': false,
          'message': 'Error en la solicitud:' + error,
        })
      })
  },

  list: (req, res) => {
    Client.find().populate('person')
      .then((client) => {
        if (!client || client.lenght == 0) {
          return res.send({
            'success': false,
            'message': 'Sin registros.',
          })
        }
        return res.send({
          'success': true,
          'message': 'Solicitud exitosa.',
          'data': client,
        })
      })
      .catch((error) => {
        return res.send({
          'success': false,
          'message': 'Error en la solicitud:' + error,
        })
      })
  },

  byid: (req, res) => {
    Client.find(req.param('id')).populate('person')
      .then((client) => {
        if (!client || client.lenght == 0) {
          return res.send({
            'success': false,
            'message': 'Sin registros.',
          })
        }
        return res.send({
          'success': true,
          'message': 'Solicitud exitosa.',
          'data': client,
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
    let parametros = req.allParams();
    sails.helpers.passwords.hashPassword(parametros.password)
      .then((cifrada) => {
        parametros.password = cifrada
        Client.update(req.param('id'), parametros)
          .then((obj) => {
            return res.send({
              'success': true,
              'message': 'Client actualizada exitosamente.',
              'data': obj,
            })
          })
          .catch((error) => {
            return res.send({
              'success': false,
              'message': 'Error en la solicitud:' + error,
            })
          })
      })
  },

  // validate: (req, res) => {
  //   sails.helpers.jwTokenValidate.with({
  //     req: req
  //   })
  //     .then((resp) => {
  //       return res.send({
  //         resp: resp
  //       })
  //     })
  // }

};

