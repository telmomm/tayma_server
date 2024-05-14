// models/event.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    hook_event: String,
    device: {
        name: String,
        serial_number: String
    },
    event: {
        name: String,
        timestamp: Date,
        meta: {
            cached_address: Boolean,
            address_country: String,
            address_state: String,
            cached_address_lat: Number,
            address_city: String,
            cached_address_lon: Number
        },
        click_type: String
    },
    last_location: {
        timestamp: Date,
        latitude: Number,
        longitude: Number,
        formatted_address: String
    }
});

module.exports = mongoose.model('Event', EventSchema);
