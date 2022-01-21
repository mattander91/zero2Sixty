const axios = require('axios');


const getData = (url, method) => {
	axios.get(url, options)
    .then(response => {
        console.log('resss: ', response.data); //type of returned content is object
        //return response.text() //not valid function
    })
    .then(data => {
        // this.carData = data;
        //console.log('data: ', data);
    }).catch(err => {
        //console.log(err);
        //handle that errrrr
    });
});

const getMakes = () => {
	//get makes from zero2sixty homepage
}

module.exports = {
	getData: getData
}












