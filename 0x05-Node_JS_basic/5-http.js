const http = require('http');
const fs = require('fs');
const path = require('path');


// Define the function to read the database
const countStudents = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error("Cannot load the database"));
                return;
            }

            const lines = data.split('\n').filter((line) => line.trim() !== '');
            const students = lines.slice(1); // Exclude header
            const fields = {};

            students.forEach((student) => {
                const [firstName, , , field] = student.split(',');
                if (field) {
                    if (!fields[field]) {
                        fields[field] = [];
                    }
                    fields[field].push(firstName);
                }
            });

            const totalStudents = students.length;
            const result = [`Number of students: ${totalStudents}`];

            for (const [field, names] of Object.entries(fields)) {
                result.push(
                    `Number of students in ${field}: ${names.length}. List: ${names.join(
                        ', '
                    )}`
                );
            }

            resolve(result.join('\n'));
        });
    });
};


// Create the HTTP server
const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        const dbPath = process.argv[2]; // Path to the database file
        if (!dbPath) {
            res.end("This is the list of our students\nCannot load the database");
            return;
        }

        try {
            const studentData = await countStudents(dbPath);
            res.end(`This is the list of our students\n${studentData}`);
        } catch (error) {
            res.end(`This is the list of our students\n${error.message}`);
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});


// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


module.exports = app;
