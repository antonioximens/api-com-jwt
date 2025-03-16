const express = require('express')
const routerAuth = require('./routes/auth')
const routerAdmin = require('./routes/admin')

const app = express()
app.use(express.json())

// rota auth
app.use('/auth', routerAuth)
// rota admin
app.use('/auth', routerAdmin)

app.listen(3000, () => console.log(`Servidor iniciado\n http://localhost:3000/`))

