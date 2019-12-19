const db = require('../models');
const parks = require("./seed");
const bcrypt = require('bcrypt');

module.exports.seedParks = function() {
  db.Park.deleteMany()
    .then(() => {
      let promises = []
      parks.forEach(park => promises.push(park.save()))

      Promise.all(promises)
        .then(result => {
          console.log(result)
        })
        .catch(err => {
          console.log(err)
        })
    });
}

module.exports.seedUsers = function() {
  db.User.deleteMany()
    .then(result => {
      // password for user test@gmail.com = test
      bcrypt.hash('test', 10, function(err, hash) {
        if (err) throw err;
        const newUser = new db.User({
          firstname: 'Test',
          lastname: 'User',
          email: 'test@gmail.com',
          password: hash
        })

        newUser.save()
          .then(user => console.log(user))
          .catch(err => console.log(err))
      })
    })
    .catch(err => console.log(err))
}

module.exports.seedTrips = function() {

  let user;

  db.Trip.deleteMany()
    .then(() => {
      db.User.findOne({ email: 'test@gmail.com' })
        .then(userDB => {

          user = userDB._id;
          db.Park.find()
            .then(parks => {

              const newTrip = new db.Trip({
                userId: user,
                parkIds: [
                  parks[40]._id,
                  parks[12]._id
                ],
                name: 'Test Trip'
              })

              newTrip.save()
                .then(result => console.log(result))
                .catch(err => console.log(err))
            })

        });


    })
    .catch(err => {
      console.log(err)
    })
}