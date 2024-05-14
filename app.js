// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = 'mongodb+srv://telmom95:nippAf-qymha3-gonnit@taymaserver.mzchf5l.mongodb.net/?retryWrites=true&w=majority&appName=TaymaServer';

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', eventRoutes);

// MongoDB connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});