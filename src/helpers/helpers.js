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
    let model = {};
    $('#statsList .stats__list__accordion__body__stat__top__title, .stats__list__accordion__body__stat__top__right > span:nth-child(-n + 2)'
    ).each((idx, ref) => {
        const elem = $(ref);
        const modelObj = getTextForModelProperty(elem.text().trim());
        // console.log('ind: ', idx + ' ' + elem.text().trim());
        if (modelObj.prop) model[modelObj.prop] = modelObj.val;
        if (modelObj.last) {
            models.push(model); 
            model = {};
        } 
    });
    models.sort((a,b) => { return ( Number(a.name.slice(0,4)) - Number(b.name.slice(0,4)))});
    return models;
};

const getTextForModelProperty = (text) => {    
    if (text === '') return {};
    if (text.match('0-60')) {
        return {prop: '0-60', val: text.split(' ').length <= 3 ? text.split(' ')[2] : 'N/A', last: false};
    } else if (text.match('Quarter mile')) {
        return {prop: 'Quarter mile', val: text.split(' ')[2], last: true}
    } else {
        return {prop: 'name', val: text, last: false}
    }
};

module.exports = {
    getMakes: getMakes,
    getModels: getModels
}