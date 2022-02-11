let fs = require('fs');

let path = require('path');


/* const productsFilePath = path.join(__dirname, '../database/products.json'); */
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */
/* const writeJson = dataBase => fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8') */
const imagesPath = path.join(__dirname, '../../public/images/')

/* let categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/categories.json'), "utf-8")) */

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models');
const { Op } = require('sequelize');

let controller = {
    home: (req, res) => {    
        db.Product.findAll({
            include: [{
                association: 'subcategories',
                include: [{
                    association: 'category'
                }]
            }, {
                association: 'products_images'
            }]
        })
        .then((products) => {
            res.render('users/home', {
                 title: 'Home | NoTanRaros',
                 products,
                 toThousand,
                 session: req.session,
            });
        })
        .catch(error => {
            console.log(error);
        })
    },
    contact: (req, res) => {
        res.render('users/contact', { 
            title: 'Contacto | NoTanRaros',
            session: req.session
        });
    },
    error: (req, res) => {
        res.render('users/error', {
            title: "Error",
            session: req.session
        })
    }
}

module.exports = controller;