'use strict'

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/', (req, res) =>
    {
        res.send("Hello Dinner Plans");
    });

router.post('/', jsonParser, (req, res) =>
    {
       res.send("Hello Dinner Plans");
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