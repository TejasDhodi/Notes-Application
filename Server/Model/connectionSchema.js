const mongoose = require('mongoose');

const connectionSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: Number
    }
},
{timestamps: true});

const User = mongoose.model("User", connectionSchema);
module.exports =  User;