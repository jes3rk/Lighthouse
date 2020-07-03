import { app } from '../src/App';
import request from 'supertest';

describe('Testing App', () => {
    test("Calling Index should return 200", done => {
        request(app).get('/').then(response => {
            expect(response.status).toBe(200);
            done();
        })
    })
})