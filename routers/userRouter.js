const express = require('express');
const userRouter = express.Router();
const {User,Food,Exercise} = require('../models');
const { passport, jwtSign } = require('../auth/auth.js')
const bodyParser = require('body-parser');
userRouter.use(bodyParser.json());

authRouter.post('/signup', async(req, res, next) => {
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
      const { email, id } = user
      const payload = { email, id }

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









//find all food
userRouter.get('/:id/food', async(req,res)=>{
  try{
    const allFood = await Food.findAll({
      where:{
        user_id: req.params.id
      }
    });
    res.send(allFood);
  }
  catch(e){
    console.log(e)
  }
})

// create food entry
userRouter.post('/:id/create-food', async (req, res) => {
  try {
    const food = await Food.create(req.body);
    const who = await User.findByPk(req.params.id);
    await food.setUser(who);
    res.json(food)
  } catch (e) {
    console.log(e)
  }

})

// update food /update-food/:food_id
userRouter.put('/update-food/:food_id', async (req, res) => {
  try {
    await Food.update(
      req.body
      ,{
        where: {
          id: req.params.food_id
        }
      })
      res.send('updated')
    }catch (e) {
      console.log(e)
    }
})

//delete food
userRouter.delete('/:id/food-entry/:food_id', async (req, res) => {
  try {
    const destroyFood = await Food.destroy({
      where:{
        id: req.params.food_id
      }
    })
  } catch (e) {
    console.log(e)
  }
})


//find all excersise
userRouter.get('/:id/exercise', async(req,res)=>{
  try{
    const allExercise = await Exercise.findAll({
      where:{
        user_id: req.params.id
      }
    });
    res.send(allExercise);
  }
  catch(e){
    console.log(e)
  }
})


//create excercise entry
userRouter.post('/:id/create-exercise', async(req, res) => {
  try{
    const newExerciseEntry = await Exercise.create(req.body)
    const who = await User.findByPk(req.params.id);
    await newExerciseEntry.setUser(who);
    res.json(newExerciseEntry)
  }
  catch(e){
    console.log(e)
  }
})

// update exercise
userRouter.put('/update-exercise/:ex_id', async (req, res) => {
  try {
    await Exercise.update(
      req.body
    ,{
      where: {
        id: req.params.ex_id
      }
    })
    res.send('updated')
  } catch (e) {
    console.log(e)
  }
})

//delete exercise entry
userRouter.delete('/:id/exercise-entry/:exercise_id', async (req, res) => {
  try {
    const destroyExercise = await Exercise.destroy({
      where:{
        id: req.params.exercise_id
      }
    })
  } catch (e) {
    console.log(e)
  }
})


module.exports = {
  userRouter
}
