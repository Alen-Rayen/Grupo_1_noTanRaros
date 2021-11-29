const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
app.use(express.static('public'));




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/users/home.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/products/product.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/users/cart.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/users/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/users/register.html'));
});






app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});