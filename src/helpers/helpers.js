const axios = require('axios');
const cheerio = require('cheerio');

const getMakes = (htmlString) => {
    let makes = [];
    const $ = cheerio.load(htmlString);
    $('.by-make__logos .text-center').each((idx, ref) => {
        const elem = $(ref);
        elem.text().split(' ').length < 3 ? makes.push(elem.text()) : ''
    });
    return makes;
};

const getModels = (htmlString) => {
    let models = [];
    const $ = cheerio.load(htmlString);
    $('#statsList .stats__list__accordion__body__stat__top__title, .stats__list__accordion__body__stat__top__right__stat-time').each((idx, ref) => {
        const elem = $(ref);
        models.push(elem.text());
    });
    let sorted = models.sort((a,b) => { return Number(a.slice(3,7)) - Number(b.slice(3,7)) });
    return sorted;
};

module.exports = {
    getMakes: getMakes,
    getModels: getModels
}