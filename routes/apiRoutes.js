const express = require("express");

// Destructuring the controller functions from the controller file
const { products, createProduct, deleteProduct, updateProduct } = require("../controller/apiController");

// Using Router method
const route = express.Router();

// Route for products
route.get("/", products);

// Route to create product
route.post("/create",createProduct);

// Route to delete product
route.delete("/:id",deleteProduct);

// Route to update product
route.post("/:id/:update_quantity",updateProduct);

// Exporting the route
module.exports = route;
