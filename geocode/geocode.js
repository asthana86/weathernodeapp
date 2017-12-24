const request = require('request');

var geocodeAddress = (address, callback) => {
    var address = encodeURIComponent(address);
    request({
        url:'https://maps.googleapis.com/maps/api/geocode/json?address=' + address,
        json:true
    }, (error, response, body) => {
        if (error){
            callback('Unable to connect to google servers');
        } else if (body.status === 'ZERO_RESULTS'){
            callback('Unable to connect to google servers');
        }
        else {
            callback(undefined, results = {
                latitude: body.results[0]["geometry"]["location"]["lat"],
                longitude: body.results[0]["geometry"]["location"]["lng"]
            })
        }
    })
};



var geocodeWeather = (results) => {
    console.log('inside geocodeWeather');
    latitude = results.latitude;
    longitude = results.longitude;
    request({
    url: 'https://api.darksky.net/forecast/717ad5f8634ea99feaad5fdf36d9e1d4/' + latitude + ',' + longitude,
    json: true
    }, (error, response, body) => {
        console.log('timezone',  body.timezone);
        console.log('summary:', body.currently.summary);
        console.log('temperature', body.currently.temperature);
      //  console.log('alerts:title', body.alerts[0].title);
      //  console.log('alerts:description', body.alerts[0].description);
    }
);
}

module.exports = {
    geocodeAddress,
    geocodeWeather
}