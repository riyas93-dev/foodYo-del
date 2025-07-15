<<<<<<< HEAD
import express from "express"
import authMiddleware from "../middleware/auth.js"
import { listOrders, placeOrder, updateStatus, verifyOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

//endpoints
orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);




=======
import express from "express"
import authMiddleware from "../middleware/auth.js"
import { listOrders, placeOrder, updateStatus, verifyOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

//endpoints
orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);




>>>>>>> 39caaa86b56ca64e6c90373796ac7d0ba82ab08e
export default orderRouter;