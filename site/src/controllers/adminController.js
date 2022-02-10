let fs = require('fs');

let path = require('path');


const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeJson = dataBase => fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8')
const imagesPath = path.join(__dirname, '../../public/images/')
const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf-8'));

let categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/categories.json'), "utf-8"))


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
    create: (req, res) => {
        res.render('admin/createProduct', { 
            title: 'Crear Producto',
            session: req.session
        })
    },
    edit: (req, res) => {
        res.render('admin/editProduct', { 
            title: 'Editar Producto',
            session: req.session
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