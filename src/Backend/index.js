
const connectToMongo = require("./db");
const express = require("express");
const app = express();                    //making imports 
const port = 3333;
const path = require('path');
connectToMongo();                 //connecting to MongoDb database 

app.use(express.json());


app.listen(port, () => {
    console.log(`My Hospital  MSS App is listening on port http://localhost:${port}`);
});