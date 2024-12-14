const express = require("express");
const router  = express.Router();
const contactControllers = require('../controllers/contactControllers');

//GET REQ || CREATE REQ
router.route("/")
.get(contactControllers.getContact)
.post(contactControllers.createContact);


//UPDATE REQ || DELETE REQ
router.route("/:id")
.put(contactControllers.updateContact)
.delete(contactControllers.deleteContact);



module.exports = router;