let ContactMailer = require(appPath('lib/ContactMailer'));
// let InstagramLoader = require('./InstagramLoader');

module.exports = function(app) {
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());

  app.get('/', function (req, res) {
    res.render('home', {bodyClass: 'home-template'});
  });

  app.get('/about', function (req, res) {
    res.render('about', {
      bodyClass: 'post-template',
      experience: Content.experience,
      awards: Content.awards
    });
  });

  app.get('/services', function (req, res) {
    res.render('services', {
      bodyClass: 'post-template'
    });
  });

  app.get('/styleguide', function (req, res) {
    res.render('styleguide', {bodyClass: 'post-template'});
  });

  app.get('/publications', function (req, res) {
    res.render('publications', {
      bodyClass: 'post-template',
      poems: Content.publications.poetry,
      essays: Content.publications.essays,
      reviews: Content.publications.reviews,
      interviews: Content.publications.interviews
    });
  });

  app.get('/events', function (req, res) {
    res.render('events', {
      bodyClass: 'post-template',
      pastEvents: Content.events.readings
    });
  });

  app.get('/poem', function (req, res) {
    res.render('poem', {bodyClass: 'post-template'});
  });

  app.post('/contact_form', function(req, res){
    let name = req.body.contact_name;
    let email = req.body.contact_email;
    let body = req.body.contact_body;

    let mailer = new ContactMailer({
      contact_name: name,
      contact_email: email,
      body: body
    })

    mailer.send(function(mailerResp){
      if(mailerResp.error) {
        res.json(mailerResp.error);
      }

      res.json(mailerResp);
    })
  });

  // InstagramLoader(app);

  app.get('/instagram', function (req, res) {
    // Content.instagram(function(medias){
    //   res.json(medias);
    // })
  });
}
