const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: "../config/.env"})

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connection establlished");
}).catch((err) => {
    console.log("Unable to connect database", err);
})

