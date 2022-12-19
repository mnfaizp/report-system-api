const RegisterUser = require('../RegisterUser');

describe('RegisterUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'user_test',
      password: 'user_password',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when property data type is not match', () => {
    // Arrange
    const payload = {
      username: 'user_test',
      password: 'user_password',
      fullname: 123,
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when username length more than 50 character', () => {
    // Arrange
    const payload = {
      username: '123456789098765432123456789094321234567890976543212345678198319283928392839',
      password: 'user_password',
      fullname: 'user fullname',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
  });

  it('should throw error when username contain restricted character', () => {
    // Arrange
    const payload = {
      username: 'user_test!',
      password: 'user_password',
      fullname: 'user fullname',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
  });

  it('should create registerUser object correctly', () => {
    // Arrange
    const payload = {
      password: 'user-123',
      username: 'user_test',
      fullname: 'user fullname',
    };

    // Action
    const { password, username, fullname } = new RegisterUser(payload);

    // Assert
    expect(password).toEqual(payload.password);
    expect(username).toEqual(payload.username);
    expect(fullname).toEqual(payload.fullname);
  });
});
