class Application {
  constructor(rootPath, environment) {
    this.rootPath = rootPath;
    global.appPath = (path) => `${rootPath}${path}`;

    if(environment != 'production') { this.loadConfig(environment); }
    this.loadContent();
    this.loadExpress();
  }

  loadConfig(environment) {
    let ConfigLoader = require(appPath('lib/ConfigLoader'));
    ConfigLoader.loadEnvironment(environment);
    global.config = process.env;
  }

  loadContent() {
    global.Content = require(appPath('lib/content'));
  }

  loadExpress() {
    this.express = require('express');
    this.app     = this.express();

    require(appPath('lib/express/views'))(this.app);
    require(appPath('lib/express/routes'))(this.app);
  }

  start() {
    this.app.listen(config.SITE_PORT, function () {
      console.log(`App listening on port ${config.SITE_PORT}`);
    });
  }
}

module.exports = Application;
