import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    firstName: { 
        type: String, 
    },
    lastName: { 
        type: String, 
    },
    age: { 
        type: Number, 
    },
    gender: { 
        type: String, 
        enum: ['Male', 'Female', 'Other'], 
    },
    bloodType:{
        type: String,
    },
    phone:{
        type:String
    },
    location:{
        type:String
    },
    role:{
        type:String,
        enum:["Doctor","Patient","Admin"],
    }
    
// username,email,password,firstName,lastName,age,gender,CNIC,bloodType,location,role

});
const user = mongoose.model("user", userSchema);
export default user;