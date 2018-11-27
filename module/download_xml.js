const Twit = require('twit')
const config = require('../config')

var http = require('http');
var fs = require('fs');
var dir = './xmls';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const credential = config.lastfmKeys
const key = credential.api_key
const username = credential.username
const downloadXML = () => {
console.log('Downloading the XML file..')

    
var file_1 = fs.createWriteStream('./xmls/weekly_artist.xml');
var request = http.get("http://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=" + username + "&api_key=" + key, function(response) {
  response.pipe(file_1);
});

}
module.exports = downloadXML