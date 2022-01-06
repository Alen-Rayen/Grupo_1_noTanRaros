let fs = require('fs');

let path = require('path');


const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeJson = dataBase => fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8')
const imagesPath = path.join(__dirname, '../../public/images/')

let categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/categories.json'), "utf-8"))

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
    home: (req, res) => {
        res.render('users/home', {
             title: 'Home | NoTanRaros',
             products,
             toThousand,
             session: req.session
        });
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