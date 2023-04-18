const express = require("express");
const routes = express.Router();
const jwt = require('jsonwebtoken')

const UserController = require("../src/controller/UserController");
const LoginController = require("./controller/LoginController");

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Missing authentication token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid authentication token' });
  }
};

routes.post("/users", UserController.create);
routes.get("/users", authenticateUser, UserController.index);

routes.post('/login', LoginController.login);

module.exports = routes;