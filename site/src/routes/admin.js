const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.index);
router.get('/createProduct', adminController.create);
router.get('/editProduct', adminController.edit);
router.get('/productsList', adminController.list)
router.get('/usersList', adminController.usersList);


module.exports = router;