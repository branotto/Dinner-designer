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
        res.send("Hello Dinner Plans");
    });


router.delete('/:id', jsonParser, (req, res) =>
    {
        res.send("Hello Dinner Plans");
    });


module.exports = router;