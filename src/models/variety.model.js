import mongoose from "mongoose";

const varietySchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    }

})

export default mongoose.model('Variety',varietySchema)