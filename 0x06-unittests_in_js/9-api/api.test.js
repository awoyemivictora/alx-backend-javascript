const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api'); 
const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
    after(() => {
        server.close(); // Close the server after tests
    });

    it('should return correct status code and result', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});


describe('Cart page', () => {
    it('should return status 200 and correct message when :id is a number', (done) => {
        chai.request(server)
            .get('/cart/12')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Payment methods for cart 12');
                done();
            });
    });

    it('should retutrn status 404 when :id is not a number', (done) => {
        chai.request(server)
            .get('/cart/hello')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });

    it('should return status 404 for an invalid route', (done) => {
        chai.request(server)
            .get('/invalid-route')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});
