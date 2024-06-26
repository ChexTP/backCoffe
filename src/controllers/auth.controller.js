import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";


export const registrar = async (req,res)=> {
    
    // traer los datos desde el body de la peticion
    const {username,password,cedula,name,phone,adress,email,state,photo,rol,} = req.body

    try {
        //encriptar password
        const passwordHash = await bcrypt.hash(password,10)

        //crear objeto user con los datos traidos desde body
        const newUser = new User({
            username,
            password:passwordHash,
            cedula,
            name,
            phone,
            adress,
            email,
            state,
            photo,
            rol,
        })

        //guardar newUser en la base de datos
        const userSaved = await newUser.save()
        
        //creacion del token 
        const token= await createAccesToken({id:userSaved._id})
        res.cookie("token",token)
       
        // envio del json al cliente con los datos de ususario
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            cedula: userSaved.cedula,
            name: userSaved.name,
            phone: userSaved.phone,
            adress: userSaved.adress,
            email:userSaved.email,
            state:userSaved.state,
            photo:userSaved.photo,
            rol:userSaved.rol,

        })

    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}
export const login = async (req,res)=> {
    
    // traer los datos desde el body de la peticion
    const {email,password} = req.body

    try {
        //buscar el ususario por email
        const userFound = await User.findOne({email})

        //verificar si el ususario existe o no en la DB
        if(!userFound) return res.status(400).json({message:"User not found"})

        //comparar contraseña de userFound con la ingresada
        const isMatch = await bcrypt.compare(password,userFound.password)

        if(!isMatch) return res.status(400).json({message:"Incorrect Password"})

        //creacion del token 
        const token= await createAccesToken({
            id:userFound._id,
            rol:userFound.rol,
        })
        res.cookie("token",token)
       
        // envio del json al cliente con los datos de ususario
        res.json({
            id: userFound._id,
            username: userFound.username,
            cedula: userFound.cedula,
            name: userFound.name,
            phone: userFound.phone,
            adress: userFound.adress,
            email:userFound.email,
            state:userFound.state,
            photo:userFound.photo,
            rol:userFound.rol,

        })

    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}
export const logout =(req,res)=>{
    res.cookie("token","",{
        expires: new Date(0),
    })
    return res.sendStatus(200)
}
export const profile =async (req,res)=>{
    const userFound= await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({message: "user not found"});

    return res.json({
        id: userFound.id,
        username: userFound.username,
        email: userFound.email
    })
}
  