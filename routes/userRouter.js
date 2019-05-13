const express = require('express');
const userRouter = express.Router();
const {User,Food,Exercise} = require('../models');
const bodyParser = require('body-parser');

userRouter.use(bodyParser.json());

// get single user
userRouter.get('/:id',async(req,res)=>{
    try{
        const user = await User.findByPk(req.params.id);
        res.json(user);
    }
    catch(e){
        console.log(`Something went wrong: ${e}`)
    }
})

// make new user
userRouter.post('/create', async(req,res)=>{
    try{
        const newUser = await User.create(req.body);
        res.send(newUser)
    }
    catch(e){
        console.log('Something went wrong: ${e}')
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
