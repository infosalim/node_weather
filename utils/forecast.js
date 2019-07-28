const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/6845af35ca447652f3eae9489395c091/${latitude}, ${longitude}`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to connect location.', undefined);
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
        }
    });
}

module.exports = forecast;