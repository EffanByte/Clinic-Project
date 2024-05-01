const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({

    email: {
        type:String,
        required:true,
        unique:true
    },
    name: { 
        type: String, 
        required: true 
    },
    age: { 
        type: Number, 
        required: true 
    },
    gender: { 
        type: String, 
        enum: ['Male', 'Female', 'Other'], 
        required: true 
    },
    CNIC: {
        type: Number,
        required: true,
        unique: true
    },
    bloodType:{
        type: Number,
        required: true,
    },
    role:{
        type:String,
        enum:["Doctor","Patient"],
        required:true,
    }


});
const user = mongoose.model("User", userSchema);
module.exports = user;