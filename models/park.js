const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  state: {
    type: String,
    required: true
  },

  visitors: {
    type: Number,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  img_url: {
    type: String,
    required: true
  }

})

module.exports = Park = mongoose.model('Park', ParkSchema)