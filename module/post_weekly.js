const Twit = require('twit')
const config = require('../config')

const param = config.twitterConfig

const bot = new Twit(config.twitterKeys)

function tweetNow(text) {
    let tweet = {
      status: text
    }
  
    bot.post('statuses/update', tweet, (err, data, response) => {
      if (err) {
        console.log('ERRORDERP Tweet', err)
      }
      console.log('SUCCESS: Tweeted: ', text)
    })
  }

const post_weekly = () => {

var xpath = require('xpath'),
    dom   = require('xmldom').DOMParser,
    fs = require('fs');

console.log('Reading the file')

var xml_1 = fs.readFileSync('./xmls/weekly_artist.xml', 'utf8').toString();
var doc_1 = new dom().parseFromString(xml_1)

var artist = xpath.select("//name", doc_1)
var count_1 = xpath.select("//playcount", doc_1)

const report = ('♫ My Top 5 #lastfm artists: ' + artist[0].firstChild.data + '(' + count_1[0].firstChild.data + '), '
+ artist[1].firstChild.data + '(' + count_1[1].firstChild.data + '), ' +
artist[2].firstChild.data + '(' + count_1[2].firstChild.data + '), ' +
artist[3].firstChild.data + '(' + count_1[3].firstChild.data + '), ' +
artist[4].firstChild.data + '(' + count_1[4].firstChild.data + ') agla tweekly')

tweetNow(report)

}

module.exports = post_weekly