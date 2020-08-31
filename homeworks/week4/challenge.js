/* eslint-disable no-shadow */
/* eslint-disable quote-props */
const req = require('request');

const gameName = process.argv[2];
const totalLiveStreams = process.argv[3];


function getStreams(options, callback) {
  req.get(options, callback);
}

function getTotalStreams(game = 'Just Chatting', total = 100, callback) {
  let totalLimit = total;
  if (totalLimit > 100) {
    totalLimit = 100;
  }
  let offset = 0;
  const options = {
    url: `https://api.twitch.tv/kraken/streams/?game=${game}&limit=${totalLimit}&offset=${offset}`,
    headers: {
      'Client-ID': '8jc0sc4uecpt8hbhzav07vytr7kxsc',
      'Accept': 'application/vnd.twitchtv.v5+json',
    },
  };
  let totalStreams = [];

  // eslint-disable-next-line consistent-return
  function processStreams(err, res, body) {
    if (err) {
      return callback(err);
    }
    if (res.statusCode >= 200 && res.statusCode < 300) {
      try {
        const data = JSON.parse(body);
        totalStreams = totalStreams.concat(data.streams);
        if (totalStreams.length < total) {
          offset += 100;
          options.url = `https://api.twitch.tv/kraken/streams/?game=${game}&limit=${totalLimit}&offset=${offset}`;
          getStreams(options, processStreams);
        } else {
          callback(null, totalStreams);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  }
  getStreams(options, processStreams);
}

if (gameName !== undefined || totalLiveStreams !== undefined) {
  getTotalStreams(gameName, 200, (err, streams) => {
    if (err) {
      console.log(err);
    }
    // streams.sort((a, b) => b.viewers - a.viewers);
    for (let i = 0; i < streams.length; i++) {
      // eslint-disable-next-line no-underscore-dangle
      console.log(`名稱: ${streams[i].channel.display_name}, ID: ${streams[i].channel._id} 當前觀眾人數: ${streams[i].viewers}`);
    }
  });
} else {
  console.log('Enter a game name and a number for searching!');
}
