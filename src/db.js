import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://chex:chex2118@cluster0.5ej9g3h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('DB is conected');
      } catch (error) {
        console.error('Error to conect DB:', error);
      }
}