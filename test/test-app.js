
const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require ('../app');

const expect = chai. expect

chai.use(chaiHttp);

describe('Dinner Designer', function()
{

    before(function()
    {
        return runServer();
    });

    after(function()
    {
        return closeServer();
    });

    //test strategy

    it('should should return html for the root', function()
    {
        return chai.request(app)
        .get('/')
        .then(function(res)
        {
            expect(res).to.have.status(200);
            expect(res).to.be.html;
        });
    });
});