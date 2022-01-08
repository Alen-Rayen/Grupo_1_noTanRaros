const express = require('express'); //Requerimos express y lo guardamos en la variable express
const app = express();
const path = require('path');
const PORT = 8080;
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const cookieSession = require('./middlewares/cookieSession');


/* Express() */

/* Middlewares */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'noTanRaros',
    resave: false,
    saveUninitialized: true
}))
app.use(cookieParser());
app.use(cookieSession);

/* View Engine Setup */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Enrutadores */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const adminRouter = require('./routes/admin');
const seriesRouter = require('./routes/series');

/* Middlewares de rutas */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);
app.use('/series', seriesRouter);

/* ERROR 404 */
app.use((req, res, next) => {
    res.status(404).render('users/error', {
        title: 'Error',
        session: req.session
    })
});

app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

module.exports = app;