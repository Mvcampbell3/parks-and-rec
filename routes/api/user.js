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

  db.User.findOne({ email: req.body.email })
    .then(dbUser => {
      if (!dbUser) {
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
      } else {
        res.status(422).json({ msg: 'User with email already exists' })
      }
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

        jwt.sign(decoded, process.env.JWT_KEY, { expiresIn: '10h' }, function(err, token) {
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

router.get('/detail', checkAuth, (req, res) => {
  db.User.findById(req.user.id)
    .populate('tripIds')
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router;
