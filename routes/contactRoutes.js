const express = require("express");
const router  = express.Router();
const contactControllers = require('../controllers/contactControllers');
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);


//GET REQ || CREATE REQ
router.route("/")
.get(contactControllers.getContact)
.post(contactControllers.createContact);


//UPDATE REQ || DELETE REQ
router.route("/:id")
.get(contactControllers.getOneContact)
.put(contactControllers.updateContact)
.delete(contactControllers.deleteContact);



module.exports = router;