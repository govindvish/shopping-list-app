const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

require('dotenv').config();

const app = express();

// Body parser middleware
app.use(express.json());

// Connect to MongoDB
// const uri = process.env.MONGO_URI;
const uri = config.get('MONGO_URI');
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully...");
});

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Run Sever
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

