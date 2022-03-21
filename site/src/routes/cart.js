const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartController');
const logInCheck = require('../middlewares/rutasUsers');
const rutasInvitado = require('../middlewares/rutasInvitado');
const adminCheck = require('../middlewares/userAdminCheck');


router.get('/show', logInCheck, controller.showCart);
router.post('/:id', logInCheck, controller.add);
router.delete('/empty', logInCheck, controller.empty);
router.delete('/item/:id', logInCheck, controller.removeItem);
router.delete('/:id', logInCheck, controller.remove);


module.exports = router;






