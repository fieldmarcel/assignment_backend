import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET;
console.log("SECRET_KEY:", SECRET_KEY);

const login= async(req, res) => {
    const { username, password } = req.body;
    console.log("Login attempt with username:", username);

    if(username === "username" && password === "password"){
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        console.log("Login successful, token generated:", token);
        res.status(200).json({ message: "Login successful", token });
    }   
    else{
        console.log("Login failed, invalid credentials");
        res.status(401).json({ message: "Invalid credentials" });
    }
}
export default login;