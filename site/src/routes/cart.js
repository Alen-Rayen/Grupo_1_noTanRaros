const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartController');


router.get('/show', controller.showCart);
router.post('/:id', controller.add);
router.delete('/empty', controller.empty);
router.delete('/item/:id', controller.removeItem);
router.delete('/:id', controller.remove);


module.exports = router;






