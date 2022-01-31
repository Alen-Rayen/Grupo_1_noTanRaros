let { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models')


module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('custom')
        .custom((value, {req}) => {
            return db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if(!bcrypt.compareSync(req.body.pass, user.dataValues.pass)){
                    return Promise.reject()
                }
            })
            .catch(() => {
                return Promise.reject("Credenciales Invalidas")
            })
        })
]