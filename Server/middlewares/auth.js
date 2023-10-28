const jwt = require('jsonwebtoken')
require('dotenv').config();
const User = require('../models/user');

exports.auth = async(req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token not found"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = decoded;
        next();
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Failed to login",
            error: err.message
        })
    }
}