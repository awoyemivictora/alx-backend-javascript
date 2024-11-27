const express = require('express');

// Create an instance of Express
const app = express();

// Define the root route
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});


// New endpoint: GET /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
    const { id } = req.params;
    res.send(`Payment methods for cart ${id}`);
});

// Fallback for invalid cart IDs
app.get('/cart/*', (req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
const PORT = 7865;
const server = app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});


module.exports = server; // Export the server for testing
