const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
app.use(express.static(path.join(__dirname, '../public')));

/* Enrutadores */

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const adminRouter = require('./routes/admin');
const seriesRouter = require('./routes/series');


/* View Engine Setup */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));


/* Middlewares de rutas */



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);
app.use('/series', seriesRouter);




app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});