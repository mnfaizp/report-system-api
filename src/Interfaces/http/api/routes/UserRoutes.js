const express = require('express');

const router = express.Router();

const UserRoutes = (container) => {
  router.post('/', container.resolve('registerUser').postUserHandler);
};

module.exports = UserRoutes;
