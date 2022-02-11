let fs = require('fs');

let path = require('path');


let db = require('../database/models')


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
    index: (req, res) => {
        res.render('admin/index', { 
            title: 'Main Admin Panel',
            session: req.session
        })
    },
    list: (req, res) => {
        db.Product.findAll({
            include: [
                {association: 'subcategories',
                include: [
                    {association:'category'}
                ]
            }
            ]
        })
        .then((products) => {
            res.render('admin/productsPanel', { 
                title: 'Lista de Productos',
                session: req.session,
                products
            })
        })
    },
    usersList: (req, res) => {
        db.User.findAll()
        .then((users) => {
            res.render('admin/usersPanel', {
                title: 'Lista de Usuarios',
                users,
                session: req.session
            })
        })
    }
}


module.exports = controller;