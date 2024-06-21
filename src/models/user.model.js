import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cedula:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    state:{
        type:Boolean,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
    rol:{
        type:String,
        enum: ['Administrador','Operario','Proveedor'],
        require:true
    }
})
export default mongoose.model('User',userSchema)