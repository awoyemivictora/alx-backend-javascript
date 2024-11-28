const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  // Set up the spy before each test
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log'); // Spy on console.logg
  });

  // After each test, restore the spy and stub
  afterEach(() => {
    consoleSpy.restore();
  });

  it('should call calculateNumber with correct arguments when sendPaymentRequestToApi is called', () => {
    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(100, 20);

    // Verify the console logs the expected string
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    // Verify that the console was called only once
    expect(consoleSpy.callCount).to.equal(1);
  });

  it('should log the correct total when sendPaymentRequestToApi(10,, 10) is called', () => {
    // Call the function with test arguments
    sendPaymentRequestToApi(10, 10);

    // Verify that console logs the expected string
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;

    // Verify that the console was called only once
    expect(consoleSpy.callCount).to.equal(1);
  });
});
