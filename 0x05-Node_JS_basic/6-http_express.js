const express = require('express');

const app = express();

// Define the root route
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Start the server on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
