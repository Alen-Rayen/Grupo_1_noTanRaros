let fs = require('fs');

let path = require('path');

/* const { writeProductsJSON } = require('../database/dataBase')
const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */
/* const writeJson = dataBase => fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8')
const imagesPath = path.join(__dirname, '../../public/images/') */
let { validationResult } = require('express-validator');
/* let categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/categories.json'), "utf-8")) */


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models');
const { Op } = require('sequelize');

const controller = {
    /* Show all products */
    //Muestra la pagina de todos los productos
    index: (req, res) => {
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
            res.render('products/products', {
                 title: 'Productos | NoTanRaros',
                 products,
                 toThousand,
                 session: req.session
            });
        })
        .catch(error => res.send(error))
    },
    /* Get product detail */
    //Muestra el detalle de un producto
    detail: (req, res) => {
        db.Product.findOne({
            where: {
                id: +req.params.id,
            },
            include: [{association: 'products_images'}]
        })
        .then(((product) => {
            db.Product.findAll({
                include: [{association: 'products_images'}],
                where: {
                    subcategory_id: product.subcategory_id
                }
            })
            .then((relatedProducts) => {
                res.render('products/productDetail', {
                    product,
                    relatedProducts,
                    toThousand,
                    title: `${product.name}`,
                    session: req.session
                })
            })
        }))
        /* let productId = +req.params.id;
        let product = products.find(product => product.id === productId);
        
        res.render('products/productDetail', {
            product,
            toThousand,
            title: `${product.name}`,
            session: req.session
        }) */
    },
    /* Creates one product form */
    create: (req, res) => {
        
        res.render('products/productCreate', {
            title: "Crear | NoTanRaros",
            categories,
            session: req.session
        })
    },
    /* Method to store created product */
    store: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let lastId = 1;

            products.forEach(product => {
                if(product.id > lastId){
                    lastId = product.id
                }
            });
    
            const {name, price, category, description, discount, color, talle} = req.body
    
            let newProduct = {
                id: lastId + 1,
                name: name.trim(),
                price: +price.trim(),
                category: +category,
                description: description.trim(),
                discount: +discount,
                color: color,
                talle: +talle,
                image: req.file ? [req.file.filename] : ["default-image.png"]
            }
    
            /* let newProduct = {
                ...req.body,
                id: lastId + 1,
                image: req.file ? req.file.filename : "default-image.png"
            } */
    
            products.push(newProduct)
    
            writeProductsJSON(products)
    
            res.redirect('/products')
        } else {
            res.render('products/productCreate.ejs', {
                categories,
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
                title: 'Crear | NoTanRaros'
            })
        }
    },
    /* Gets cart view */
    cart: (req, res) => {
        res.render('users/cart', { 
            title: 'Carrito | NoTanRaros',
            session: req.session
        })
    },
    edit: (req, res) => {
        let productId = +req.params.id;
        let productToEdit = products.find(product => product.id === productId);

        res.render('products/editProduct', {
            product: productToEdit,
            title: 'Editar|NoTanRaros',
            categories,
            session: req.session
        })
    },
    update: (req, res) => {
        let productId = +req.params.id;

        const {name, price, discount, description, category, color, talle} = req.body;
    
        products.forEach(product => {
            if(product.id === productId) {
                product.id = +product.id,
                product.name = name,
                product.description = description,
                product.price = +price,
                product.discount = +discount,
                product.category = +category,
                product.color = color,
                product.talle = talle
                if(req.file){
                    if(fs.existsSync('../../public/images/', product.image)){
                        fs.unlinkSync(`../../public/images/${product.image}`)
                    } else {
                        console.log('No encontré el archivo')
                    }
                    product.image = req.file.filename
                } else {
                    product.image = product.image
                }
            }
        })

        writeJson(products)

        res.redirect(`/products/detail/${productId}`)
    },
    destroy: (req, res) => {
        let productId = +req.params.id;

        products.forEach(product => {
            if(product.id === productId){

                if(fs.existsSync('./public/images/', product.image)){
                    fs.unlinkSync(`./public/images/${product.image}`)
                }else {
                    console.log('No encontré el archivo')
                }

                let productToDestroyIndex = products.indexOf(product)
                if(productToDestroyIndex !== -1){
                    products.splice(productToDestroyIndex, 1)
                } else {
                    console.log('No encontré el producto')
                }
            }
        })

        writeJson(products);
        res.redirect('/products')
    },
    search: (req, res) => {
        let keywords = req.query.keywords.trim().toLowerCase();

        let result = products.filter(product => product.name.toLowerCase().includes(keywords));
    
        res.render('products/searchResult', {
            title: "Resultados | NoTanRaros",
            result,
            search: keywords,
            toThousand,
            session: req.session
        })
    }

}

module.exports = controller;