let controller = {
    /* Vistas */
    login: (req, res) => {
        res.render('users/login.ejs', { title: 'Login | NoTanRaros' });
    },
    register: (req, res) => {
        res.render('users/register.ejs', { title: 'Register | NoTanRaros' });
    },
    profile: (req, res) => {
        res.render('users/profile.ejs', { title: 'Perfil | NoTanRaros' });
    }
}

module.exports = controller;