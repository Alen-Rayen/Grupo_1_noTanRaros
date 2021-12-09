let controller = {
    home: (req, res) => {
        res.render('users/home', { title: 'Home | NoTanRaros' });
    },
    contact: (req, res) => {
        res.render('users/contact', { title: 'Contacto | NoTanRaros' });
    }  
}

module.exports = controller;