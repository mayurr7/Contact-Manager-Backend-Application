const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async(req,res,next) => {
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;    if(authHeader && authHeader.startsWith("Bearer")) {

        token = authHeader.split(" ")[1];
        if(!token){
            res.status(401);
            throw new Error("User is not authorized or token is missing");
            
        }
        
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRATE);
            req.user = decoded.user;
            next(); // Proceed to the next middleware
        } catch (error) {
            res.status(401);
            throw new Error("User is not authorized or token is invalid");
        }       
    }
    else {
        res.status(401);
        throw new Error("Authorization header is missing or malformed");
    }
});

module.exports = validateToken;