const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const passport = require('passport')
const authRouter = require('./routers/authRouter')
const appRouter = require('./routers/appRouter')
const { authorized } = require('./auth/auth')

// establishing the I/O port
const PORT = process.env.PORT || 3001

// initializing the express app
const app = express()

// configure middleware
app.use(logger('dev'))
app.use(cors())

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())
app.use('/auth', authRouter)
app.use('/app', authorized, userRouter)
app.use(passport.initialize())

app.get('/', async (request, response) => {
  try {
    response.json({message: 'Welcome Track-Fit'})
  } catch (e) {
    response.status(e.status).json({ message: e.status })
  }
})

// centralized error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ message: err.message })
})

app.listen(PORT, () => console.log(`App is up and running listening on port ${PORT}`))
