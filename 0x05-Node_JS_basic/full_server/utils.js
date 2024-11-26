const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n').filter(Boolean);
            const students = lines.slice(1).map((line) => line.split(','));
            const fields = {};

            students.forEach(([firstname, , , field]) => {
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            });

            resolve(fields);
        });
    });
}


module.exports = readDatabase;
