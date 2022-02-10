const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadProductFiles');
const productsController = require('../controllers/productsController');
let productFormValidator = require('../validations/productFormValidator');
const logInCheck = require('../middlewares/rutasUsers');
const adminCheck = require('../middlewares/userAdminCheck');


/* GET ALL PRODUCTS */
router.get('/', productsController.index);

/* CREATE ONE PRODUCT */
router.get('/create/', adminCheck, productsController.create);
router.post('/', upload.array('image'), productFormValidator, productsController.store);

/* GET ONE PRODUCT DETAIL */
router.get('/detail/:id', productsController.detail);

/* GET CART VIEW */
router.get('/cart', logInCheck, productsController.cart);

/* EDIT ONE PRODUCT */
router.get('/:id/edit', adminCheck, productsController.edit);
router.put('/:id', upload.single('image'), productsController.update);

/* Delete */
router.delete('/:id', productsController.destroy)

/* GET - Gets search view */
router.get('/search', productsController.search);

module.exports = router;








































































