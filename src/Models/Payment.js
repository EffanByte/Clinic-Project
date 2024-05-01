import mongoose from "mongoose";
// Define the schema for payments
const paymentSchema = new mongoose.Schema({
    // patient: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Patient', 
    //     required: true 
    // },
    patientCNIC: { 
        type: Number,  
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    method: { 
        type: String, 
        enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash'], 
        required: true 
    }
});
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
