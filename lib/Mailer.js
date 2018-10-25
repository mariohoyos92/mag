const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const fs = require("fs");
const Handlebars = require("handlebars");

class Mailer {
	static get smtpConfig() {
		return {
			auth: {
				api_key: process.env.MAILGUN_API_KEY,
				domain: process.env.MAILGUN_DOMAIN_NAME
			}
		};
	}

	static get templatesDir() {
		return appPath("app/mailers/");
	}

	static get templateName() {
		throw "Template name must be set for mailers.";
	}

	constructor() {
		this.transporter = nodemailer.createTransport(mg(Mailer.smtpConfig));
	}

	sendMessage(data, callback) {
		this.transporter.sendMail(data, function(error, info) {
			console.log(error, info);
			if (error) {
				callback({
					error: error
				});
				return;
			}
			callback(info);
		});
	}

	get template() {
		let templatePath =
			this.constructor.templatesDir +
			this.constructor.templateName +
			".handlebars";
		let source = fs.readFileSync(templatePath, "utf8");
		return Handlebars.compile(source);
	}

	html(data) {
		return this.template(data);
	}
}

module.exports = Mailer;
