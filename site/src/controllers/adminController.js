let fs = require('fs');

let path = require('path');

let { validationResult } = require('express-validator')

//const productsFilePath = path.join(__dirname, '../database/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
//const writeJson = dataBase => fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8')
//const imagesPath = path.join(__dirname, '../../public/images/')
//const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf-8'));

//let categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/categories.json'), "utf-8"))


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models');
const { Op } = require('sequelize');

let controller = {
    create: (req, res) => {
        let allCategories = db.Categories.findAll();
        let allSubcategories = db.Subcategories.findAll();
        Promise.all([allCategories, allSubcategories])
        .then(([categories]) => {
            res.render('admin/productCreate', { 
                title: 'Crear Producto',
                categories,
                subcategorie,
                session: req.session
            })
        })
        
    },
    edit: (req, res) => {
            let productId = Number(req.params.id);
            const productPromise = db.Products.findByPk(productId);
            const categoriesPromise = db.Categories.findAll();
            const subcategoriesPromise = db.Subcategories.findAll();
            Promise.all([productPromise, categoriesPromise, subcategoriesPromise])
            .then(([product, categories, subcategories])=>{
            res.render('admin/editProduct', { 
                title: 'Editar Producto',
                product,
                categories,
                subcategories,
                session: req.session
            })
        })
    },
    index: (req, res) => {
        res.render('admin/index', { 
            title: 'Main Admin Panel | NoTanRaros',
            session: req.session
        })
    },
    list: (req, res) => {
        res.render('admin/productsPanel', {
            title: 'Administrador de Productos',
            products,
            session: req.session
        })
    },
    usersList: (req, res) => {
        res.render('admin/usersPanel', {
            title: 'Lista de Usuarios',
            users,
            session: req.session
        })
    }
}


module.exports = controller;