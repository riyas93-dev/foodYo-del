import jwt from "jsonwebtoken";

//this middleware takes the token and converts it into userId and with this userId we add/remove/get the data in the cart for 
//a specific user

const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:"Not authorized try login again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }
}

export default authMiddleware;