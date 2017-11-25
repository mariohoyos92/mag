'use strict';

require('dotenv').config();

class Application {
  constructor(rootPath, environment) {
    this.rootPath = rootPath;
    global.appPath = (path) => `${rootPath}${path}`;
    this.loadContent();
    this.loadExpress();
  }

  loadContent() {
    global.Content = require(appPath('lib/content'));
  }

  loadExpress() {
    this.express = require('express');
    this.app = this.express();

    require(appPath('lib/express/views'))(this.app);
    this.app.use(function (req, res, next) {
      res.locals.instagramAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
      next();
    });
    require(appPath('lib/express/routes'))(this.app);
  }

  start() {
    this.app.listen(process.env.SITE_PORT, function () {
      console.log(`App listening on port ${process.env.SITE_PORT}`);
    });
  }
}

module.exports = Application;
