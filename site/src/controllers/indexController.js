let controller = {
    home: (req, res) => {
        res.render('users/home', { title: 'Home | NoTanRaros' });
    },
    contact: (req, res) => {
        res.render('users/contact', { title: 'Contacto | NoTanRaros' });
    },
    error: (req, res) => {
        res.render('users/error', {
            title: "Error"
        })
    }
}

module.exports = controller;