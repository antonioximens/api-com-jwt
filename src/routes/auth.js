const express = require('express')
const authController = require('../controllers/auth-controller')
const welcomeController = require('../controllers/welcome-controller')
const { optionalAuth } = require('../middlewares/auth-middleware')

const router = express.Router()

// POST auth/register
router.post('/register', authController.resgiter)
router.post('/login', authController.login)

// GET /welcome
router.get('/welcome', optionalAuth,welcomeController.welcome)

module.exports = router 