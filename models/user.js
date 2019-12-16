const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', UserSchema);

User.prototype.comparePassword = function(plainPass) {
  return bcrypt.compare(plainPass, this.password)
}

module.exports = User