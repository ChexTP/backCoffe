import mongoose from "mongoose";

const processTypeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    }

})

export default mongoose.model('ProcessType',processTypeSchema)