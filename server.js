// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/your_database_name';

// Connect to MongoDB without useCreateIndex
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
