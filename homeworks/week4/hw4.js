/* eslint-disable no-shadow */
/* eslint-disable quote-props */
const req = require('request');

class Twitch {
  constructor(id = '8jc0sc4uecpt8hbhzav07vytr7kxsc', oauth = 'tnw4tsjgyml7si30dfhkn8sec8g9fg') {
    this.user = {
      clientId: id,
      secret: oauth,
    };
    this.options = {
      url: 'https://api.twitch.tv/kraken/games/top',
      headers: {
        'Client-ID': this.user.clientId,
        'Accept': 'application/vnd.twitchtv.v5+json',
      },
    };
  }

  getTopGameVierwers() {
    req.get(this.options, (err, res, body) => {
      try {
        if (res.statusCode === 200) {
          const response = JSON.parse(body);
          const topGames = response.top;
          topGames.forEach((game) => {
            console.log(`The current viewers: ${game.viewers} Game: ${game.game.name}`);
          });
        } else {
          console.log(`Status Code: ${res.statusCode} Message: ${res.statusMessage}`);
        }
      } catch (err) {
        console.log('Some errors happened');
      }
    });
  }
}


const twitch = new Twitch();

twitch.getTopGameVierwers();
