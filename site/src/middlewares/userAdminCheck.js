const db = require('../database/models');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
const session = require('express-session');


function adminCheck(req, res, next){
    if (req.session.user && req.session.user.rol === "ROL_ADMIN") {
        next()
    } else {
        res.redirect('/')
    }
}

module.exports = adminCheck;