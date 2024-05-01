import mongoose from "mongoose";

const { type } = require("os");
const { Schema } = mongoose;
const appointmentSchema = new Schema({
    // patient: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Patient', 
    //     required: true 
    // },

    patientCNIC: {
        type: Number,
        required: true
    },
    // doctor: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Doctor', 
    //     required: true 
    // },
    requestdate: {
        type: date,
        required: true
    },
    appointmentdate: {
        type: date,
        // required:true
    },
    // add in patientDetails image:{
    //     type: String, 
    // },
    patientDetails: [{

        weight: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        bloodType: {
            type: String,
            required: true
        },
        temperature: {
            type: Number,
            required: true
        },
        symptoms: {
            type: String,
            required: true
        },
        bloodPressure:
            [{
                upper: {
                    type: Number,
                    required: true
                },
                lower: {
                    type: Number,
                    required: true
                }
            }],
        Image: {
            type: String,
            required: true
        }

    }],
    appointmentType: {
        type: String,
        enum: ["Follow Up", "New"],
        required: true
    },
    appointmentStatus: {
        type: String,
        enum: ["Inprogress", "Completed", "Pending"],
        required: true
    }
});
const appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = appointment;