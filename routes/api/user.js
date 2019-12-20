const router = require('express').Router();
const db = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../../middleware/checkAuth')

// Testing route only, remove before deployment
router.get('/all', (req, res) => {
  db.User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post('/signup', (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then(hash => {
      const newUser = new db.User({
        firstname,
        lastname,
        email,
        password: hash
      })

      newUser.save()
        .then(result => {
          res.status(201).json(result)
        })
        .catch(err => {
          res.status(422).json(err)
        })
    })
    .catch(err => {
      res.status(422).json(err)
    })
})

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.User.findOne({ email })
    .then(async function(user) {

      if (!user) {
        return res.status(401).json({ msg: 'Unauthorized' })
      }

      const match = await user.comparePassword(password);

      if (match) {
        const decoded = {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          id: user._id
        };

        jwt.sign(decoded, process.env.JWT_KEY, { expiresIn: '30m' }, function(err, token) {
          if (err) {
            return res.status(500).json({ msg: "JWT ERROR" })
          }
          return res.status(200).json({ login: true, token: token, user: decoded })
        })
      } else {
        return res.status(401).json({ msg: 'Unauthorized' })
      }

    })
    .catch(err => {
      return res.status(401).json({ msg: 'Unauthorized' })
    })
})

// Testing Route Only, remove before deployment
router.get('/wipe', (req, res) => {
  db.User.deleteMany()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err)
    })
})


router.get('/checkauth', checkAuth, (req, res) => {

  res.status(200).json({ loggedIn: true, user: req.user })
})

module.exports = router;
