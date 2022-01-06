const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminCheck = require('../middlewares/userAdminCheck');


router.get('/', adminCheck, adminController.index);
router.get('/createProduct', adminCheck, adminController.create);
router.get('/editProduct', adminCheck, adminController.edit);
router.get('/productsList', adminCheck, adminController.list)
router.get('/usersList', adminCheck, adminController.usersList);


module.exports = router;