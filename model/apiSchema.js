const mongoose = require("mongoose")

// Creating the schema with two fields (name, quantity)
const dbSchema = new mongoose.Schema({
    name:String,
    quantity:Number,
},{
    versionKey:false,
})

// Exporting the schema
module.exports = mongoose.model("apiSchema",dbSchema)