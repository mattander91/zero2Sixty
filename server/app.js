const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const helpers = require('../src/helpers/helpers.js');

const corsOptions = {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    allowedHeaders:  ['Content-Type'],
    optionsSuccessStatus: 200,
    preflightContinue: false
};

app.use(cors(corsOptions));
app.use(express.json());

const port = 4000;

app.post('/getPage', (req, res) => {
    // //URL pattern: https://www.zeroto60times.com/vehicle-make/bmw-0-60-mph-times/    
    const make = req.body.make;
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'text/html',
          'Accept': 'text/html'
        }
      }
    // let url = "https://www.zeroto60times.com/vehicle-make/" + make + "-0-60-mph-times"
    let url = "https://www.0-60specs.com/" + make;
    //let htmlString = helpers.getData(url);
    //let makes = helpers.getMakes(htmlString);
});

app.listen(port, () => {
  console.log(`Example app listening at 3 http://localhost:${port}`)
});