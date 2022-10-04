const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const { Add_product, test, All_product, Product_Detail, Product_Update, Delete_Product } = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', test);

// routes/products.route.js
router.post('/addProduct', Add_product);
// router.post('/add-products', addProduct);


//all products
router.get('/allProducts', All_product);

//Product Detail
router.get('/productDetail', Product_Detail);

//Product Updated
router.put('/productUpdate', Product_Update);

//Delete Products
router.delete('/deleteProduct', Delete_Product);



module.exports = router;