const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js')

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return the sum of rounded numbers', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
            expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
            expect(calculateNumber('SUM', 1.5, 4.5)).to.equal(7);
        });
    });

    describe('SUBTRACT', () => {
        it('should return the difference of rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
            expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
            expect(calculateNumber('SUBTRACT', 1.5, 4.5)).to.equal(-3);
        });
    });

    describe('DIVIDE', () => {
        it('should return the division of rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
            expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.equal(5);
        });

        it('should return the "Error" when dividing by zero', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
            expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for an invalid operation type', () => {
            expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
        });
    });
});
