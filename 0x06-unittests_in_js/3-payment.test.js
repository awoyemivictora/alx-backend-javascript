const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    // Restore any previously spied/stubbed methods
    sinon.restore();
  });

  it('should call calculateNumber with correct arguments when sendPaymentRequestToApi is called', () => {
    // Spy on the calculateNumber method in Utils
    const spy = sinon.spy(Utils, 'calculateNumber');

    const totalAmount = 100;
    const totalShipping = 20;

    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(totalAmount, totalShipping);

    // Assert that calculateNumber was called once with the correct arguments
    expect(spy.calledOnceWithExactly('SUM', totalAmount, totalShipping)).to.be.true;
  });

  it('should log the correct total when sendPaymentRequestToApi is called', () => {
    // Spy on console.log
    const consoleSpy = sinon.spy(console, 'log');

    const totalAmount = 100;
    const totalShipping = 20;

    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(totalAmount, totalShipping);

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    // Restore console.log spy
    consoleSpy.restore();
  });
});
