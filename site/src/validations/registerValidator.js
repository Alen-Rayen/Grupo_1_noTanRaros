const { check, body } = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('nombre')
    .notEmpty()
    .withMessage('El campo es obligatorio')
    .isLength({min:2})
    .withMessage('El nombre debe contener al menos 2 caracteres'),
    
    check('apellido')
    .notEmpty()
    .withMessage('El campo es obligatorio')
    .isLength({min:2})
    .withMessage('El apellido debe contener al menos 2 caracteres'),

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
        min: 8,
        max: 16
    })
    .withMessage('La contraseña debe tener entre 8 y 16 caracteres')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,16})$/)
    .withMessage('La contraseña debe contener al menos un número, una mayúscula, una minúscula y tener entre 8 y 16 caracteres'),


    check('pass2')
    .notEmpty()
    .withMessage('Re-Ingresa la contraseña'),

    body('pass2').custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los terminos y condiciones')
]








