let controller = {
    product: (req, res) => {
        res.render('products/product', { title: 'Detalles | NoTanRaros' })
    }
}

module.exports = controller;