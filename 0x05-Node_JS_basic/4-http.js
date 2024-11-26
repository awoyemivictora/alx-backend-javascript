const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
    res.statusCode = 200; // Set HTTP status code
    res.setHeader('Content-Type', 'text/plain'); // Set Content-Type header
    res.end("Hello Holberton School!"); // Send the response body
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
