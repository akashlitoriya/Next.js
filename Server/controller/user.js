const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.signup = async(req, res) => {
    try{
        const {email, password, confirmPassword, name} = req.body;
        if(!email || !password || !confirmPassword || !name){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
            
        }
        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password and confirm password must be same"
            })
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })
        user.password = undefined;
        return res.status(200).json({
            success:true,
            message:"User created successfully",
            data:user
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Failed to login",
            error: err.message
        })
    }
}

exports.login = async(req, res) => {
    try{
        const{email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User does not exists"
            })
            
        }
        if(await bcrypt.compare(password, user.password)){
            const option = {
                expiresIn:'2d',
            }
            const payload = {
                email: user.email,
                id: user._id
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, option);
            const newUser = user.toObject();
            newUser.token = token;
            newUser.password = undefined;
            return res.status(200).json({
                success:true,
                message:"User logged in successfully",
                data:newUser
            })
            
        }
        return res.status(400).json({
            success: false,
            message:"Incorrect Password"
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Failed to login",
            error: err.message
        })
    }
}