const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const product = require('./routes/product.route'); // Imports routes for the products
app.use('/products', product);


const PORT = process.env.PORT || 5000;

dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => console.log('Connection success')
);

app.listen(PORT, () => console.log('Server running on', PORT));


