const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    body:{
        type:String,
        required:true,
        trim:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
        required:true,
    },
})

module.exports = mongoose.model('Comment', commentSchema);