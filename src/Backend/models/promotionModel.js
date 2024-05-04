
import mongoose from 'mongoose';
import payment from './paymentModel';

const promotionSchema = new mongoose.Schema({
    // doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    title:
    {
        type: String, 
        enum:["Standard","Silver","Gold","Platinum"],
        required: true
    },
    description: { 
        type: String, 
        required: true 
    },
    startDate: { 
        type: Date, 
        required: true 
    },
    endDate: { 
        type: Date, 
        required: true 
    },
    discount: { 
        type: Number, 
        required: true 
    }

});

// title,description,startDate,endDate,discount

// Create a model for promotion
const promotion = mongoose.model("promotion", promotionSchema);
export default payment;