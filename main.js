//npm command: 'npm install --save dotenv twit unique-random-array snyk'

// twitter library
const Twit = require('twit')

//define our bot
const config = require('./config')
const bot = new Twit(config.twitterKeys)

// i dont understand this modele system
const download_XML = require('./module/download_xml')

const post_weekly = require('./module/post_weekly')

//here we go
download_XML()
//xml'i indirmesi için birazcık bekliyor
setTimeout(post_weekly, 5000);
//setInterval(post_weekly, config.twitterConfig.weekly)