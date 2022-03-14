const express = require ('express')
const app = express()
const userRoutes = require('./routes/userRoutes')

app.use('/')
app.listen(3000)