const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://abdulrehmanasghar97:w9I4he0SDAWtSCPH@cluster0.dy95u2m.mongodb.net/"; //ad your url here of mongodb string
const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected to mongodb successfully");        //connecting to mongodb 
        })
        .catch((error) => {
            console.log("Erorr connecting mongo db :", error);
        })
}

module.exports = connectToMongo;