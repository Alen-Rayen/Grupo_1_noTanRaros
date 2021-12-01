let controller = {
    home: (req, res) => {
        res.render('users/home', { title: 'Home | NoTanRaros' });
    },
    contact: (req, res) => {
        res.render('users/contact', { title: 'Contacto | NoTanRaros' });
    },
    cart: (req, res) => {
        res.render('users/cart', { title: 'Carrito | NoTanRaros' })
    }
}

module.exports = controller;