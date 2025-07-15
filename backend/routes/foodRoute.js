import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodContoller.js'
import multer from "multer"

const foodRouter = express.Router();

//to save image in upload folder image storage engine with the help of multer


const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`) //filename will become unique
    }

})

const upload = multer({storage:storage})

//creating end points
foodRouter.post("/add", upload.single("image"),addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood);




export default foodRouter;