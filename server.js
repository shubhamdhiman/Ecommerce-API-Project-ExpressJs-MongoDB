const express = require("express")
const app = express()
const port = 5000;

// Importing Mongoose Connection and calling it
const connectDB = require('./config/apidb')
connectDB()

// Using urlEncoded to update get the form data
app.use(express.urlencoded({extended:true}))

// Providing the routes path
app.use("/products",require("./routes/apiRoutes"))

// Listening the application on given port
app.listen(port,(req,res)=>{
    console.log(`Listening on port ${port}`)
})
