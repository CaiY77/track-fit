const express = require('express');
const userRouter = express.Router();
const {User} = require('../models');
const bodyParser = require('body-parser');

userRouter.use(bodyParser.json());

userRouter.get('/:id/goal',async(req,res)=>{
    try{
        const users = await User.findByPk(req.params.id);
        res.json(users);
    }
    catch(e){
        console.log(`Something went wrong: ${e}`)
    }
})

userRouter.post('/create',async(req,res)=>{
    try{
        const makeADog = await Doggo.create(req.body);
        res.send(`New doggo created: name = ${makeADog.dataValues.name}`)
    }
    catch(e){
        console.log('Something went wrong: ${e}')
    }
})
