const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
app.use(express.static('public'));




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/product.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/cart.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/register.html'));
});






app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});