// global.config      = require('dotenv').config();
loadEnvironment();
global.config      = process.env
global.rootPath    = __dirname + '/';
global.contentPath = rootPath + 'content/';
global.Content     = require('./lib/content');

console.log(config);

var express = require('express');
var app     = express();

require('./lib/views')(app);
require('./lib/routes')(app);

loadEnvironment = (process.env.ENV)

app.use(function(req, res, next) {
  res.locals.instagramAccessToken = config.INSTAGRAM_ACCESS_TOKEN;
  next();
});

app.listen(config.SITE_PORT, function () {
  console.log(`App listening on port ${config.SITE_PORT}`);
});

module.exports = app;
