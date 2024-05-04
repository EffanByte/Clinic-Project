
import mongoose from 'mongoose';
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

// patientCNIC, amount,date, method

// Create a model for payments
const payment = mongoose.model('payment', paymentSchema);
export default payment;