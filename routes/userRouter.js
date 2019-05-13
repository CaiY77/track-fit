const express = require('express');
const userRouter = express.Router();
const {User} = require('../models');
const bodyParser = require('body-parser');

userRouter.use(bodyParser.json());

userRouter.get('/:id',async(req,res)=>{
    try{
        const users = await User.findByPk(req.params.id);
        res.json(users);
    }
    catch(e){
        console.log(`Something went wrong: ${e}`)
    }
})



module.exports = {
  userRouter
}
