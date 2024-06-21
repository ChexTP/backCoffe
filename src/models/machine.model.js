import mongoose from "mongoose";

const machineSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    state:{
        type: String,
        required: true,
        enum:['Activo','Inactivo']
    }
})

export default mongoose.model('Machine',machineSchema)