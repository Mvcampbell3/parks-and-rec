const router = require('express').Router()
const db = require('../../models');

router.get('/', (req, res) => {
  db.Trip.find()
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(err => res.status(500).json(err))
})

router.get('/detail/:id', (req, res) => {
  db.Trip.findById(req.params.id)
    .populate('parkIds')
    .populate('userId', '-password')
    .then(trip => {
      res.status(200).json(trip)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post('/new', (req, res) => {
  const { userId, parkIds, name } = req.body;

  const newTrip = new db.Trip({
    name,
    userId,
    parkIds
  })

  newTrip.save()
    .then(result => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch(err => res.status(422).json(err))
})

router.delete('/delete/:id', (req, res) => {
  db.Trip.findById(req.params.id)
    .then(trip => {
      trip.remove()
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err => res.status(500).json(err))
    })
})

module.exports = router;