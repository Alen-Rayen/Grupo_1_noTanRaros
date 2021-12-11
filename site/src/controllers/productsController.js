let fs = require('fs');

let path = require('path');


const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeJson = dataBase => fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8')
const imagesPath = path.join(__dirname, '../../public/images/')

let categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/categories.json'), "utf-8"))


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    /* Show all products */
    index: (req, res) => {
        console.log(categories)
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
            title: "Crear | NoTanRaros",
            categories
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

        const {name, price, category, talle, description, discount, color} = req.body

        let newProduct = {
            id: lastId + 1,
            name: name.trim(),
            description: description.trim(),
            price: +price.trim(),
            discount: +discount,
            category: +category,
            color: color,
            talle: talle,
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
            title: 'Editar|NoTanRaros',
            categories
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

                if(fs.existsSync('../../public/images/', product.image)){
                    fs.unlinkSync(`../../public/images/${product.image}`)
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
    }

}

module.exports = controller;