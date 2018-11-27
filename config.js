require('dotenv').config({ path: 'YOUR_FULL_DOT_ENV_PATH_HERE' })

module.exports = {
  twitterKeys: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  },
  lastfmKeys: {
    api_key: process.env.LASTFM_API_KEY,
    username: process.env.LASTFM_USERNAME
  },
  twitterConfig:{
    weekly: process.env.TWITTER_POST_INTERVAL
  }
}
