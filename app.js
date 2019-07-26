const request = require('request');
const url = 'https://api.darksky.net/forecast/6845af35ca447652f3eae9489395c091/37.8267,-122.4233';


request({ url: url }, (error, response)=>{
    const data = JSON.parse(response.body);
    console.log(data);
});