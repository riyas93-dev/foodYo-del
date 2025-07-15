<<<<<<< HEAD
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// app config
const app = express();
const port = process.send.PORT || 4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
//1 for foodroute
app.use("/api/food", foodRouter)

//mounting the uploads folder at the images endpoint /images/filename
app.use("/images", express.static('uploads'))

//user login and register
app.use("/api/user", userRouter);

//user cart router
app.use("/api/cart",cartRouter);

//order router
app.use("/api/order",orderRouter);






app.get("/", (req, res) => {
    res.send("API working")
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

=======
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// app config
const app = express();
const port = process.send.PORT || 4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
//1 for foodroute
app.use("/api/food", foodRouter)

//mounting the uploads folder at the images endpoint /images/filename
app.use("/images", express.static('uploads'))

//user login and register
app.use("/api/user", userRouter);

//user cart router
app.use("/api/cart",cartRouter);

//order router
app.use("/api/order",orderRouter);






app.get("/", (req, res) => {
    res.send("API working")
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

>>>>>>> 39caaa86b56ca64e6c90373796ac7d0ba82ab08e
