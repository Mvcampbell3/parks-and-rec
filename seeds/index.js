const db = require('../models');
const parks = require("./seed");

module.exports = function() {
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
    })
}