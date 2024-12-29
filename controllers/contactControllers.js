const errorHandler = require("../middleware/errorHandler");

exports.getContact = (req,res)=> {
    res.send("get all contacts");
};

exports.createContact = (req,res)=> {
   
    res.send("create all contacts");
    if(!name){
        throw errorHandler;
        
    }
};

exports.updateContact = (req,res)=> {
    res.send("update all contacts");
};


exports.deleteContact = (req,res)=> {
    res.send("delete all contacts");
};

