'use strict'

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/', (req, res) =>
    {
        res.send("Hello Dinner Plans");
    });

    //Post requests creates a new meal plan
    //based on the # of days the user selects
router.post('/', jsonParser, (req, res) =>
    {
       res.send("Hello Dinner Plans");
       //extract the number of days from the body
       //query database for recipe preferences
       //query database for prior meals
       //build the meal plan, return to client
       //pick your meals()
       //create the meals object
       //send response
       
    });    

router.put('/:id', jsonParser, (req, res) =>
    {
        //get the object for the user
        //pass that object and get the meal
        //get username.priormeal.${id};
        //edit based on the new object
        //respond
        res.send("Hello Dinner Plans");
    });


router.delete('/:id', jsonParser, (req, res) =>
    {
        //get the object for the user
        //delete username.priormeals.${id}
        res.send("Hello Dinner Plans");
    });


module.exports = router;