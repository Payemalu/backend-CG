const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Create the server
const app = express();

// Connect to the DB
connectDB();
app.use(cors());

app.use(express.json());

app.use('/api/ductos', require('./routes/ducto'));

app.listen(5000, () => {
    console.log('The server is running perfectly!')
});