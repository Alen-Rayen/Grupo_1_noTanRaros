let controller = {
    product: (req, res) => {
        res.render('products/product', { title: 'Detalles | NoTanRaros' })
    },
    cart: (req, res) => {
        res.render('users/cart', { title: 'Carrito | NoTanRaros' })
    }
}

module.exports = controller;