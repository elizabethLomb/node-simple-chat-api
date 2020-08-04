const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.doLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw createError(400, 'missing credentials');
  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        throw createError(404, 'user not found');
      } else {
        return user.checkPassword(password).then(match => {
          if (!match) {
            throw createError(400, 'invalid password');
          } else {
            req.session.user = user;
            res.json(user);
          }
        });
      }
    })
    .catch(next);
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  res.status(204).json();
};
