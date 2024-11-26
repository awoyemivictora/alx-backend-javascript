const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();

// Function to parse the CSV file and count students
const countStudents = (database) => new Promise((resolve, reject) => {
    fs.readFile(database, 'utf-8', (err, data) => {
        if (err) {
            reject(new Error('Cannot load the database'));
            return;
        }

        const lines = data.trim().split('\m').filter((line) => line);
        const headers = lines.shift(); // Remove headers
        const students = lines.map((line) => line.split(','));

        const stats = students.reduce((acc, student) => {
            const field = student[3];
            const firstName = student[0];
            if (!acc[field]) {
                acc[field] = [];
            }
            acc[field].push(firstName);
            return acc;
        }, {});

        const results = [];
        results.push(`Number of students: ${students.length}`);
        Object.keys(stats).forEach((field) => {
            results.push(
                `Number of students in ${field}: ${stats[field].length}. List:; ${stats[field].join(', ')}`
            );
        });

        resolve(results.join('\n'));
    });
});


// Root route
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});


// Students route
app.get(('/students', (req, res) => {
    const databasePath = process.argv[2]; // Get the database file path from command line arguments
    countStudents(databasePath)
        .then((message) => {
            res.send(`This is the list of our students\n${message}`);
        })
        .catch((err) => {
            res.status(500).send("Cannot load the database");
        });
}));


// Start thhe server on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


module.exports = app;
