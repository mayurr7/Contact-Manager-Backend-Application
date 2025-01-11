const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
        name: {
            type: String,
            require: [true, "Please provide a name"]
        },
        email: {
            type: String,
            require: [true, "Please provide an Email"],
            unique: true,
            match: [/.+\@.+\..+/, 'Please enter a valid email address']
        },
        password: {
            type: String,
            require: [true, "Password is require"],
            minlength: [6, "Password is at least 6 char required"]
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
        
},
    {
        timeStamp: true
    }
);

module.exports = mongoose.model('user', userSchema);