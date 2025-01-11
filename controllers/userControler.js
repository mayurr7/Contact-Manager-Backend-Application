const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const User = require('../models/userSchema');

//@ Sign Up the User


exports.signnupUser = asyncHandler(async(req,res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        res.status(400).json({
            message: "All fields are required..!"
        })
    }

    const userAvailable =await User.findOne({ email });

    if(userAvailable){
        res.status(400).json({
            message: "User is alredy register..!"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
    res.status(201).json({
        message: "user sign up succsfully",
        user
    })
});


//@Login User

exports.loginUser = asyncHandler(async(req,res,next) => {
    
});


//@check the current user

exports.checkUser = asyncHandler(async(req,res,next) => {

});