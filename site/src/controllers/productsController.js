let fs = require('fs');

let path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeJson = dataBase => fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    /* Show all products */
    index: (req, res) => {
        
        res.render('products/products', {
            title: 'Productos | NoTanRaros',
            products,
            toThousand
        })
    },
    /* Get product detail */
    detail: (req, res) => {
        let productId = +req.params.id;
        let product = products.find(product => product.id === productId);
        
        res.render('products/productDetail', {
            product,
            toThousand,
            title: `${product.name}`
        })
    },
    /* Creates one product form */
    create: (req, res) => {
        res.render('products/productCreate', {
            title: "Crear | NoTanRaros"
        })
    },
    store: (req, res) => {
        let lastId = 1;

        products.forEach(product => {
            if(product.id > lastId) {
                lastId = product.id
            }
        });

        let newProduct = {
            id: lastId + 1,
            name: req.body.name,
            description: req.body.description,
            price: +req.body.precio,
            discount: +req.body.discount,
            category: req.body.category,
            color: req.body.color,
            talle: req.body.talle,
            image: req.file ? req.file.filename : "404.jpg"
        }

        products.push(newProduct);

        writeJson(products);

        res.redirect('/products');
    },
    cart: (req, res) => {
        res.render('users/cart', { title: 'Carrito | NoTanRaros' })
    }
}

module.exports = controller;