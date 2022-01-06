function cookieSession (req, res, next) {
    if(req.cookies.userNoTanRaros){
        req.session.user = req.cookies.userNoTanRaros;
        res.locals.user = req.session.user
    }
    next()
}

module.exports = cookieSession