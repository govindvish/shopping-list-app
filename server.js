const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

// Body parser middleware
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully...");
});

// Use Routes
const items = require('./routes/api/items');
app.use('/api/items', items);

// Run Sever
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

