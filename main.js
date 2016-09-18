global.rootPath = __dirname + '/';

let Application = require(`${rootPath}lib/Application`);
var app = new Application(rootPath, process.env.ENV);
app.start();

module.exports = app.app;
