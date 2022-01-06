const { users } = require('../database/dataBase');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
const session = require('express-session');

function rutasInvitado(req, res, next){
    if (typeof req.session.user != "undefined"){
        res.redirect('/users/profile')
    } else {
        next()
    }
}

module.exports = rutasInvitado;