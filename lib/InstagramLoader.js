'use strict';

const ig = require('instagram-node').instagram();
const igOptions = {
  client_id: process.env.INSTAGRAM_CLIENT_ID,
  client_secret: process.env.INSTAGRAM_CLIENT_SECRET
};

console.log(igOptions);
ig.use(igOptions);

class InstagramLoader {
  static mostPopular(callback) {
    ig.media_popular(function (err, medias, remaining, limit) {
      if (err) {
        console.error(`Could not fetch Instagram Popular Media: ${err.error_message}`);
        callback([]);
      }

      callback(medias);
    });
  }
}

const redirect_uri = `${process.env.BASE_URL}handleauth`;
console.log(redirect_uri);

const authorize_user = function (req, res) {
  res.redirect(ig.get_authorization_url(redirect_uri, {
    scope: ['likes'],
    state: 'a state'
  }));
};

const handleauth = function (req, res) {
  ig.authorize_user(req.query.code, redirect_uri, function (err, result) {
    if (err) {
      console.log(err.body);
      res.send(`Didn't work`);
    } else {
      console.log(result.access_token);
      ig.use({
        access_token: result.access_token
      });
      res.send('You made it!!');
    }
  });
};

module.exports = function (app) {
  app.get('/authorize_user', authorize_user);
  app.get('/handleauth', handleauth);

  return InstagramLoader;
};
