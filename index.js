require('dotenv/config');
const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');



// const productsRoute = require('./routes/products');
// const cartRoute = require('./routes/cart');

const app = express();
const PORT = process.env.PORT || 8000;

readdirSync('./routes').map((file) => app.use('/', require('./routes/' + file)));

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Main page');
});

// //Routes
// app.use('/products', productsRoute);
// app.use('/cart', cartRoute);

//Server
async function start() {
    try {
        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Server running on http://localhost:${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
};
start();