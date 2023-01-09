// const axios = require('axios')
// axios.get not working 

const getBeer = (pageNum, pageSize) => {

    if(pageNum && pageSize) {
        return fetch(`https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=${pageSize}`)
        .then((response) => response.json())
        .then((data) => {
            return data
    });
    } else if(pageNum) {
        return fetch(`https://api.punkapi.com/v2/beers?page=${pageNum}`)
        .then((response) => response.json())
        .then((data) => {
            return data
    });
    } else if(pageSize) {
        return fetch(`https://api.punkapi.com/v2/beers?per_page=${pageSize}`)
        .then((response) => response.json())
        .then((data) => {
            return data
    });
    } else {
        return fetch('https://api.punkapi.com/v2/beers')
        .then((response) => response.json())
        .then((data) => {
            return data
    });
    } 
}

module.exports = {getBeer}