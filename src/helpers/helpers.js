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
        const modelObj = getTextForModelProperty($(ref).text().trim());
        if (modelObj.prop) appendModelData(modelObj, model);
        if (modelObj.last) {
            models.push(model); 
            model = {};
        } 
    });
    models.sort((a,b) => { return ( Number(a.year) - Number(b.year))});
    return models;
};

const appendModelData = (mO, m) => {
    m[mO.prop] = mO.val;
    if (mO.prop === 'fullName') {
        let fullNameWords = mO.val.split(' '); //ex. "1973 BMW 3.0CS"
        m.year = fullNameWords[0];
        m.make = fullNameWords[1];
        m.model = fullNameWords[2];
    }
};

const getTextForModelProperty = (text) => {    
    if (text === '') return {};
    if (text.match('0-60')) {
        return {prop: '0-60', val: text.split(' ').length <= 3 ? text.split(' ')[2] : 'N/A', last: false};
    } else if (text.match('Quarter mile')) {
        return {prop: 'quarterMile', val: text.split(' ')[2], last: true}
    } else {
        return {prop: 'fullName', val: text, last: false}
    }
};

module.exports = {
    getMakes: getMakes,
    getModels: getModels 
}