const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateNumberStub;

  // Before each test, stub calculateNumber and spy on console.log
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log'); // Spy on console.logg
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10); // Stub calculateNumber to return 10
  });

  // After each test, restore the spy and stub
  afterEach(() => {
    consoleSpy.restore();
    calculateNumberStub.restore();
  });

  it('should call calculateNumber with correct arguments when sendPaymentRequestToApi is called', () => {
    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(100, 20);

    // Check if calculateNumber was called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total when sendPaymentRequestToApi is called', () => {
    // Call the function with test arguments
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    // Restore console.log
    consoleSpy.restore();
  });
});
