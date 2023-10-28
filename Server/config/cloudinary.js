const cloudinary = require('cloudinary').v2;

exports.connectCloudinary =() => {
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
            api_key:process.env.CLOUDINARY_API_KEY,
            api_secret:process.env.CLOUDINARY_API_SECRET
        })
        console.log("Connected to cloudinary");
    }catch(err){
        console.log("Failed to connect to cloudinary", err);
        process.exit(1);
    }
}