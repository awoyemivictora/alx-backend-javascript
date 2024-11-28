function calculateNumber(type, a, b) {
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    }
    throw new Error('Unsupported operation type');
}

module.exports = {
    calculateNumber,
};
