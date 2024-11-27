const express = require('express');
const app = express();
const port = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

// GET /available_payments
app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false 
        }
    });
});


// POST /login
app.post('/login', (req, res) => {
    const { userName } = req.body;
    if (!userName) {
        return res.status(400).send('Missing userName');
    }
    res.send(`Welcome ${userName}`);
});

// Start the server
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app; // Export the app for testing
