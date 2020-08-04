const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  user: {
    type: String,
    id: String,
    required: true,
  },
  message: {
    type: 'gif',
    id: String,
    slug: String,
    url: String,
    required: true,
  },
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
