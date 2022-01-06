let { check, body } = require('express-validator');
const { users } = require('../database/dataBase');
const bcrypt = require('bcryptjs');

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),


    body('custom')
        .custom((value, {req}) => {
            let user = users.find(user => user.email == req.body.email);

            if(user){
                if(bcrypt.compareSync(req.body.pass, user.password)){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }

        }).withMessage('Credenciales inválidas')
]