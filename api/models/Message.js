const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    name : { 
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
    },
    yourMessage: {
        type: String
    }
})

module.exports = mongoose.model('Message', MessageSchema);