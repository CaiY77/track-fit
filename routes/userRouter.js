const express = require('express');
const doggoRouter = express.Router();
const {Doggo} = require('../models');
const bodyParser = require('body-parser');

doggoRouter.use(bodyParser.json());

doggoRouter.get('/',async(req,res)=>{
    try{
        const alldoggos = await Doggo.findAll()
        res.json(alldoggos);
    }
    catch(e){
        console.log(`Something went wrong: ${e}`)
    }
})
