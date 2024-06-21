import mongoose from "mongoose";

const loteSchema = new mongoose.Schema({

    weigth:{
        type: Number,
        required:true,
    },
    variety:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Variety',
        required:true,
    },
    processType:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProcessType',
        required: true,
    }

})

export default mongoose.model('Lote', loteSchema)