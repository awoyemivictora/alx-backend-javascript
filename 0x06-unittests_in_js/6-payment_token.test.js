const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
    it('should return a successful response when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                // Verify that the response contains the expected data
                expect(response).to.have.property('data').that.equals('Successful response from the API');
                done(); // Call done to signal that the test is complete
            })
            .catch((err) => done(err)); // If there is an error, pass it to done
    });
});
