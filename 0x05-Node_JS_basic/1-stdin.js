// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input from stdin
process.stdin.on('data', (data) => {
    const name = data.toString().trim(); // Get the input and remove any extra whitespace
    console.log(`Your name is: ${name}`);
    process.exit(); // Exit the program after processing the input
});


// Handle program exit
process.on('exit', () => {
    console.log('This important software is now closing');
});
