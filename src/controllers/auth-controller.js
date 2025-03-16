const { JWT_SECRET } = require("../config/environment")
const users = require("../models/users")
const jwt = require('jsonwebtoken')

module.exports = {
    // POST auth/register
    resgiter: (req, res) => {
        const {name, email, password} = req.body

        // verificando dados
        if(!name || !email || !password || !name.trim() || !email.trim() || !password.trim()){
            res.status(400).json( { messagae: 'Invalid credentials'})
        }

        if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: 'Invalid fields!' })
        }

        const registerUser = users.registerUser(name, email, password)

        if(!registerUser) {
            return res.status(400).json({ message: 'Email already in use!' })
        }

        res.status(201).json(registerUser)

    },

    // POST auth/login
    login: (req, res) => {
        const {email, password} = req.body

        // verificando dados
        if( !email || !password || !email.trim() || !password.trim()){
            res.status(400).json( { messagae: 'Invalid credentials'})
        }

        if (typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: 'Invalid fields!' })
        }
        
        const user = users.findByEmail(email)

        if(!user) return res.status(404).json({ message: 'User not found!'})

        if(user.password !== password) return res.status(404).json({ message: 'Invalid credentials'})

        const payload = {id: user.id, email: user.email}
        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1d'})

        res.status(200).json({ token })        
    }
}