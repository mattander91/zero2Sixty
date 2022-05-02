const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const helpers = require('../src/helpers/helpers.js');

//https://www.scrapingbee.com/blog/cheerio-npm/


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
    // let url = "https://www.zeroto60times.com/vehicle-make/" + make + "-0-60-mph-times"
    let url = "https://www.0-60specs.com/"// + make;
    // const makesString = helpers.getData(url, "GET");
    //const makes = helpers.getMakes(makeString); //array of makes
    //send to front end;
});

app.get('/getMakes', (req, res) => {
  axios.get('https://www.0-60specs.com').then((response) => {
    const makes = helpers.getMakes(response.data);
    res.send(JSON.stringify({makes: makes}));
  });
});

app.post('/getModels', (req, res) => {
  axios.get(`https://www.0-60specs.com/${req.body.make}`).then((response) => {
    const models = helpers.getModels(response.data);
    res.send(JSON.stringify({models: models}));
  });
});

app.listen(port, () => {
  console.log(`Example app listening at 3 http://localhost:${port}`)
});