/* const { users, products, writeUsersJSON } = require('../database/dataBase'); */
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
let fs = require('fs');
let path = require('path');

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
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                req.session.user = {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rol
                }

                if(req.body.remember){
                    const TIME_IN_MILISECONDS = 60000;
                    res.cookie("userNoTanRaros", req.session.user, {
                        expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                        httpOnly: true,
                        secure: true
                    })
                }
                
                res.locals.user = req.session.user;

                res.redirect('/')
            })
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
            let { nombre, apellido, email, pass } = req.body;
            db.User.create({
                first_name: nombre,
                last_name: apellido,
                email: email,
                pass: bcrypt.hashSync(pass, 12),
                avatar: req.file ? req.file.filename : 'default-image.jpg',
                rol: 'ROL_USER'
            })
            .then(() => {
                let transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'notanraros@gmail.com',
                        pass: 'Supersecretpassword'
                    }
                });

                let mailName = req.body.nombre

                ejs.renderFile(path.join(__dirname, '../views/users/email.ejs'), { name: mailName }, function(err, data){
                    if(err){
                        console.log(err);
                    }else{
                        let mailOptions = {
                            from: 'notanraros@gmail.com',
                            to: req.body.email,
                            subject: 'Registro Completo',
                            html: data
                        };


                        transporter.sendMail(mailOptions, function(err, info){
                            if(error){
                                console.log(error);
                            }else{
                                console.log('Email sent');
                            }
                        })
                    }
                })


                res.redirect('/users/login')
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
        db.User.findByPk(req.session.user.id)
        .then((user) => {
            res.render('users/profile.ejs', { 
                title: 'Perfil | NoTanRaros',
                user,
                session: req.session
            });
        })
    },
    updateAvatar: (req, res) => {
        if(req.file){
            db.User.findByPk(req.session.user.id)
            .then((user) => {

                fs.existsSync(path.join(__dirname, '../../public/images/avatars'), user.avatar)
                ? fs.unlinkSync(path.join(__dirname, `../../public/images/avatars/${user.avatar}`))
                : console.log('No se encontró el archivo');

                req.session.user.avatar = req.file.filename;

                db.User.update(
                    {
                        avatar: req.file ? req.file.filename : 'default-image.jpg'
                    },
                    {
                        where: {
                            id: req.session.user.id
                        }
                    }
                )
                .then((user) => {
                    res.redirect('/users/profile')
                })
                .catch(error => {
                    console.log(error);
                })
            })
            .catch(error => {
                console.log(error);
            })

        }
    }    
}

module.exports = controller;