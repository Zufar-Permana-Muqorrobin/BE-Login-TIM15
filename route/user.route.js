const express = require("express")
const userRoutes = express.Router()
const { prisma } = require("../config/prisma")

//get all message
userRoutes.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).send(users)
});

//create new message
userRoutes.post("/", async (req, res) => {
    const { name, email, password } = req.body
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password : password,
        },
    });
    res.status(201).json({
        message: "user created successfully",
        data: newUser
    });
});

module.exports = { userRoutes}