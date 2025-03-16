const express = require('express')
const router = require('./routes/auth')

const app = express()
app.use(express.json())

// rota auth
app.use('/auth', router)

app.listen(3000, () => console.log(`Servidor iniciado\n http://localhost:3000/`))

