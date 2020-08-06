/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
require('../config/db.config');
const User = require('../models/user.model');

const users = [
  {
    "name": "Elizabeth",
    "lastname": "Morillo",
    "username": "elizabethLomb",
    "email": "hola@hola.com",
    "password": "123456789"
  }
];

User.create(users)
  .then(() => {
    console.info('Seeds success:', users);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Seeds error:', error);
    mongoose.connection.close();
  });
