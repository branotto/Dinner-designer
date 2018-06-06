'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.Promise = global.Promise;

const { PORT, DATABASE_URL } = require('./config');

const app = express();

const recipesRouter = require('./recipesRouter');
const dinnerPlansRouter = require('./dinnerPlansRouter');

app.use(bodyParser.json());
app.use(morgan('common'));

app.use(express.static('public'));

app.use('/recipes', recipesRouter);
app.use('/dinnerplans', dinnerPlansRouter);

let server;

//starts the server and returns a Promise.
function runServer(databaseUrl, port = PORT) 
{
    return new Promise((resolve, reject) => 
    {
      mongoose.connect(databaseUrl, err =>
      {
        if(err)
        {
          return reject(err);
        }
      
        server = app.listen(port, () => 
        {
          console.log(`Your app is listening on port ${port}`);
          resolve();
        }).on('error', err => 
       {
          mongoose.disconnect();
          reject(err)
        });
    });
  });
}
  
// closes the server
function closeServer() 
{
  return mongoose.disconnect()
  .then( () =>
    {
      return new Promise((resolve, reject) => 
      {
        console.log('Closing server');
        server.close(err => 
        {
          if (err) 
          {
            return reject(err);
          }

          resolve();

        });
      });
    });
}

if (require.main === module) 
{
    runServer(DATABASE_URL).catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
