import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs';

//contoller function to add food items in the database

const addFood = async (req, res) => {

    //to store the name of the image
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error adding food"})
    }

}

// accessing all food lists available in the database
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error fetching food lists"})
        
    }
}

//remove food items from database
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id); //finds the food by id
        fs.unlink(`uploads/${food.image}`, () => {}) //deleted the image from uploads folder

        await foodModel.findByIdAndDelete(req.body.id); //deletes the food item from the database
        res.json({success:true,message:"Food removed"});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error deleting food item"})
        
    }
}




export {addFood, listFood, removeFood}