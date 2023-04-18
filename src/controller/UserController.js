const { __ } = require("i18n");
const userValidator = require('../validators/UserValidators');
const User = require("../../models/User");
const UserError = require("../error/UserError");
const bcrypt = require('bcryptjs');
const AuthenticateUser = require('../middleware/AuthenticateUser');

module.exports = {
  async create(AuthenticateUser, req, res){
    const { name, email, document, phone, password } = req.body;
    const { error } = userValidator.validate(req.body)

    if(error){
      err = []
      Object.values(error.details).forEach((e) => {
        err.push({ "path": e.path[0], "type": e.type.split('.')[1] })
      });

      return res.json(UserError.handlerError(err));
    }else{
      bcrypt.genSalt(6, (err, salt) =>{
        if(err){
          return res.status(500).json({ message: err.message });
        }

        bcrypt.hash(password, salt, (err, password) => {
          if(err){
            return res.status(500).json({ message: err.message });
          }

          User.create({name, email, document, phone, password}).then(user => {
            return res.json(user);
          }).catch(err => {

            return res.json({message: err.message});
          });
        });
      });
    }
  },

  async index(req, res){
    const users = await User.findAll();

    return res.json(users);
  }
};