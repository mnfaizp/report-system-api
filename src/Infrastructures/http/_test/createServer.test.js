const request = require('supertest');
const pool = require('../../database/postgres/pool');
const UserTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const createServer = require('../../../app');

describe('HTTP server', () => {
  afterAll(async () => {
    await pool.end();
  });

  afterEach(async () => {
    await UserTableTestHelper.cleanTable();
  });

  describe('when POST /users', () => {
    it('should response 201 or persisted user', async () => {
      // Arrange
      const payload = {
        password: 'user_password',
        username: 'user',
        fullname: 'User',
      };
      const server = createServer;

      // Action
      const response = await request(server)
        .post('/api/users/')
        .send(payload);

      // Assert
      expect(response.statusCode).toEqual(201);
      expect(response.status).toEqual('success');
    });
  });
});
