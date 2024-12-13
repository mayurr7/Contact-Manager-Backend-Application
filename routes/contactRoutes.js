const express = require("express");
const router  = express.Router();

//GET REQ
router.route("/").get((req,res)=> {
    res.send("get all contacts");
});

//CREATE REQ
router.route("/").post((req,res)=> {
    res.send("create all contacts");
});


//UPDATE REQ
router.route("/:id").put((req,res)=> {
    res.send(`update all contacts ${req.params.id}`);
});

//DELETE REQ
router.route("/:id").delete((req,res)=> {
    res.send(`delete all contacts ${req.params.id}`);
});

module.exports = router;