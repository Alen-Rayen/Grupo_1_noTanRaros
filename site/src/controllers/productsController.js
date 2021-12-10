let fs = require('fs');
let path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeJson = dataBase => fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    /* Show all products */
    index: (req, res) => {
        console.log(products)
        res.render('products/products', {
            title: 'Productos | NoTanRaros',
            products,
            toThousand
        })
    },
    detail: (req, res) => {
        res.render('products/productDetail', { title: 'Detalles | NoTanRaros' })
    },
    cart: (req, res) => {
        res.render('users/cart', { title: 'Carrito | NoTanRaros' })
    }
}

module.exports = controller;