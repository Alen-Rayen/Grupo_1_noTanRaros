let controller = {
    create: (req, res) => {
        res.render('admin/createProduct', { title: 'Crear Producto' })
    },
    edit: (req, res) => {
        res.render('admin/editProduct', { title: 'Editar Producto' })
    }
}


module.exports = controller;