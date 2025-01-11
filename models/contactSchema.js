const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        maxlength: [500, 'Message cannot exceed 500 characters'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
    {
        timestamp : true
    }
);

module.exports = mongoose.model("Contact", contactSchema);