// Importing the schema of ecommerce-api
const apiSchema = require("../model/apiSchema");
const asyncHandler = require("express-async-handler");


// Controller function for products
const products = asyncHandler(async function (req, res) {

    const data = await apiSchema.find({});
    res.send({ data });
});


// Controller function for creating product
const createProduct = asyncHandler(async function (req, res) {
  const data = await apiSchema.create({
    name: req.body.name,
    quantity: req.body.quantity,
  });
  res.send({ data, msg: "Product Created Successfully" });
});


// Controller function for delete product
const deleteProduct = asyncHandler(async function (req, res) {
  const delete_product = await apiSchema.deleteOne(req.body.id);
  res.send({ message: "Product Deleted" });
});


// Controller function for update product
const updateProduct = asyncHandler(async function (req, res) {
  const update = await apiSchema.findByIdAndUpdate(req.params.id, {
    quantity: req.params.update_quantity,
  });
  const data = await apiSchema.findOne(req.res.id);
  res.send({ data, message: "Product Updated" });
});


// Exporting all the controller functions
module.exports = {
  products,
  createProduct,
  deleteProduct,
  updateProduct,
};
