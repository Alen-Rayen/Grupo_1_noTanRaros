const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/* GET ALL PRODUCTS */
router.get('/', productsController.index)

/* GET ONE PRODUCT DETAIL */
router.get('/detail', productsController.detail);

/* GET CART VIEW */
router.get('/cart', productsController.cart);

module.exports = router;








































































