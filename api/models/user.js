const Joi = require('joi');

const userSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainAtoms: 2 }).required(),
  password: Joi.string().regex(^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$).required(),
});

module.exports = userSchema;
