const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan');
const passport = require('passport')
const authRouter = require('./routes/authRouter')
const { db,User,Goal,Food,Exercise } = require('./models');
const { userRouter } = require('./routes/userRouter.js');
const { authorized } = require('./auth/auth')

const app = express();

const PORT = process.env.PORT || 3001

app.use(logger('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/user', userRouter);
app.use('/auth', authRouter);

app.get('/', async (request, response) => {
  try {
    response.json({
      msg: 'Welcome to Track Fit Application!'
    })
  } catch (e) {
    response.status(500).json({ msg: e.status })
  }
});

app.listen(PORT, () => console.log(`Tract Fit app listening on port ${PORT}!`))
