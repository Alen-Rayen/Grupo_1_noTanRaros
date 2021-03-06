const db = require('../database/models');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
const session = require('express-session');

function logInCheck(req, res, next){
    if(!req.session.user){
        res.redirect('/users/login')
    } else {
        next()
    }
}

module.exports = logInCheck;