const User = require('../models/user.model');

// new user
module.exports.register = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then(user => res.status(201).json(user))
    .catch(next);
};
