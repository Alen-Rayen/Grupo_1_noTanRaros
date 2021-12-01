const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


/* GET Home */
router.get('/', indexController.home);

/* GET Contact */
router.get('/contact', indexController.contact);

/* GET Cart */
router.get('/cart', indexController.cart);



module.exports = router;


