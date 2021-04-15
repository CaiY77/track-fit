const express = require('express');
const userRouter = express.Router();
const {User,Food,Exercise,Goal} = require('../models');
const bodyParser = require('body-parser');
const authRouter = require('./authRouter')

userRouter.use(bodyParser.json());
userRouter.use('/auth', authRouter);

// get single user
userRouter.get('/:id',async(req,res)=>{
    try{
        const user = await User.findByPk(req.params.id);
        res.header("Access-Control-Allow-Origin", "*")
        res.json(user);
    }
    catch(e){
        console.log(`Something went wrong: ${e}`)
    }
})

//find all food
userRouter.get('/:id/food', async(req,res)=>{
  try{
    const allFood = await Food.findAll({
      where:{
        user_id: req.params.id
      }
    });
    res.header("Access-Control-Allow-Origin", "*")
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
    res.header("Access-Control-Allow-Origin", "*")
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
      res.header("Access-Control-Allow-Origin", "*")
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
    res.header("Access-Control-Allow-Origin", "*")
    res.send('msg: deleted');
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
    res.header("Access-Control-Allow-Origin", "*")
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
    res.header("Access-Control-Allow-Origin", "*")
    res.json(newExerciseEntry)
  }
  catch(e){
    console.log(e)
  }
})

//create Goal
userRouter.post('/:id/create-goal',async(req,res)=>{
  try{
    const newGoal = await Goal.create(req.body);
    const who = await User.findByPk(req.params.id);
    await who.setGoal(newGoal);
    res.header("Access-Control-Allow-Origin", "*")
    res.json(newGoal)
  }
  catch(e){
    console.log(e)
  }
})

//update Goal
userRouter.put('/update-goal/:user_id',async(req,res)=>{
    try{
      await Goal.update(
        req.body,{
          where:{
            user_id: req.params.user_id
          }
        }
      )
      res.header("Access-Control-Allow-Origin", "*")
      res.json({'msg':'updated'});
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
    res.header("Access-Control-Allow-Origin", "*")
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
    res.header("Access-Control-Allow-Origin", "*")
    res.send('msg: deleted');
  } catch (e) {
    console.log(e)
  }
})

//getGoal
userRouter.get('/:id/goal',async(req,res)=>{
  try {
    const goal = await Goal.findOne({
      where:{
        user_id: req.params.id
      }
    })
    res.header("Access-Control-Allow-Origin", "*")
  await (goal)
    ?res.send(goal)
    :res.json({'msg' : 'No Goals Set'})

  } catch (e) {
    console.log(e)
  }

})


module.exports = {
  userRouter
}
