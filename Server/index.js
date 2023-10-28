const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const {connectCloudinary} = require('./config/cloudinary');
const database = require('./config/database');
const fileupload = require('express-fileupload');

const auth = require('./routes/authRoutes');
const post = require('./routes/postRoutes');

dotenv.config();
app.use(express.json());
connectCloudinary();
database.connectToDB();
const port = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'https://next-js-tau-nine.vercel.app/',
        credentials: true,
    })
)
app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: '/temp'
    })
)

app.use('/api/auth', auth);
app.use('/api/post', post);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

app.get('/', ()=>{
    console.log("Hello World")
})