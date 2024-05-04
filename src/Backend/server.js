import connectToMongo from "./db.js";
import express from "express";
import path from "path";
const app = express();                    //making imports 
const port = 3333;

connectToMongo();                 //connecting to MongoDb database 

app.use(express.json());


app.listen(port, () => {
    console.log(`My Hospital  MSS App is listening on port http://localhost:${port}`);
});