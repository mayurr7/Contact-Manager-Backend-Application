const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const contactRoute = require("./routes/contactRoutes");
const userRoute = require("./routes/userRoutes");

connectDb();
const app = express();


const port = process.env.PORT || 5000;

//Middleware for accept the body from client 
app.use(express.json());


//MIDDLEWARE USED
app.use("/api/contact", contactRoute);
app.use("/api/user", userRoute);


app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
    
})
