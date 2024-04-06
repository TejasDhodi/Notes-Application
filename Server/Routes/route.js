const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require("../Model/connectionSchema")

// POST Operations
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(422).json({ "error": "All fields are mandatory" })
    }

    try {
        const userData = await User.create({
            name: name,
            email: email,
            age: age
        })
        res.status(201).json({ "user added": userData })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})


// GET operations
router.get("/", async (req, res) => {

    try {
        const showData = await User.find();
        res.status(200).json({ "User Data": showData })

    } catch (error) {
        res.status(400).json("Unable to get data")
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const getSingleUser = await User.findById({ _id: id }); //id = req.params.id
        res.status(200).json({ "foundUser": getSingleUser })

    } catch (error) {
        res.status(400).json("Unable to get data")
    }
})


// DELETE Operations
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deleteSingleUser = await User.findByIdAndDelete({ _id: id });
        res.status(200).json({ "Deleted User": deleteSingleUser })

    } catch (error) {
        res.status(500).json("Unable to delete data")
    }
})


// UPDATE Operations
router.patch("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const updateUserData = await User.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json({ "Updated User": updateUserData });
    } catch (error) {
        res.status(500).json("Unable to update data");
    }

})

module.exports = router;