const User = require('../models/user.model');
const createError = require('http-errors');

// new user
module.exports.create = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        throw createError(409, 'Email already registered');
      } else {
        return new User(req.body).save();
      }
    })
    .then(user => {
      console.log('user created ----->', user);
      res.status(201).json(user);
    })
    .catch(next);

  // user
  //   .save()
  //   .then(user => {
  //     res.status(201).json(user);
  //     res.redirect('/login');
  //   })
  //   .catch(error => {
  //     if (error instanceof mongoose.Error.ValidationError) {
  //       res.render('users/new', { user, error: error.errors })
  //     }
  //   });
};
