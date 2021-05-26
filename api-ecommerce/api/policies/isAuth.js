// policies/isAuth.js
module.exports = async function(req, res, proceed) {


    sails.helpers.jwTokenValidate.with({
            req: req
        })
        .then((resp) => {
            sails.log.debug(resp)
            if (resp.id == null || resp.id == undefined) {
                return res.forbidden();
            } else {
                return proceed();
            }
        })
        .catch((err) => {
            return res.forbidden();
        })

};