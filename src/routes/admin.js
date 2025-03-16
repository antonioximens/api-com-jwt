const express = require('express')
const {ensureAuth, ensureAdmin } = require('../middlewares/auth-middleware')
const userController = require('../controllers/user-controller')

const routerAdmin = express.Router()

// rotas admin
routerAdmin.get('/users', ensureAuth, ensureAdmin, userController.index)
routerAdmin.get('/users/:id', ensureAuth, ensureAdmin, userController.show)
routerAdmin.post('/users', ensureAuth, ensureAdmin, userController.save)
routerAdmin.delete('/users/:id', ensureAuth, ensureAdmin, userController.delete)


module.exports = routerAdmin 