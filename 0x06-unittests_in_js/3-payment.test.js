import { expect } from 'chai';
import sinon from 'sinon';
import { sendPaymentRequestToApi } from './3-payment.js';
import Utils from './utils.js';

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Spy on the calculateNumber function
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Ensure that spy is restored after each test to avoid side effects
    sinon.restore();
  });

  it('should call calculateNumber with correct arguments when sendPaymentRequestToApi is called', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(totalAmount, totalShipping);

    // Check if calculateNumber was called with the correct arguments
    expect(spy.calledOnceWithExactly('SUM', totalAmount, totalShipping)).to.be.true;
  });

  it('should log the correct total when sendPaymentRequestToApi is called', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    // Mock console.log
    const consoleSpy = sinon.spy(console, 'log');

    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(totalAmount, totalShipping);

    // Check if console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    // Restore console.log
    consoleSpy.restore();
  });
});
