const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

const seedParks = false;
const seedUsers = false;
const seedTrips = false;
const seedRun = require('./seeds');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/parksandrec', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('mongodb connected');

    // Run Parks and/or User seeds first, then run Trips seed with the others set to false
    // End result of Parks seed is re-seeding all 61 parks
    // End result of User seed is creating one user Michael Campbell mvcampbell3@gmail.com password=test
    // End result of Trip seed is creating one trip with test user mvcampbell3@gmail.com to two parks


    if (seedParks) {
      seedRun.seedParks();
    }

    if (seedUsers) {
      seedRun.seedUsers();
    }

    if (seedTrips) {
      seedRun.seedTrips();
    }

    app.listen(PORT, () => {
      console.log(`server is live on http://localhost:${PORT}`);
    })
  })
  .catch(err => {
    console.log(err)
  })