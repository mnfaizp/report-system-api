const ClientError = require('../ClientError');

describe('ClientError', () => {
  it('should throw error when directly user it', () => {
    expect(() => new ClientError('')).toThrowError('cannot instantiate abstract class');
  });
});
