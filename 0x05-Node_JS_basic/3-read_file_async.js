const fs = require('fs');


function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error("Cannot load the database"));
                return;
            }

            try {
                const lines = data.split("\n").filter((line) => line.trim() !== ''); // Filter out empty lines
                if (lines.length <= 1) throw new Error("No valid data in the file");

                const students = lines.slice(1).map((line) => line.split(',')); // Skip the header and process rows
                console.log(`Number of students: ${students.length}`);

                const fieldGroups = {};
                for (const student of students) {
                    const [firstName, , , field] = student; // Extract relevant fields
                    if (!fieldGroups[field]) {
                        fieldGroups[field] = [];
                    }
                    fieldGroups[field].push(firstName);
                }

                for (const [field, names] of Object.entries(fieldGroups)) {
                    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
                }

                resolve();
            } catch (error) {
                reject(error);
            }
        });
    });
}


module.exports = countStudents;
