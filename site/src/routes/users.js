const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/usersController');
const uploadFile = require('../middlewares/uploadAvatar.js');
let registerValidator = require('../validations/registerValidator');
let loginValidator = require('../validations/loginValidator');
const logInCheck = require('../middlewares/rutasUsers');
const rutasInvitado = require('../middlewares/rutasInvitado');
const adminCheck = require('../middlewares/userAdminCheck');

/* GET - LOGIN FORM VIEW */
router.get('/login', rutasInvitado, usersController.login);

/* POST - LOGIN FORM DATA */
router.post('/login', loginValidator, usersController.processLogin);

/* GET - LOGOUT */
router.get('/logout', usersController.logout);

/* GET - REGISTER FORM VIEWS */
router.get('/register', rutasInvitado, usersController.register);

/* POST - REGISTER FORM DATA */
router.post('/register', uploadFile.single('avatar'), registerValidator, usersController.processRegister);

/* GET- PROFILE */
router.get('/profile', logInCheck, usersController.profile);

router.put('/updateAvatar', uploadFile.single('avatar'), registerValidator, usersController.updateAvatar);

// GET - PROFILE EDIT VIEW
//router.get('/profile/edit', logInCheck, usersController.edit)









module.exports = router;