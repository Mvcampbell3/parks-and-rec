const router = require('express').Router();
const user_routes = require('./user');
const park_routes = require('./park');
const trip_routes = require('./trip');

router.use('/user', user_routes);
router.use('/park', park_routes);
router.use('/trip', trip_routes);

router.get("/", (req, res) => {
  res.json({ok: true})
})

module.exports = router;