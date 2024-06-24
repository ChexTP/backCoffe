import User from "../models/user.model.js";

export const getOperarios = async (req,res)=>{

    try {
        const users= await User.find()
        res.json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error find users'})
        
    }

}

export const getOperarioById = async (req,res)=>{

    try {
        const {id}=req.params
        const operario = await User.findById(id);
        if(!operario){
            return res.status(404).json({message:"Operario not found"})
        } 
        res.json(operario)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error get Operario"})
    }

}

export const updateOperario = async (req,res)=>{

    try {
        const {id} = req.params
        const {username,password,cedula,name,phone,adress,email,state,photo,rol,} = req.body
        const updatedOperario = await User.findByIdAndUpdate(id,{username,password,cedula,name,phone,adress,email,state,photo,rol,},{new: true})
        if(!updateOperario){
            return res.status(404).json({message:'Operario not found'})
        }
        res.json(updateOperario)
    } catch (error) {
        res.status(500).json({message:'error updating operario'})
    }

}

export const deleteOperario = async (req,res)=>{
    try {
        const {id} = req.params
        const deleteOperario = await User.findByIdAndDelete(id)
        if(!deleteOperario){
            return res.status(404).json({message:'Operario not found'})
        }
        res.json(deleteOperario)

    } catch (error) {
        res.status(500).json({message:'error deleting operario'})
        
    }
}