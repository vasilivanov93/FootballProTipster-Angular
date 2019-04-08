const express = require('express')
const Bet = require('../models/Bet');
const User = require('../models/User');

const router = new express.Router()

router.get('/', (req, res) => {
  Bet.find({}).then((bet) => {
    User.find({}).then((users) => {
      return res.status(200).json({
        bet: bet.length,
        users: users.length
      })
    })
  })
})

module.exports = router
