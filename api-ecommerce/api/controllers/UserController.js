/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  // get: (req, res) => {
  //   User.find()
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

  create: (req, res) => {
    // sails.log.debug(req.allParams())
    let parametros = req.allParams();
    sails.helpers.passwords.hashPassword(parametros.password)
      .then((cifrada) => {
        parametros.password = cifrada
        User.create(parametros)
          .then((usuario) => {
            return res.send({
              'success': true,
              'message': 'Usuario creado exitosamente.',
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

  miAgenda: (req, res) => {
    // Usuario.find({ id: req.param('id') , email: req.param('email')})
    Usuario.find(req.allParams()).populate('contactos')
      .then((agenda) => {
        return res.send({
          agenda: agenda
        })
      })
  },

  auth: (req, res) => {
    Usuario.findOne({ usuario: req.param('user') })
      .then((user) => {
        if (!user || user === null) {
          return res.send({
            'success': false,
            'message': 'Usuario o contraseña invalidos.',
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
                  token: token
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

  validate: (req, res) => {
    sails.helpers.jwTokenValidate.with({
      req: req
    })
      .then((resp) => {
        return res.send({
          resp: resp
        })
      })
  }

};