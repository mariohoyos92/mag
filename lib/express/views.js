var exphbs  = require('express-handlebars');

module.exports = function(app) {
  app.set('views', 'app/views/');

  app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: 'app/views/partials',
    layoutsDir: 'app/views/layouts'
  }));
  app.set('view engine', 'handlebars');

  app.use(require('express').static('./public'));
}
