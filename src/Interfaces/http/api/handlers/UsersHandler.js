class UsersHandler {
  constructor(opts) {
    this._container = opts;
  }

  async postUserHandler(req, res) {
    const { addUserUseCase } = this._container;
    const addedUser = await addUserUseCase.execute(req.body);

    res.send(addedUser);
  }
}

module.exports = UsersHandler;
