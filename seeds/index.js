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
      console.log(result);
      // password for user mvcampbell3@gmail.com = test
      bcrypt.hash('test', 10, function(err, hash) {
        if (err) throw err;
        const newUser = new db.User({
          firstname: 'Michael',
          lastname: 'Campbell',
          email: 'mvcampbell3@gmail.com',
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
    .then(result => {
      console.log(result);

      db.User.findOne({ email: 'mvcampbell3@gmail.com' })
        .then(userDB => {
          console.log(userDB._id)
          console.log(userDB)
          user = userDB._id;
          db.Park.find()
            .then(parks => {
              console.log(user)
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