const express = require("express");
const routes = express.Router();

const UserController = require("../src/controller/UserController");

routes.post("/users", UserController.create);
routes.get("/users", UserController.index);

module.exports = routes;