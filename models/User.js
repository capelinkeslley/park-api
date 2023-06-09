const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define("users", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  document: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  password: DataTypes.STRING,
},{
  timestamps: true,
});

module.exports = User;