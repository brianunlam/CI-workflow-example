const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('It should response the GET method pr', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
  test('Prueba de PR mediante método GIT', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
  });
});
