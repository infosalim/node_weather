const request = require('request');
const url = 'https://api.darksky.net/forecast/6845af35ca447652f3eae9489395c091/37.8267,-122.4233';


request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect weather service!');
    } else if (response.body.error) {
        console.log('Unable to connect location.');
    } else {
        console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
    }
});


const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGVyZWlzc2FsaW0iLCJhIjoiY2p5a2c3dGs2MGU3MDNtcnU0czl4dG5tMSJ9.W5LkJC1d1IlJ2PDz-i2JCw';

request({ url: geoCodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service!');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search');
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude, longitude);
    }
});