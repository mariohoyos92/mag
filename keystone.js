// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
// require('dotenv').config();

// Require keystone
var keystone = require("keystone");
var handlebars = require("express-handlebars");

keystone.init({
	name: "mag",
	brand: "mag",

	sass: "public",
	static: "public",
	favicon: "public/favicon.ico",
	views: "templates/views",
	"view engine": "hbs",

	"custom engine": handlebars.create({
		layoutsDir: "templates/views/layouts",
		partialsDir: "templates/views/partials",
		defaultLayout: "default",
		helpers: new require("./templates/views/helpers")(),
		extname: ".hbs"
	}).engine,

	"auto update": true,
	session: true,
	auth: true,
	"user model": "User"
});
keystone.import("models");
keystone.set("locals", {
	_: require("lodash"),
	env: keystone.get("env"),
	utils: keystone.utils,
	editable: keystone.content.editable
});
keystone.set("routes", require("./routes"));
keystone.Email.defaults.templateExt = "hbs";
keystone.Email.defaults.templateEngine = require("handlebars");

keystone.set("nav", {
	posts: ["posts", "post-categories"],
	enquiries: "enquiries",
	users: "users"
});

keystone.start();
