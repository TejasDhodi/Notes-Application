const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config({path: "./config/.env"});

require("./Database/database");
const PORT = process.env.PORT || 3000 

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require("./Routes/route"));


app.listen(PORT, () => {
    console.log("Jay Shree Ram");
})