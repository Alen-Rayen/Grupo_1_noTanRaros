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
            include: [
                {association: 'products_images'},
                {association: 'brands'},
                {
                    association: 'subcategories',
                    include: [{
                        association: 'category'
                    }]
                },
            ]
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
                    title: `${product.name} | NoTanRaros`,
                    session: req.session
                })
            })
        }))        
    },
    /* Creates one product form */
    //Muestra el formulario de carga de producto
    create: (req, res) => {
        let categories = db.Category.findAll();
        let subcategories = db.Subcategory.findAll();
        let colors = db.Color.findAll();
        let brands = db.Brand.findAll();
        Promise.all([categories, subcategories, colors, brands])
        .then(([categories, subcategories, colors, brands]) => {
            res.render('products/productCreate', {
                title: 'Crear Producto | NoTanRaros',
                categories,
                subcategories,
                colors,
                brands,
                session: req.session
            })
        })
    },
    /* Method to store created product */
    store: (req, res) => {
        let errors = validationResult(req)
        let arrayImages = [];
        if(req.files){
            req.files.forEach((image) => {
                arrayImages.push(image.filename);
            });
        }
        if(errors.isEmpty()){
            let { name, price, subcategory, description, discount, color, brand } = req.body;

            db.Product.create({
                name,
                price,
                subcategory_id: subcategory,
                color_id: color,
                discount,
                description,
                brand_id: brand
            })
            .then((product) => {
                if(arrayImages.length > 0){
                    let images = arrayImages.map((image) => {
                        return {
                            image: image,
                            productId: product.id
                        };
                    });
                    db.Products_image.bulkCreate(images)
                    .then(() => res.redirect('/products'))
                    .catch(error => console.log(error))
                }else{
                    db.Products_image.create({
                        image: 'default-image.jpg',
                        productId: product.id
                    })
                    .then(() => {res.redirect('/products')})
                    .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
        }else{
            let allCategories = db.Category.findAll();
            let allSubcategories = db.Subcategory.findAll();
            let allBrands = db.Brand.findAll();
            let allColors = db.Color.findAll();
            Promise.all([allCategories, allSubcategories, allBrands, allColors])
            .then(([categories, subcategories, brands, colors]) => {
                res.render('products/productCreate', {
                    categories,
                    subcategories,
                    brands,
                    colors,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session,
                    title: 'Crear Producto | NoTanRaros'
                })
            })
            .catch(error => console.log(error))
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
        const productPromise = db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                association: 'subcategories',
                include: [{
                    association: 'category'
                }]
            }, {
                association: 'products_images'
            }]
        }) 
        const categoriesPromise = db.Category.findAll();
        const subcategoriesPromise = db.Subcategory.findAll();
        const colorsPromise = db.Color.findAll();
        const brandsPromise = db.Brand.findAll();
        Promise.all([productPromise, categoriesPromise, subcategoriesPromise, colorsPromise, brandsPromise])
        .then(([product, categories, subcategories, colors, brands]) => {
            res.render('products/editProduct', {
                title: 'Editar | NoTanRaros',
                product,
                categories,
                subcategories,
                colors,
                brands,
                session: req.session
            })
        })
        .catch(error => console.log(error));
    },
    update: (req, res) => {
        let errors = validationResult(req);
        let arrayImages = [];
        if(req.files){
            req.files.forEach((image) => {
                arrayImages.push(image.filename);
            });
        }

        if(errors.isEmpty()){
            const { name, price, subcategory, description, discount, color, brand } = req.body;
            
            db.Product.update({
                name,
                price,
                description: description,
                discount,
                subcategory_id: subcategory,
                color_id: color,
                brand_id: brand
            },{
                where: {
                    id: req.params.id
                }
            })
            .then((result) => {
                if(arrayImages.length > 0){
                    db.Products_image.findAll({
                        where: {
                            productId: req.params.id
                        }
                    })
                    .then((images) => {
                        images.forEach((image) => {
                            fs.existsSync('../public/images/products/', image.image)
                            ? fs.unlinkSync(`../public/images/products/${image.image}`)
                            : console.log('No se encontró el archivo')
                        })
                        db.Products_image.destroy({
                            where: {
                                productId: req.params.id
                            }
                        })
                        .then(() => {
                            let images = arrayImages.map((image) => {
                                return {
                                    image: image,
                                    productId: req.params.id
                                };
                            });
                            db.Products_image.bulkCreate(images)
                            .then(() => res.redirect('/products'))
                            .catch(error => console.log(error))
                        })
                        .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
            res.redirect('/products')
        }else{
            let productPromise = db.Product.findByPk(req.params.id);
            let categoriesPromise = db.Category.findAll();
            let subcategoriesPromise = db.Subcategory.findAll();
            let colorsPromise = db.Color.findAll();
            let brandsPromise = db.Brand.findAll();
            Promise.all(([productPromise, categoriesPromise, subcategoriesPromise, colorsPromise, brandsPromise]))
            .then(([product, categories, subcategories, colors, brands]) => {
                res.render('products/editProduct', {
                    title: 'Editar | NoTanRaros',
                    product,
                    categories,
                    subcategories,
                    colors,
                    brands,
                    session: req.session,
                    errors: errors.mapped(),
                    old: req.body
                })
            })
        }
    },
    destroy: (req, res) => {
        db.Products_image.findAll({
            where: {
                productId: req.params.id
            }
        })
        .then((images) => {
            images.forEach((image) => {
                fs.existsSync('../public/images/products', image.image)
                ? fs.unlinkSync(`../public/images/products/${image.image}`)
                : console.log('No se encontró el archivo')
            })
            db.Products_image.destroy({
                where: {
                    productId: req.params.id
                }
            })
            .then((result) => {
                db.Product.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(() => {
                    res.redirect('/')
                })
                .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    },
    search: (req, res) => {
        let keywords = req.query.keywords.trim().toLowerCase();

        db.Product.findAll({
            include: [
                {association: 'products_images'}
            ],
            where: {
                name: {
                    [Op.substring]: `${keywords}`
                }
            }
        })
        .then((result) => {
            res.render('products/searchResult', {
                title: "Resultados | NoTanRaros",
                result,
                search: keywords,
                toThousand,
                session: req.session
            })
        })
    
    }

}

module.exports = controller;