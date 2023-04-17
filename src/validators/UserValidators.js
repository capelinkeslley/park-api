const Joi = require('joi');

const userValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  document: Joi.string().required(),
  phone: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = userValidator