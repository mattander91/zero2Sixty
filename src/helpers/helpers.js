const axios = require('axios');


const getData = (url, method) => {
	const options = {
        method: method,
        headers: {
          'Content-Type': 'text/html',
          'Accept': 'text/html'
        }
      }
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
};

const getMakes = (htmlString) => {
	//parse HTML string to get make names
	//return array of names
}

module.exports = {
	getData: getData
}












