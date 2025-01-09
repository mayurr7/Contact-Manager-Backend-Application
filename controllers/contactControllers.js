const asyncHandler = require("express-async-handler");
const errorHandler = require("../middleware/errorHandler");
const Contact = require("../models/contactSchema");

//GET ALL CONTACTS
exports.getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});


//GET  ONE CONTACT 
exports.getOneContact = asyncHandler(async(req,res) => {
    try {
        const contacts =await Contact.findByID(req.params.id);

        res.status(200).json(contacts);
           
        

    } catch (error) {
        res.status(404).json({
            status: "NOT FOUND",
        
        })
    }
})

exports.createContact = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Check if the required fields are present
    if (!name || !email || !phone) {
      console.log("Missing fields:", { name, email, phone });
      res.status(400).json({ message: "All fields are required" });
      return
    }

   
    const contacts = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    
    res.status(201).json(contacts);
  } catch (error) {
    console.error("Error during contact creation:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

exports.updateContact = asyncHandler(async (req, res) => {
  res.send("update all contacts");
});

exports.deleteContact = asyncHandler(async (req, res) => {
  res.send("delete all contacts");
});
