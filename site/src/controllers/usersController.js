const { users, products, writeUsersJSON } = require('../database/dataBase');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


let controller = {
    /* Vistas */
    login: (req, res) => {
        res.render('users/login.ejs', { 
            title: 'Login | NoTanRaros',
            session: req.session
        });
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
           
            req.session.user = {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

           if(req.body.remember){
               const TIME_IN_MILISECONDS = 60000
               res.cookie("userNoTanRaros", req.session.user, {
                   expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                   httpOnly: true,
                   secure: true
               })
           }
           
            res.locals.user = req.session.user;


            
            res.redirect('/')

        }else{
            
            res.render('users/login', {
                title: 'Login | NoTanRaros',
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            })
        }
    },
    register: (req, res) => {
        res.render('users/register.ejs', { 
            title: 'Register | NoTanRaros',
            session: req.session
        });
    },
    processRegister: (req, res) => {
        const errors = validationResult(req);
        
        if(errors.isEmpty()){
            let lastId = 1;

            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });

            let { nombre, apellido, email, pass } = req.body

            let newUser = {
                id: lastId + 1,
                first_name: nombre,
                last_name: apellido,
                email, 
                password: bcrypt.hashSync(pass, 12),
                avatar: req.file ? [req.file.filename] : "default-image.png",
                rol: "ROL_USER",
            }

            users.push(newUser)

            writeUsersJSON(users)

            res.render('users/login', {
                title: 'Login | NoTanRaros',
                session: req.session
            })

        }else{
            res.render('users/register', {
                title: 'Register | NoTanRaros',
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            })
        }

    },
    logout: (req, res) => {
        req.session.destroy();
        if(req.cookies.userNoTanRaros){
            res.cookie('userNoTanRaros', '', { maxAge: -1 })
        }
        res.redirect('/');
    },
    profile: (req, res) => {
        res.render('users/profile.ejs', { 
            title: 'Perfil | NoTanRaros',
            session: req.session
        });
    }
    /* stor: (req, res) => {
        let user = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email
        }
        res.send(user)
    } */
}

module.exports = controller;