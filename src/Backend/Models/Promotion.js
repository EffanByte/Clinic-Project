const mongoose = require("mongoose");
const { Schema } = mongoose;
const promotionSchema = new Schema({
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
const promotion = mongoose.model("Promotion", promotionSchema);
module.exports = promotion;

