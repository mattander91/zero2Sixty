const axios = require('axios');
const cheerio = require('cheerio');

const getMakes = (htmlString) => {
    let makes = [];
    const $ = cheerio.load(htmlString);
    $('.in-page-menu li').each((idx, ref) => {
        const elem = $(ref);
        elem.text().split(' ').length < 3 ? makes.push(elem.text()) : ''
    });
    return makes;
};

const getModels = (htmlString) => {
    let models = [];
    const $ = cheerio.load(htmlString);
    $('.in-page-menu li').each((idx, ref) => {
        const elem = $(ref);
        models.push(elem.text());
    });
    return models;
};

module.exports = {
    getMakes: getMakes,
    getModels: getModels
}