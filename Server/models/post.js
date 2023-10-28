const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    body:{
        type:String,
        required:true,
        trim:true,
    },
    attachment:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }],
    
})

module.exports = mongoose.model("Post", postSchema);