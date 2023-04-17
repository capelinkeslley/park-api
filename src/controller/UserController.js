const { __ } = require("i18n");
const userValidator = require('../validators/UserValidators');
const User = require("../../models/User");
const UserError = require("../error/UserError");


module.exports = {
  async create(req, res){
    const { name, email, document, phone } = req.body;
    const { error } = userValidator.validate(req.body)

    if(error){
      err = []
      Object.values(error.details).forEach((e) => {
        err.push({ "path": e.path[0], "type": e.type.split('.')[1] })
      });

      return res.json(UserError.handlerError(err));
    }else{
      try {
        const user = await User.create({name, email, document, phone});

        return res.json(user);
      }catch (err){
        return res.json(UserError.handlerError(err.errors));
      }
    }
  },

  async index(req, res){
    const users = await User.findAll();

    return res.json(users);
  }
};