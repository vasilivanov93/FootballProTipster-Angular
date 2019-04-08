const express = require('express')
const authCheck = require('../middleware/auth-check');
const Bet = require('../models/Bet');

const router = new express.Router()

function validateFurnitureForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.homeTeam !== 'string' || payload.homeTeam.length < 3) {
    isFormValid = false
    errors.make = 'Home team must be more than 3 symbols.'
  }

  if (!payload || typeof payload.awayTeam !== 'string' || payload.awayTeam.length < 3) {
    isFormValid = false
    errors.model = 'Away team must be more than 3 symbols.'
  }
  
  if (!payload || typeof payload.result !== 'string' || payload.result.length < 5) {
    isFormValid = false
    errors.model = 'Result must be more than 5 symbols.'
  }
  
  if (!payload || typeof payload.prediction !== 'string' || payload.prediction.length < 3) {
    isFormValid = false
    errors.model = 'Prediction must be more than 3 symbols.'
  }
  
  if (!payload || typeof payload.odd !== 'string' || payload.odd.length < 4) {
    isFormValid = false
    errors.model = 'Odd must be more than 4 symbols.'
  }
  
    if (!payload || typeof payload.resultBet !== 'string' || payload.resultBet.length < 3) {
    isFormValid = false
    errors.model = 'Result bet must be more than 3 symbols.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const bet = req.body
  const validationResult = validateFurnitureForm(bet)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Bet.create(bet)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Bet added successfully.',
        bet
      })
    })
})

router.get('/history', authCheck ,(req, res) => {
  Bet.find()
	.sort({date: 'descending'})
    .then((bets) => {
      return res.status(200).json({message: 'Loading predictions history.', bets});
    })
})

router.get('/home', authCheck ,(req, res) => {
  Bet.find({isFinished: true})
            .sort({date: 'descending'})
            .limit(5)
			.then((betsHome) => {
			  return res.status(200).json({message: 'Loading predictions history.', betsHome});
			})
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id

  Bet.findById(id)
    .then((bet) => {
      if (!bet) {
        return res.status(200).json({
          success: false,
          message: 'Bet does not exists!'
        })
      }

      if (!req.user.roles.includes("Admin")) {
         return res.status(401).json({
           success: false,
           message: 'Unauthorized!'
         })
      }

      Bet.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Bet deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const bet = req.body;

  if (!bet) {
    return res.status(404).json({
      success: false,
      message: 'Bet does not exists!'
    })
  }

  if (!req.user.roles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    })
  }

  const validationResult = validateFurnitureForm(bet)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Bet.findByIdAndUpdate(id, bet)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Bet edited successfully!'
      })
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Bet.findById(id)
    .then(bet => {
      if (!bet) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        homeTeam: bet.homeTeam,
        awayTeam: bet.awayTeam,
        result: bet.result,
        prediction: bet.prediction,
        odd: bet.odd,
        resultBet: bet.resultBet
      }

      res.status(200).json(response)
    })
})

module.exports = router
