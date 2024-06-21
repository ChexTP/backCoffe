import mongoose from "mongoose";

const dataCollectedSchema = new mongoose.Schema({

    machine:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Machine',
        required: true,
    },
    date:{
        type:Date,
        default:Date.now,
        required:true,
    },
    dataSensors:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DataSensors',
        required:true,
    },
    operator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    lote:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Lote',
        required:true,
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }


})
export default mongoose.model('DataCollected',dataCollectedSchema)