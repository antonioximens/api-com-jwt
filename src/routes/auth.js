const express = require('express')
const authController = require('../controllers/auth-controller')
const welcomeController = require('../controllers/welcome-controller')
const { optionalAuth} = require('../middlewares/auth-middleware')


const routerAuth = express.Router()

// POST auth/register
routerAuth.post('/register', authController.resgiter)
routerAuth.post('/login', authController.login)

// GET /welcome
routerAuth.get('/welcome', optionalAuth,welcomeController.welcome)

module.exports = routerAuth 