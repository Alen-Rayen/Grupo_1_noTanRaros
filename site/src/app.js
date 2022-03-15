
//Requires y otras configs:
const express = require('express'); //Requerimos express y lo guardamos en la variable express.
const app = express(); //Guardamos la ejecución de express en la constante app.
const path = require('path'); //Requerimos el modulo nativo 'path'
const PORT = 8080; //Seteamos el puerto en el 8080
const methodOverride = require('method-override'); //Hacemos require de method-override en la variable methodOverride
const session = require('express-session'); //Requerimos el modulo express-session
const cookieParser = require('cookie-parser');//Requerimos 'cookie-parser'
const createError = require('http-errors'); //Require de 'http-errors'
const cookieSession = require('./middlewares/cookieSession'); //Requerimos el middleware que creamos de cookieSession




/* Middlewares */
app.use(express.static(path.join(__dirname, '../public'))); //Seteamos el path de nuestra carpeta de archivos estaticos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')); //methodOverride nos permite usar metodos HTTP como PUT y DELETE con clientes que no soportan dichos metodos de manera nativa. El argumento es la string con el que lo vamos a usar, comúnmente _method
app.use(session({ 
    secret: 'noTanRaros', 
    resave: false, //
    saveUninitialized: true
}))
app.use(cookieParser());
app.use(cookieSession);

/* View Engine Setup */
app.set('view engine', 'ejs'); //Indicamos que vamos a usar EJS como template engine
app.set('views', path.join(__dirname, 'views')); //Le indicamos a nuestro view engine 

/* Enrutadores */
//Requerimos los routers que exportamos
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const adminRouter = require('./routes/admin');
const seriesRouter = require('./routes/series');
const apiRouter = require('./routes/api/apiRoutes.js');


/* Middlewares de rutas */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);
app.use('/series', seriesRouter);
app.use('/api/v1', apiRouter);

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