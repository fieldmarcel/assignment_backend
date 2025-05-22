
import jwt from 'jsonwebtoken';
export const authenticateToken =((req,res,next)=>{

const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1];

if(!token){
    console.log("No token provided");
    return res.sendStatus(401);
}
const SECRET_KEY = process.env.JWT_SECRET;
if(!SECRET_KEY){
    console.log("Secret key not found");
    return res.sendStatus(500);
}
jwt.verify(token, SECRET_KEY, (err , user)=>{
    if(err){
        console.log("Token verification failed");
        return res.sendStatus(403);
    }
    req.user = user;
    next();
})
})