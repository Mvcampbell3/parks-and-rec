const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/parksandrec', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('mongodb connected');
    app.listen(PORT, () => {
      console.log(`server is live on http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    console.log(err)
  })