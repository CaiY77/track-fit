const express = require('express')
const authRouter = express.Router()
const { passport, jwtSign } = require('../auth/auth.js')

authRouter.post('/signup', async(req, res, next) => {
    // req.checkBody('username', 'Username field cannot be empty.').notEmpty();
    // req.checkBody('username', 'Username must be between 4-15 characters long.').len(4, 15);
    // req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
    // req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
    // req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
    // req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
    // req.checkBody('passwordMatch', 'Password must be between 8-100 characters long.').len(8, 100);
    // req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);
  
    // // Additional validation to ensure username is alphanumeric with underscores and dashes
    // req.checkBody('username', 'Username can only contain letters, numbers, or underscores.').matches(/^[A-Za-z0-9_-]+$/, 'i');
  
  
  passport.authenticate('signup', async(err, user, info) => {
    try {
      if (err) {
        let error = new Error(err.message || info.message)
        error.status = 400
        return next(error)
      }

      if (!user) {
        return res.status(401).json({message: info.message})
      }

      const { name, id } = user
      const payload = { name, id }

      const token = jwtSign(payload)
      return res.json({user: user, token: token, message: info.message})
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
})

// matches '/auth/login' route
authRouter.post('/login', (req, res, next) => {
    // res.status(200).json({message: "So far so good!"})
    passport.authenticate('login', async(err, user, info) => {
      try {
        let error
  
        if (err) {
          error = new Error(err.message)
          error.status = 500
  
          return next(error)
        }
  
        if (!user) {
          error = new Error(info.message)
          error.status = 400
          return next(error)
        }
  
        req.login(user, { session: false }, async (error) => {
          if (error) return next(error)
  
          if (!user) {
            let err = new Error(info.message)
            err.status = 400
            return next(err)
          }
  
          const { email, id } = user
          const payload = { email, id }
  
          const token = jwtSign(payload)
          return res.json({ user, token })
        })
      } catch (error) {
        return next(error)
      }
    })(req, res, next)
  })
  
  module.exports = authRouter
  