const request = require('request');
const yargs = require('yargs');
const _ = require ('lodash');
const geocode = require('./geocode/geocode');
const argv = yargs.argv

if (_.toString(argv.address).length != 0){
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    } else{
        console.log(JSON.stringify(results, undefined, 2));
        geocode.geocodeWeather(results);
    } 

});

} else if (_.toString(argv.help).length != 0){
    console.log ('provide address using --address=<address_goes_here>');
} else {
    console.log('provide address using --address=<> or use --help');
}

