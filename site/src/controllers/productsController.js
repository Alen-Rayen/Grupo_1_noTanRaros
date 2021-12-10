let fs = require('fs');

let path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeJson = dataBase => fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8')
const imagesPath = path.join(__dirname, '../../public/images/')


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
    /* Method to store created product */
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
    /* Gets cart view */
    cart: (req, res) => {
        res.render('users/cart', { title: 'Carrito | NoTanRaros' })
    },
    edit: (req, res) => {
        let productId = +req.params.id;
        let productToEdit = products.find(product => product.id === productId);

        res.render('products/editProduct', {
            product: productToEdit,
            title: 'Editar|NoTanRaros'
        })
    },
    update: (req, res) => {
        let productId = +req.params.id;

        

        const {name, precio, discount, description, category, color, talle} = req.body;
    
        products.forEach(product => {
            if(product.id === productId) {
                product.id = +product.id,
                product.name = name,
                product.description = description,
                product.price = +precio,
                product.discount = +discount,
                product.category = category,
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
    }

}

module.exports = controller;