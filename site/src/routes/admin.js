const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/createProduct', adminController.create);
router.get('/editProduct', adminController.edit);


module.exports = router;