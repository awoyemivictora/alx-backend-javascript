const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return the sum of rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
            assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
            assert.strictEqual(calculateNumber('SUM', 1.5, 4.5), 7);
        });
    });

    describe('SUBTRACT', () => {
        it('should return the difference of rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
            assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 4.5), -3);
        });
    });

    describe('DIVIDE', () => {
        it('should return the division of rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
            assert.strictEqual(calculateNumber('DIVIDE', 4.5, 1.4), 5);
        });

        it('should return the "Error" when dividing by zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for an invalid operation type', () => {
            assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), /Invalid operation type/);
        });
    });
});
