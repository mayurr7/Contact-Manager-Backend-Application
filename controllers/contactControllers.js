const asyncHandler = require("express-async-handler");
const errorHandler = require("../middleware/errorHandler");
const Contact = require("../models/contactSchema");
const { default: mongoose } = require("mongoose");

//GET ALL CONTACTS
exports.getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });

  res.status(200).json(contacts);
});

//GET  ONE CONTACT
exports.getOneContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contacts);
});

exports.createContact = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Check if the required fields are present
    if (!name || !email || !phone) {
      console.log("Missing fields:", { name, email, phone });
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const contacts = await Contact.create({
      name,
      email,
      phone,
      message,
      user_id: req.user.id,
    });

    res.status(201).json(contacts);
  } catch (error) {
    console.error("Error during contact creation:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Update CONTCT
exports.updateContact = asyncHandler(async (req, res) => {
 
  try {
   
    const contacts = await Contact.findById(req.params.id);

    if (!contacts) {
      res.status(404);
      throw new Error("Contact not found");
    }

    

    if (contacts.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error("User don't have permition to do this task");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "contact updated succesfully",
      updatedContact,
    });
    if (!updatedContact) {
      res.status(404);
      throw new Error("Contact not updated");
    }
  } catch (error) {
    res.status(404).json({
      message: "Some error happend"    
    });
      throw Error;
      
      
  }
});

exports.deleteContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findByIdAndDelete(req.params.id);
 try {
  if (!contacts) {
    res.status(404);
    throw new Error("Contact Not found in Database");
  }

  if (Contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permition to do this task");
  }


  res.status(200).json({
    status: "sucess",
    message: "contact deleted successfully",
    contacts,
  });
 } catch (error) {
    res.status(404).json({
      message: "Some error happend"    
    });
    throw Error;
 }
  
});
