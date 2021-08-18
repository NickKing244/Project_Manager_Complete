const Product = require("../models/product.model");

const addNewProduct = (req, res) => {
  const { body } = req;
  console.log("body:", body);
  Product.create({
    title: body.title,
    price: body.price,
    description: body.description,
  })
    .then((newProduct) => res.json({ newProduct }))
    .catch((err) => res.status(400).json(err));
};

const getAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.status(400).json({ err }));
};

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.productId })
    .then((deletedProduct) => res.status(200).send("Product Deleted"))
    .catch((err) => res.status(400).json(err));
};

const getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.productId })
    .then((oneProduct) => res.json(oneProduct))
    .catch((err) => res.status(400).json(err));
};

const updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.productId }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  addNewProduct,
  getAllProducts,
  deleteProduct,
  getOneProduct,
  updateProduct,
};
