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

app.get('/getMakes', (req, res) => {
  axios.get('https://www.zeroto60times.com/browse-by-make').then((response) => {
    const makes = helpers.getMakes(response.data);
    res.send(JSON.stringify({makes: makes}));
  });
});

//getYears

app.post('/getModels', (req, res) => {
  `https://www.zeroto60times.com/vehicle-make/ariel-atom-0-60-mph-times`
  let makeWord = req.body.make.split(' '); 
  const make =  makeWord.length > 1 ? makeWord.join('-') : req.body.make;
  axios.get(`https://www.zeroto60times.com/vehicle-make/${make}-0-60-mph-times`).then((response) => {
    let models = helpers.getModels(response.data);
    res.send(JSON.stringify({models: models}));
  });
});

app.listen(port, () => {
  console.log(`Example app listening at 3 http://localhost:${port}`)
});

//testing push