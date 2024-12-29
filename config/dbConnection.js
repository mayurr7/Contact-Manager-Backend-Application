const mongoose = require('mongoose');

const connectDb = async () => {
   try {
    const connect = await mongoose.connect(process.env.LOCAL_CON_STR);
    console.log("DB connected", connect.connection.host);
    
   } catch (err) {
        console.error(err);
        process.exit(1);
        
   }
};

module.exports = connectDb;