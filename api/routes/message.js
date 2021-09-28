const router = require('express').Router();
const Message = require('../models/Message');

// Create post message
router.post('/', async (req, res) => {
    try {
        
        const newMessage = new Message({
            name: req.body.name, 
            email: req.body.email,
            phoneNumber: req.body.phone,
            yourMessage: req.body.yourMessage
        })

        const message = await newMessage.save();
        res.status(200).json(message);
    }catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;