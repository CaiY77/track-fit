const express = require('express');
const userRouter = express.Router();
const {User} = require('../models');
const bodyParser = require('body-parser');

userRouter.use(bodyParser.json());

// get single user
userRouter.get('/:id',async(req,res)=>{
    try{
        const users = await User.findByPk(req.params.id);
        res.json(users);
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

userRouter.post('/:id/foodEntry', async (req, res) => {
  try {
    const newFoodEntry = await Food.create(req.body)
    res.send(newFoodEntry)
  } catch (e) {
    console.log(e)
  }

})


//delete food

module.exports = {
  userRouter
}
