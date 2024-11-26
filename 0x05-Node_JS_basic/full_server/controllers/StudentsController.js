const readDatabase = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        const databasePath = process.argv[2];

        try {
            const fields = await readDatabase(databasePath);
            const response = ['This is the list of our students'];

            Object.keys(fields)
                .sort()
                .forEach((field) => {
                    response.push(
                        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
                    );
                });

                res.status(200).send(response.join('\n'));
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const databasePath = process.argv[2];
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const fields = await readDatabase(databasePath);
            const students = fields[major] || [];
            res.status(200).send(`List: ${students.join(', ')}`);
        } catch (error) {
            res.status(500).send("Cannot load the database");
        }
    }
}


module.exports = StudentsController;
