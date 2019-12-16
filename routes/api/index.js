const router = require('express').Router();
const user_routes = require('./user')

router.use('/user', user_routes)

router.get("/", (req, res) => {
  res.json({ok: true})
})

module.exports = router;