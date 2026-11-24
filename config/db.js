import mongoose from "mongoose";

 export const connectDB =async ()=>{

    await mongoose.connect('mongodb+srv://foodadmin:Nilanisha@cluster0.grmlxrt.mongodb.net/fooddelivery').then(()=>console.log("DB Connected"));
 } 
