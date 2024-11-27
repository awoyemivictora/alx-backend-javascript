function calculateNumber(a, b) {
    console.log(`Input: a=${a}, b=${b}`);
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    console.log(`Rounded: a=${roundedA}, b=${roundedB}`);
    return roundedA + roundedB;
}


module.exports = calculateNumber;
