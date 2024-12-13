const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.get("/api/contact", (req,res)=> {
    res.send("get all contacts");
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
    
})
