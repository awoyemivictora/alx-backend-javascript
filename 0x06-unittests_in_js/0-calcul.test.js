const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', () => {
    it('should return the sum of two rounded numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should handle negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.4, -3.7), -5); 
        assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
    });

    it('should handle one number as zero', () => {
        assert.strictEqual(calculateNumber(0, 3.7), 4);
        assert.strictEqual(calculateNumber(1.5, 0), 2);
    });

    it('should handle both numbers as zero', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
});
