const fs = require("fs");


function countStudents(path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(path, "utf8");
        const lines = data.split("\n").filter((line) => line.trim() != ""); // Filter out empty lines
        if (lines.length <= 1) throw new Error("No valid data in the file");

        const headers = lines[0].split(","); // First line is the header
        const students = lines.slice(1).map((line) => line.split(",")); // Rest are student records

        console.log(`Number of students: ${students.length}`);

        // Group students by field
        const fieldGroups = {};
        for (const student of students) {
            const [firstName, , , field] = student; // Extract relevant fields
            if (!fieldGroups[field]) {
                fieldGroups[field] = [];
            }
            fieldGroups[field].push(firstName);
        }

        // Log the grouped data
        for (const [field, names] of Object.entries(fieldGroups)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error("Cannot load the database");
    }
}


module.exports = countStudents;