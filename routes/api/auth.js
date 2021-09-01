const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../../models/User');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Email and password required for authentication' });
  }

  passport.authenticate('local')(req, res, () => {
    res.json(req.user);
  });
});

router.post('/register', async (req, res) => {
  const { email, firstName, lastName, password, password2 } = req.body;
  
  if (!email || !firstName || !lastName || !password || !password2) {
    return res.status(400).json({ msg: 'Please fill in all fields' });
  }

  if (password !== password2) {
    return res.status(400).json({ msg: 'Passwords must match' });
  }

  try {
    let user = await User.findOne({ email }).exec();
    if (user) {
      return res.status(400).json({ msg: 'Please use a different email address' });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user = await User.create({ email, firstName, lastName, password: hash });
    res.status(201).json({ msg: 'User created' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
