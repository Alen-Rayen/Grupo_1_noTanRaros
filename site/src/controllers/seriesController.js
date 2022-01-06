let controller = {
    series: (req, res) => {
        res.render('users/series', { 
            title: 'Series | NoTanRaros',
            session: req.session
        })
    }
}

module.exports = controller;