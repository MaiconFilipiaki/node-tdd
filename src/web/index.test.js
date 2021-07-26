const server = require('./index');
const request = require('supertest');
const messages = require('./messages');

describe('Testing of controller index', () => {
    it('first router', async () => {
        const response = await request(server)
            .get('/');
        
        expect(response.status).toBe(200);
        expect(response.body.message).toBe(messages.testingUnit);
    });

    it('Check update', async () => {
        const response = await request(server)
            .get('/createAndUpdate?operation=UPDATE');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe(messages.update);
    });

    it('Check Register', async () => {
        const response = await request(server)
            .get('/createAndUpdate?operation=REGISTER');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe(messages.register);
    })

    it('Check Operation with Error', async () => {
        const response = await request(server)
            .get('/createAndUpdate?operation=ANYTHING');
        expect(response.status).toBe(400);
        expect(response.body.message).toBe(messages.operationNotAllowed);
    })
})