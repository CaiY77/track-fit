const express = require('express')
const appRouter = express.Router()
const { passport } = require('../auth/auth')

appRouter.get('/protected', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.json({ message: 'authenticated'})
})

appRouter.get('/profile', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.json({ user: req.user, message: 'success'})
})

module.exports = appRouter
