"use strict";

global.rootPath = __dirname + "/";

// require('dotenv').config();
const Application = require(`${rootPath}lib/Application`);
const app = new Application(rootPath, process.env.ENV);
app.start();

module.exports = app.app;
