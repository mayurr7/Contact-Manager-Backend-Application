const asyncHandler = require("express-async-handler");
const errorHandler = require("../middleware/errorHandler");

exports.getContact = asyncHandler(async(req,res)=> {
   await res.send("get all contacts");
});

exports.createContact = asyncHandler(async(req,res)=> {
   
    res.send("create all contacts");
    if(!name){
        throw errorHandler;
        
    }
});

exports.updateContact = asyncHandler(async(req,res)=> {
    res.send("update all contacts");
});


exports.deleteContact =asyncHandler(async(req,res)=> {
    res.send("delete all contacts");
});

