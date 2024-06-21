import mongoose from "mongoose";

const dataSensorsSchema = new mongoose.Schema({

    machine:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Machine',
        required: true,
    },
    tempSensor1:{
        type: Number,
        required: true,
    },
    tempSensor2:{
        type: Number,
        required: true,
    },
    tempAmbient:{
        type:Number,
        required:true,
    },
    rotor:{
        type:Boolean,
        required: true,
    },
    airFan:{
        type:Boolean,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
        required:true,
    }

})
export default mongoose.model('DataSensors',dataSensorsSchema)