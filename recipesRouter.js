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
       res.send("Hello Recipes");
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