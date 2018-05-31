'use strict'

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {RecipePreferences} = require('./models/recipesModel');


//GET requests will return all current recipes
router.get('/', (req, res) =>
    {
        RecipePreferences
        .find({userID :"11111"})
        .then(RecipePreferences => res.json(
            RecipePreferences.map(recipePreference => recipePreference.serialize())
        ))
        .catch(err =>
        {
            console.error(err);
            res.status(500).json({message : 'Internal Server Error'});
        });   
    });

router.post('/', jsonParser, (req, res) =>
    {
        const requiredFields = ['name', 'frequency', 'day'];
        for( let i = 0; i < requiredFields.length; i++)
        {
            const field = requiredFields[i];
            if(!(field in req.body))
            {
                const message = `Missing ${field} in request body.`;
                console.error(message);
                return res.status(400).send(message);
            }
        }

        let newRecipePreference = 
            {
                name : req.body.name,
                frequency : req.body.frequency,
                day : req.body.day
            };

            console.log(newRecipePreference);

        RecipePreferences
        .findOneAndUpdate( 
            {userID : "11111"},
            { $push : { recipePreferences : newRecipePreference } } )
        .then(newRecipePreference => res.status(201).json(newRecipePreference.serialize()))
        .catch(err =>
        {
            console.error(err);
            res.status(500).json({message : 'Internal server error'});
        });
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