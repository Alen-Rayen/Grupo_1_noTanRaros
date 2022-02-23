const { check } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El campo nombre es obligatorio').bail()
    .isLength({ min: 5, max: 50 })
    .withMessage('El nombre debe tener entre 5 y 50 caracteres'),
    
    check('category')
    .notEmpty()
    .withMessage('Debes elegir una categoria'),

    check('subcategory')
    .notEmpty()
    .withMessage('Debes elegir una subcategoria'),

    check('color')
    .notEmpty()
    .withMessage('Debes elegir un color'),

    check('description')
    .notEmpty()
    .withMessage('Debes ingresar una descripcion')
    .isLength({min: 20})
    .withMessage('La descripción debe tener como minimo 20 caracteres'),

    check('brand')
    .notEmpty()
    .withMessage('Debes elegir una marca'),

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