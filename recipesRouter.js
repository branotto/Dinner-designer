'use strict'

const TEST_USER_ID = '11111';

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {RecipePreferences} = require('./models/recipesModel');


//GET requests will return all current recipes
router.get('/', (req, res) =>
    {
        RecipePreferences
        .find({userID : TEST_USER_ID})
        .then(RecipePreferences => res.json(
            RecipePreferences.map(recipePreference => recipePreference.serialize())
        ))
        .catch(err =>
        {
            console.error(err);
            res.status(500).json({message : 'Internal Server Error'});
        });   
    });

//POST adds a new recipe to the users recipe preference array 
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
            {userID : TEST_USER_ID},
            { $push : { recipePreferences : newRecipePreference } } )
        .then(res.status(201).json(newRecipePreference))
        .catch(err =>
        {
            console.error(err);
            res.status(500).json({message : 'Internal server error'});
        });
    });    

router.put('/:id', jsonParser, (req, res) =>
    {
        if ( ! (req.params.id && req.body.id && req.params.id === req.body.id))
        {
            const message =
            `Request path id ${req.params.id} and request body id ${req.body.id} must match.`;
            console.error(message);
            return res.status(400).json({message : message});
        }

        const toUpdate = {};
        const updateableFields = ['name', 'frequency', 'day'];

        updateableFields.forEach( field =>
        {
            if(field in req.body)
            {
                toUpdate[field] = req.body[field];
            }
        });

        RecipePreferences
        .update( 
            {
                userID : TEST_USER_ID, "recipePreferences._id" : req.params.id
            },{
                $set : { "recipePreferences.$" : toUpdate }
            })
            .then(recipePreference => res.status(200).json(recipePreference.serialize()))
            .catch(err => res.status(500).json({message : 'Internal Server Error'}));
        });


router.delete('/:id', jsonParser, (req, res) =>
    {
        RecipePreferences
        //remove the subdocument with the matching userID and req.params.id
        
    });

module.exports = router;