const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const TripSchema = new Schema({
  name: {
    type: String,
    default: 'Trip'
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  parkIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Park'
  }]
})

TripSchema.pre('save', function(next) {
  console.log(this.userId);
  console.log(this._id);
  User.findByIdAndUpdate(this.userId, { $push: { tripIds: this._id } })
    .then(result => {
      console.log(result);
      next()
    })
    .catch(err => {
      next(err)
    })
})

TripSchema.pre('remove', function(next) {
  User.findByIdAndUpdate(this.userId, { $pull: { tripIds: this._id } })
    .then(result => {
      console.log(result);
      next()
    })
    .catch(err => {
      next(err)
    })
})

const Trip = mongoose.model('Trip', TripSchema);


module.exports = Trip;