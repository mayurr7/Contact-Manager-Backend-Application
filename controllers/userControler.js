const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const User = require('../models/userSchema');
const jwt =  require('jsonwebtoken');

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
        id: user._id,
        name: user.name,
        email: user.email
    })
});


//@Login User

exports.loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    console.log("Request received:", { email, password });

    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required..!");
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found in DB");
    }

    if (user) {
       
        const isPassValid = await bcrypt.compare(password, user.password);

        if (isPassValid) {
            const accessToken = jwt.sign(
                {
                    user: {
                        name: user.name,
                        email: user.email,
                        id: user.id,
                    },
                },
                process.env.ACCESS_TOKEN_SECRATE,
                { expiresIn: "10m" }
            );
            return res.status(200).json({ accessToken });
        } else {
            res.status(401);
            throw new Error("Email or Password invalid");
        }
    }
});



//@check the current user

exports.checkUser = asyncHandler(async(req,res,next) => {

});