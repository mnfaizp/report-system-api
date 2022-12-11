const RegisteredUser = require('../RegisteredUser');

describe('RegisteredUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'user_test',
      id: 'user_id',
    };

    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when property data type is not match', () => {
    // Arrange
    const payload = {
      username: 'user_test',
      id: 'user_id',
      fullname: 123,
    };

    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when username length more than 50 character', () => {
    // Arrange
    const payload = {
      username: '123456789098765432123456789094321234567890976543212345678198319283928392839',
      id: 'user_id',
      fullname: 'user fullname',
    };

    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.USERNAME_LIMIT_CHAR');
  });

  it('should throw error when username contain restricted character', () => {
    // Arrange
    const payload = {
      username: 'user_test!',
      id: 'user_id',
      fullname: 'user fullname',
    };

    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
  });

  it('should create registerUser object correctly', () => {
    // Arrange
    const payload = {
      id: 'user-123',
      username: 'user_test',
      fullname: 'user fullname',
    };

    // Action
    const { id, username, fullname } = new RegisteredUser(payload);

    // Assert
    expect(id).toEqual(payload.id);
    expect(username).toEqual(payload.username);
    expect(fullname).toEqual(payload.fullname);
  });
});
