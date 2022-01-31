const { check, body } = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('nombre')
    .notEmpty()
    .withMessage('Debes ingresar un nombre'),
    
    check('apellido')
    .notEmpty()
    .withMessage('Debes ingresar un apellido'),

    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Ingresa un email valido'),

    body('email').custom((value) => {
        return db.User.findOne({
            where: {
                email: value,
            }
        })
        .then((user) => {
            if(user){
                return Promise.reject('Email ya registrado')
            }
        })
    }),

    /* check('email').custom((value) => {
        let user = users.find(user=>{ 
             return user.email == value 
         })
 
         if(user){
             return false
         }else{
             return true
         }
     }).withMessage('Email ya registrado'), */

     check('pass')
    .notEmpty()
    .withMessage('Debes ingresar una contraseña').bail()
    .isLength({
        min: 6,
        max: 24
    })
    .withMessage('La contraseña debe tener entre 6 y 24 caracteres'),

    check('pass2')
    .notEmpty()
    .withMessage('Re-Ingresa la contraseña'),

    body('pass2').custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los terminos y condiciones')
]








