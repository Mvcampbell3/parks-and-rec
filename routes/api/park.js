const router = require('express').Router()
const db = require('../../models');

router.get('/all', (req, res) => {
  db.Park.find()
    .sort({ state: 1 })
    .then(parks => {
      res.status(200).json({ parks })
    })
    .catch(err => res.status(500).json(err))
})

router.get('/by-state/:state', (req, res) => {
  db.Park.find({ state: req.params.state })
    .then(parks => res.status(200).json(parks))
    .catch(err => res.status(500).json(err))
})

router.get('/sort/visitors', (req, res) => {
  db.Park.find()
    .sort({ visitors: -1 })
    .then(parks => res.status(200).json(parks))
    .catch(err => res.status(500).json(err))
})

module.exports = router;