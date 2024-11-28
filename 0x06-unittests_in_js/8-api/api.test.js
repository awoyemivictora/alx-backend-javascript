const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const { expect } = require('chai');

chai.use(chaiHttp);

describe('Index page', () => {
    it('should return correct status code and result', (done) => {
        chai
            .request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});
