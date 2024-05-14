// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// Endpoint POST /add_events
router.post('/add_events', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).send('Event added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Endpoint GET /get_events
router.get('/get_events', async (req, res) => {
    const limit = parseInt(req.query.limit) || 10; // Default to 10 events if limit is not specified
    try {
        const events = await Event.find().sort({ 'event.timestamp': -1 }).limit(limit);
        res.json(events);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
