const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const { db,User,Goal,Food,Exercise } = require('./models');
const { userRouter } = require('./routes/userRouter');
const passport = require('passport')
const authRouter = require('./routes/authRouter')
const appRouter = require('./routes/appRouter')

const { authorized } = require('./auth/auth')
const PORT = process.env.PORT || 3001

const app = express();

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/app', authorized, appRouter)

app.use(passport.initialize())


app.get('/', async (request, response) => {
  try {
    response.json({
      msg: 'Welcome to Track Fit Application!'
    })
  } catch (e) {
    response.status(500).json({ msg: e.status })
  }
});


app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ message: err.message })
})


app.listen(PORT, () => console.log(`Tract Fit app listening on port ${PORT}!`))
