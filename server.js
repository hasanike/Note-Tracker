const express = require('express');
const fs = require('fs');


// Importing Express.js module
const express = require('express');

// Creating an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
const port = 3000; // Choose a port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});