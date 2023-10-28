const mongoose = require('mongoose');

exports.connectToDB = () => {
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Failed to connect to database", err);
    })
}