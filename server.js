const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();


const port = process.env.PORT || 5000;

//Middleware for accept the body from client 
app.use(express.json());


//MIDDLEWARE USED
app.use("/api/contact", require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
    
})
