const Product = require('../models/product.model');

//Simple version, without validation or sanitation
const test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// Add Product

// // controllers/products.js
// const product_create = async (req, res) => {
//     console.log(req.body)

//     // if (!req.body.title) {
//     //     return res.status(400).send({
//     //         message: "Note title can not be empty"
//     //     });
//     // }

//     const product = await Product.create(
//         {
//             title: req.params.title,
//             price: req.params.price
//         }
//     );
//     res.status(200).json(product)

//     // const product = new Product();
//     // product.title = req.body.title,
//     //     product.price = req.body.price

//     // product.save()
//     //     .then(data => {
//     //         res.send(data);
//     //     })
//     //     .catch(err => {
//     //         res.status(500).send({
//     //             message: err.message || "Something went wrong."
//     //         })
//     //     })

//     // product.save(function (err) {
//     //     if (err) {
//     //         return next(err, 'error in creating product');
//     //     }
//     //     res.send('Product Created successfully')
//     // })
// };
const Add_product = async (req, res) => {
    console.log(req.body);
    if (!req.body.title) {
        res.status(400)
        throw new Error('Please add title')
    }
    const product = await Product.create({
        title: req.body.title,
        price: req.body.price
    })
    res.status(200).json(Add_product)
}


//All Products
const All_product = async (req, res) => {
    const allProduct = await Product.find();
    res.status(200).send({
        status: 1,
        message: 'Success',
        data: allProduct
    });
    // console.log(allProduct);
}


//product Detail
const Product_Detail = async (req, res) => {
    const productDetail = await Product.findById({ _id: req.body._id })
    if (productDetail) {
        res.status(200).send({
            status: 1,
            data: productDetail
        });
    }
    else {
        res.status(404).send({
            status: 0,
            message: 'Product not found.'
        });
    }
}


// Update Products
const Product_Update = async (req, res) => {
    const productUpdate = await Product.findById({ _id: req.body._id })
    productUpdate.title = req.body.title,
        productUpdate.price = req.body.price

    const updatedProduct = await productUpdate.save();

    if (updatedProduct) {
        res.status(200).send({
            status: 1,
            message: 'Product updated successfully.'
        });
    }
    else {
        res.status(400).send({
            status: 0,
            message: 'Something went wrong.'
        });
    }
}


//Delete Product
const Delete_Product = async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete({ _id: req.body._id })
    if (deleteProduct) {
        res.status(200).send({
            status: 1,
            message: 'Product deleted successfully.'
        });
    }
    else {
        res.status(404).send({
            status: 0,
            message: 'Product not found.'
        });
    }
}

module.exports = {
    test,
    Add_product,
    All_product,
    Product_Detail,
    Product_Update,
    Delete_Product
};