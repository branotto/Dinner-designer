'use strict'

const TEST_USER_ID = '11111';

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {DinnerPlans} = require('./models/dinnerPlanModel');

//GET requests return the prior meal plans
router.get('/', (req, res) =>
    {
        DinnerPlans
        .find({userID : "11111"})
        .then(DinnerPlans => res.json(
            DinnerPlans.map(dinnerPlan => dinnerPlan.serialize())
        ))
        .catch( err =>
            {
                console.error(err);
                res.status(500).json({message : 'Internal Server Error'});
            });
    });

//Post requests add a new meal plan to the users meal plan array
router.post('/', jsonParser, (req, res) =>
    {
        const requiredFields = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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

        let newDinnerPlan = 
            {
                Sunday : req.body.Sunday,
                Monday : req.body.Monday,
                Tuesday : req.body.Tuesday,
                Wednesday : req.body.Wednesday,
                Thursday : req.body.Thursday,
                Friday : req.body.Friday,
                Saturday : req.body.Saturday
            };

            console.log(newDinnerPlan);

        DinnerPlans
        .findOneAndUpdate( 
            {userID : TEST_USER_ID},
            { $push : { priorMeals : newDinnerPlan } } )
        .then(res.status(201).json(newDinnerPlan))
        .catch(err =>
        {
            console.error(err);
            res.status(500).json({message : 'Internal server error'});
        });
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