const mongoose = require("mongoose")

// Making the connection with the mongodb atlas using mongoose
const  connectDb = async function(){
    try{
        const connecting = await mongoose.connect("mongodb+srv://admin:admin@shubhamcluster.ieolx9t.mongodb.net/Ecommerce-api?retryWrites=true&w=majority")
        console.log(`Database Connected Successfully, ${connecting.connection.name}`)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

// Exporting the connection
module.exports = connectDb;