const express = require("express");
const routes = express.Router();

const UserController = require("../src/controller/UserController");
const LoginController = require("./controller/LoginController");

routes.post("/users", UserController.create);
routes.get("/users", UserController.index);

routes.post('/login', LoginController.login);

module.exports = routes;