'use strict'

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/', (req, res) =>
    {
        res.send("Hello Recipes");
    });

router.post('/', jsonParser, (req, res) =>
    {
        let newRecipe = 
        {
            "name" : req.name,
            "frequency" : req.frequency,
            "day" : req.day
        }

        res.json(newRecipe);
    });    

router.put('/:id', jsonParser, (req, res) =>
    {
        res.send("Hello Recipes");
    });


router.delete('/:id', jsonParser, (req, res) =>
    {
        res.send("Hello Recipes");
    });

module.exports = router;