const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const server = require("./api");

chai.use(chaiHttp);

describe("API tests", () => {
  describe("GET /available_payments", () => {
    it("should return the correct payment methods object", (done) => {
      chai
        .request(server)
        .get("/available_payments")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          done();
        });
    });
  });

  describe("POST /login", () => {
    it("should return a welcome message with a valid userName", (done) => {
      chai
        .request(server)
        .post("/login")
        .send({ userName: "Betty" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal("Welcome Betty");
          done();
        });
    });

    it("should return a 400 error if userName is missing", (done) => {
      chai
        .request(server)
        .post("/login")
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.text).equal("Missing userName");
          done();
        });
    });
  });
});
