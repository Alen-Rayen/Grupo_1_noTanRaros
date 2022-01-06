const { check } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El campo nombre es obligatorio').bail()
    .isLength({ min: 4, max: 50 })
    .withMessage('El nombre tiene que tener entre 4 y 50 caracteres')
    .isAlphanumeric()
    .withMessage('Ingresa un nombre válido'),

    check('category')
    .notEmpty()
    .withMessage('Debes elegir una categoría'),

    check('color')
    .notEmpty()
    .withMessage('Debes elegir un color'),

    check('talle')
    .notEmpty()
    .withMessage('Debes elegir un talle'),

    check('description')
    .notEmpty()
    .withMessage('Debes ingresar una descripcion')
    .isLength({ max: 5000 })
    .withMessage('El nombre tiene que tener hasta 5000 caracteres'),

    check('price')
    .notEmpty()
    .withMessage('Debes ingresar un precio').bail()
    .isNumeric()
    .withMessage('Sólo números'),

    check('discount')
    .notEmpty()
    .withMessage('Debes ingresar un descuento (0-99)')
    .isNumeric()
    .withMessage('Sólo números')
]