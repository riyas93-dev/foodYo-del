import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://riyasingh:9334272068@cluster0.logjyi0.mongodb.net/foodify').then(()=>console.log("DB connected"));
}

